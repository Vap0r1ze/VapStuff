export default class WorldLoadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldLoadEvent');
    }
    static $isInstance(obj) {
        return obj instanceof WorldLoadEvent.$javaClass;
    }
    constructor(...args) {
        return new WorldLoadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WorldLoadEvent.$javaClass.getHandlerList(...args);
    }
}
