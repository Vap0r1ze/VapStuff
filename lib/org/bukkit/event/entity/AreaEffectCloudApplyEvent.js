"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AreaEffectCloudApplyEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.AreaEffectCloudApplyEvent');
    }
    static $isInstance(obj) {
        return obj instanceof AreaEffectCloudApplyEvent.$javaClass;
    }
    constructor(...args) {
        return new AreaEffectCloudApplyEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return AreaEffectCloudApplyEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = AreaEffectCloudApplyEvent;
