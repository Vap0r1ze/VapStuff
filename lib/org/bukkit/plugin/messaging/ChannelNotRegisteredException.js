"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChannelNotRegisteredException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.ChannelNotRegisteredException');
    }
    static $isInstance(obj) {
        return obj instanceof ChannelNotRegisteredException.$javaClass;
    }
    constructor(...args) {
        return new ChannelNotRegisteredException.$javaClass(...args);
    }
}
exports.default = ChannelNotRegisteredException;
