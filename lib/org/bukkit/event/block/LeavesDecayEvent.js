export default class LeavesDecayEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.LeavesDecayEvent');
    }
    static $isInstance(obj) {
        return obj instanceof LeavesDecayEvent.$javaClass;
    }
    constructor(...args) {
        return new LeavesDecayEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return LeavesDecayEvent.$javaClass.getHandlerList(...args);
    }
}
