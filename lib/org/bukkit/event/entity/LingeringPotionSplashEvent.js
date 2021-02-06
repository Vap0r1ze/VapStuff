export default class LingeringPotionSplashEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.LingeringPotionSplashEvent');
    }
    static $isInstance(obj) {
        return obj instanceof LingeringPotionSplashEvent.$javaClass;
    }
    constructor(...args) {
        return new LingeringPotionSplashEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return LingeringPotionSplashEvent.$javaClass.getHandlerList(...args);
    }
}
