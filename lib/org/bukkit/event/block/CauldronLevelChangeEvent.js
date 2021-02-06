export default class CauldronLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof CauldronLevelChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new CauldronLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CauldronLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
