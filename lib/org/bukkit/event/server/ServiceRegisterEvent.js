"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceRegisterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServiceRegisterEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ServiceRegisterEvent.$javaClass;
    }
    constructor(...args) {
        return new ServiceRegisterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServiceRegisterEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ServiceRegisterEvent;
