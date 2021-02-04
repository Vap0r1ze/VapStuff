import MapFont from './MapFont.js';
import MapFont$CharacterSprite from './MapFont$CharacterSprite.js';
export default interface MinecraftFont extends MapFont {
    getChar(ch: string): MapFont$CharacterSprite;
    getHeight(): number;
    getWidth(text: string): number;
    isValid(text: string): boolean;
    setChar(ch: string, sprite: MapFont$CharacterSprite): void;
}
export default class MinecraftFont {
    static get $javaClass(): any;
    constructor();
    static get Font(): MinecraftFont;
}
