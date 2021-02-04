import Color from './Color.js';
export default interface DyeColor {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getColor(): Color;
    getDeclaringClass(): any;
    getDyeData(): number;
    getFireworkColor(): Color;
    getWoolData(): number;
    name(): string;
    ordinal(): number;
}
export default class DyeColor {
    static get $javaClass(): any;
    static get BLACK(): DyeColor;
    static get BLUE(): DyeColor;
    static get BROWN(): DyeColor;
    static get CYAN(): DyeColor;
    static get GRAY(): DyeColor;
    static get GREEN(): DyeColor;
    static get LIGHT_BLUE(): DyeColor;
    static get LIGHT_GRAY(): DyeColor;
    static get LIME(): DyeColor;
    static get MAGENTA(): DyeColor;
    static get ORANGE(): DyeColor;
    static get PINK(): DyeColor;
    static get PURPLE(): DyeColor;
    static get RED(): DyeColor;
    static get WHITE(): DyeColor;
    static get YELLOW(): DyeColor;
}
