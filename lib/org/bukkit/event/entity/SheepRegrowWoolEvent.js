export default class SheepRegrowWoolEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.SheepRegrowWoolEvent');
    }
    static $isInstance(obj) {
        return obj instanceof SheepRegrowWoolEvent.$javaClass;
    }
    constructor(...args) {
        return new SheepRegrowWoolEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SheepRegrowWoolEvent.$javaClass.getHandlerList(...args);
    }
}
