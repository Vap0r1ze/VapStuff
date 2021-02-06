export default class FireworkExplodeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.FireworkExplodeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof FireworkExplodeEvent.$javaClass;
    }
    constructor(...args) {
        return new FireworkExplodeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FireworkExplodeEvent.$javaClass.getHandlerList(...args);
    }
}
