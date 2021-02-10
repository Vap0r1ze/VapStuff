"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapFont$CharacterSprite {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapFont$CharacterSprite');
    }
    static $isInstance(obj) {
        return obj instanceof MapFont$CharacterSprite.$javaClass;
    }
    constructor(...args) {
        return new MapFont$CharacterSprite.$javaClass(...args);
    }
}
exports.default = MapFont$CharacterSprite;
