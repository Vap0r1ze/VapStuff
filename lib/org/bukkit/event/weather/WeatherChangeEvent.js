"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.WeatherChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof WeatherChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new WeatherChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WeatherChangeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = WeatherChangeEvent;
