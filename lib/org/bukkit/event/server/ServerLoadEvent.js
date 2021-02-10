"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerLoadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerLoadEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ServerLoadEvent.$javaClass;
    }
    constructor(...args) {
        return new ServerLoadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServerLoadEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ServerLoadEvent;
