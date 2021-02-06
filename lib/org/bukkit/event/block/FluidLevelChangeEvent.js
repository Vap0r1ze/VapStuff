export default class FluidLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.FluidLevelChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof FluidLevelChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new FluidLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FluidLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
