export default class FoodLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.FoodLevelChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof FoodLevelChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new FoodLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FoodLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
