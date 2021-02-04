import MapFont$CharacterSprite from './MapFont$CharacterSprite.js';
export default interface MapFont {
    getChar(ch: string): MapFont$CharacterSprite;
    getHeight(): number;
    getWidth(text: string): number;
    isValid(text: string): boolean;
    setChar(ch: string, sprite: MapFont$CharacterSprite): void;
}
export default class MapFont {
    static get $javaClass(): any;
    constructor();
}
