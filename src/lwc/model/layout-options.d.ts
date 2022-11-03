/**
 * Represents a type of color.
 */
export declare const enum ColorType {
    /** Solid color */
    Solid = "solid",
    /** Vertical gradient color */
    VerticalGradient = "gradient"
}
/**
 * Represents a solid color.
 */
export interface SolidColor {
    /**
     * Type of color.
     */
    type: ColorType.Solid;
    /**
     * Color.
     */
    color: string;
}
/**
 * Represents a vertical gradient of two colors.
 */
export interface VerticalGradientColor {
    /**
     * Type of color.
     */
    type: ColorType.VerticalGradient;
    /**
     * Top color
     */
    topColor: string;
    /**
     * Bottom color
     */
    bottomColor: string;
}
/**
 * Represents the background color of the chart.
 */
export declare type Background = SolidColor | VerticalGradientColor;
/** Represents layout options */
export interface LayoutOptions {
    /**
     * Chart and scales background color.
     *
     * @defaultValue `{ type: ColorType.Solid, color: '#FFFFFF' }`
     */
    background: Background;
    /**
     * @deprecated Use background instead.
     */
    backgroundColor: string;
    /**
     * Color of text on the scales.
     *
     * @defaultValue `'#191919'`
     */
    textColor: string;
    /**
     * Font size of text on scales in pixels.
     *
     * @defaultValue `11`
     */
    fontSize: number;
    /**
     * Font family of text on the scales.
     *
     * @defaultValue `'Trebuchet MS', Roboto, Ubuntu, sans-serif`
     */
    fontFamily: string;
}
export declare type LayoutOptionsInternal = Omit<LayoutOptions, 'backgroundColor'>;
