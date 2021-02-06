export default class ThunderChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.ThunderChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ThunderChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new ThunderChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ThunderChangeEvent.$javaClass.getHandlerList(...args);
    }
}
