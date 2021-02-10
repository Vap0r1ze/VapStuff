"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerLoadEvent$LoadType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerLoadEvent$LoadType');
    }
    static $isInstance(obj) {
        return obj instanceof ServerLoadEvent$LoadType.$javaClass;
    }
    static get RELOAD() {
        return this.$javaClass.RELOAD;
    }
    static get STARTUP() {
        return this.$javaClass.STARTUP;
    }
}
exports.default = ServerLoadEvent$LoadType;
