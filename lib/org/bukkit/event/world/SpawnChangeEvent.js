export default class SpawnChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.SpawnChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof SpawnChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new SpawnChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SpawnChangeEvent.$javaClass.getHandlerList(...args);
    }
}
