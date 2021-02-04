export default class WeatherType {
    static get $javaClass() {
        return Java.type('org.bukkit.WeatherType');
    }
    static get CLEAR() {
        return this.$javaClass.CLEAR;
    }
    static get DOWNFALL() {
        return this.$javaClass.DOWNFALL;
    }
}
