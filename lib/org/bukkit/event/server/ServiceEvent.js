"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServiceEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ServiceEvent.$javaClass;
    }
    constructor(...args) {
        return new ServiceEvent.$javaClass(...args);
    }
}
exports.default = ServiceEvent;
