export default class HorseJumpEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.HorseJumpEvent');
    }
    static $isInstance(obj) {
        return obj instanceof HorseJumpEvent.$javaClass;
    }
    constructor(...args) {
        return new HorseJumpEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HorseJumpEvent.$javaClass.getHandlerList(...args);
    }
}
