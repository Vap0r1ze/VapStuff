"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteServerCommandEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.RemoteServerCommandEvent');
    }
    static $isInstance(obj) {
        return obj instanceof RemoteServerCommandEvent.$javaClass;
    }
    constructor(...args) {
        return new RemoteServerCommandEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return RemoteServerCommandEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = RemoteServerCommandEvent;
