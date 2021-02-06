export default class SpongeAbsorbEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.SpongeAbsorbEvent');
    }
    static $isInstance(obj) {
        return obj instanceof SpongeAbsorbEvent.$javaClass;
    }
    constructor(...args) {
        return new SpongeAbsorbEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SpongeAbsorbEvent.$javaClass.getHandlerList(...args);
    }
}
