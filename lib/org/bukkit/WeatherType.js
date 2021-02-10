"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherType {
    static get $javaClass() {
        return Java.type('org.bukkit.WeatherType');
    }
    static $isInstance(obj) {
        return obj instanceof WeatherType.$javaClass;
    }
    static get CLEAR() {
        return this.$javaClass.CLEAR;
    }
    static get DOWNFALL() {
        return this.$javaClass.DOWNFALL;
    }
}
exports.default = WeatherType;
