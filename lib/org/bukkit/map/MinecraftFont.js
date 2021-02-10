"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MinecraftFont {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MinecraftFont');
    }
    static $isInstance(obj) {
        return obj instanceof MinecraftFont.$javaClass;
    }
    constructor(...args) {
        return new MinecraftFont.$javaClass(...args);
    }
    static get Font() {
        return MinecraftFont.$javaClass.Font;
    }
}
exports.default = MinecraftFont;
