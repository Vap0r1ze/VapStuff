"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceUnregisterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServiceUnregisterEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ServiceUnregisterEvent.$javaClass;
    }
    constructor(...args) {
        return new ServiceUnregisterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServiceUnregisterEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ServiceUnregisterEvent;
