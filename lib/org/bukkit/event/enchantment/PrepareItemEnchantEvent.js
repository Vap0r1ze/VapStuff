export default class PrepareItemEnchantEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.enchantment.PrepareItemEnchantEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PrepareItemEnchantEvent.$javaClass;
    }
    constructor(...args) {
        return new PrepareItemEnchantEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PrepareItemEnchantEvent.$javaClass.getHandlerList(...args);
    }
}
