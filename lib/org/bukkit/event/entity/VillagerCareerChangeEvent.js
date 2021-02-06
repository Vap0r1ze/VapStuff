export default class VillagerCareerChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VillagerCareerChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new VillagerCareerChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VillagerCareerChangeEvent.$javaClass.getHandlerList(...args);
    }
}
