export default class WeatherEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.WeatherEvent');
    }
    static $isInstance(obj) {
        return obj instanceof WeatherEvent.$javaClass;
    }
    constructor(...args) {
        return new WeatherEvent.$javaClass(...args);
    }
}
