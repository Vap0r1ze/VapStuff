"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerListPingEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerListPingEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ServerListPingEvent.$javaClass;
    }
    constructor(...args) {
        return new ServerListPingEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServerListPingEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ServerListPingEvent;
