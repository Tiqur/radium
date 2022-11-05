/* eslint-disable */
import styles from './styles.module.scss';
import TopBar from './components/TopBar/main';
import SideBar from './components/SideBar/main';
import Corner from './components/Corner/main';
import { useRef, useEffect, useState } from 'react';

async function getData(startTime, endTime, timeframe, limit) {
  return new Promise(resolve => {
    axios.get(`https://fapi.binance.com/fapi/v1/klines?symbol=BTCUSDT&startTime=${startTime}&endTime=${endTime}&interval=${timeframe}&limit=${limit}`).then((res) => {
      resolve(res.data.map(e => ({
        time: e[0],
        open: +e[1],
        high: +e[2],
        low: +e[3],
        close: +e[4]
      })));
    })
  })
}

function App() {
  const chartRef = useRef(null);
  const chartContainerRef = useRef(null);
  let chart = useRef(null);
  let series = useRef(null);

  useEffect(() => {
    let data = [];
    chart = LightweightCharts.createChart(chartContainerRef.current, {
      width: 0,
      height: 0,
      layout: {
          backgroundColor: '#171b26',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      crosshair: {
        mode: LightweightCharts.CrosshairMode.Magnet,
      },
      priceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
      },
    });

    series = chart.addCandlestickSeries({
      upColor: '#ffffff',
      downColor: '#3179f5',
      borderDownColor: '#3179f5',
      borderUpColor: '#ffffff',
      wickDownColor: '#3179f5',
      wickUpColor: '#ffffff',
    });


    // Handle when chart is scrolled and it needs to fetch more data
    async function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {
      const barsInfo = series.barsInLogicalRange(newVisibleLogicalRange);
      // if there less than 50 bars to the left of the visible area
      if (barsInfo !== null && barsInfo.barsBefore < 50) {
        const timeframe = '1m';
        const limit = 500;
        const endTime = data[0].time;
        const startTime = endTime-limit*60000;

        // Fetch 
        console.log(`Fetching data from: ${startTime} to ${endTime} (${limit} ${timeframe} bars)`, data)
        const newData = await getData(startTime, endTime, timeframe, limit);

        // TODO: THIS IS HACKY, FIX LATER ( Allows the sending of lots of useless api requests )
        if (newData[newData.length-1].time+60000 === data[0].time)
          // Prepend to data array
          data = [...newData, ...data];

        // Set data on chart
        series.setData(data);
      }
    }


    // Set data on first load
    axios.get('https://fapi.binance.com/fapi/v1/klines?symbol=BTCUSDT&interval=1m').then((res) => {
      data = res.data.map(e => ({
         time: e[0],
         open: +e[1],
         high: +e[2],
         low: +e[3],
         close: +e[4]
      }));
      series.setData(data);
    }).then(() => {
      // Fetch more data when needed
      chart.timeScale().subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChanged);
    });


    

    //const box = {
    //  lowPrice: 180.0,
    //  highPrice: 211.0,
    //  earlyTime: 1542960000,
    //  lateTime: 1555398000,
    //  borderColor: '#00008B',
    //  borderWidth: 3,
    //  borderStyle: LightweightCharts.LineStyle.Dashed,
    //  fillColor: '#0ff',
    //  fillOpacity: 0.2,
    //  borderVisible: true,
    //  axisLabelVisible: false,
    //  title: 'My box',
    //};

    //candleSeries.createBox(box);


    //const markers = [
    //  { time: 1542960000, position: 'aboveBar', color: '#f68410', shape: 'arrowDown', text: 'D' },
    //  { time: 1555398000, position: 'aboveBar', color: '#f68410', shape: 'arrowDown', text: 'D' }
    //];
    //candleSeries.setMarkers(markers);

    // Handler to call on window resize
    function handleResize() {
      chart.resize(document.body.offsetWidth-60, document.body.offsetHeight-60)
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])


  return (
    <div className={styles.container}>
      <TopBar/>
      <SideBar/>
      <Corner/>
    <div className={styles.chartContainer} ref={chartContainerRef}>
        <div ref={chartRef}/>
      </div>
    </div>
  );
}

export default App;
