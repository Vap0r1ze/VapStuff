import ConfigurationSerializable from './configuration/serialization/ConfigurationSerializable.js';
import DyeColor from './DyeColor.js';
export default interface Color extends ConfigurationSerializable {
    asBGR(): number;
    asRGB(): number;
    getBlue(): number;
    getGreen(): number;
    getRed(): number;
    mixColors(colors: Array<Color>): Color;
    mixDyes(colors: Array<DyeColor>): Color;
    serialize(): any;
    setBlue(blue: number): Color;
    setGreen(green: number): Color;
    setRed(red: number): Color;
}
export default class Color {
    static get $javaClass(): any;
    static get AQUA(): Color;
    static get BLACK(): Color;
    static get BLUE(): Color;
    static get FUCHSIA(): Color;
    static get GRAY(): Color;
    static get GREEN(): Color;
    static get LIME(): Color;
    static get MAROON(): Color;
    static get NAVY(): Color;
    static get OLIVE(): Color;
    static get ORANGE(): Color;
    static get PURPLE(): Color;
    static get RED(): Color;
    static get SILVER(): Color;
    static get TEAL(): Color;
    static get WHITE(): Color;
    static get YELLOW(): Color;
    static deserialize(map: any): Color;
    static fromBGR(bgr: number): Color;
    static fromBGR(blue: number, green: number, red: number): Color;
    static fromRGB(rgb: number): Color;
    static fromRGB(red: number, green: number, blue: number): Color;
}
