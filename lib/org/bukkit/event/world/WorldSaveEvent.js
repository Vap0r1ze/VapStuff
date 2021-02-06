export default class WorldSaveEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldSaveEvent');
    }
    static $isInstance(obj) {
        return obj instanceof WorldSaveEvent.$javaClass;
    }
    constructor(...args) {
        return new WorldSaveEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WorldSaveEvent.$javaClass.getHandlerList(...args);
    }
}
