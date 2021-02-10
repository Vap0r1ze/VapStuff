"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    static get $javaClass() {
        return Java.type('org.bukkit.Server');
    }
    static $isInstance(obj) {
        return obj instanceof Server.$javaClass;
    }
    static get BROADCAST_CHANNEL_ADMINISTRATIVE() {
        return Server.$javaClass.BROADCAST_CHANNEL_ADMINISTRATIVE;
    }
    static get BROADCAST_CHANNEL_USERS() {
        return Server.$javaClass.BROADCAST_CHANNEL_USERS;
    }
}
exports.default = Server;
