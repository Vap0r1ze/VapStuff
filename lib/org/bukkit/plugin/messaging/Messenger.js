"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Messenger {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.Messenger');
    }
    static $isInstance(obj) {
        return obj instanceof Messenger.$javaClass;
    }
    static get MAX_CHANNEL_SIZE() {
        return Messenger.$javaClass.MAX_CHANNEL_SIZE;
    }
    static get MAX_MESSAGE_SIZE() {
        return Messenger.$javaClass.MAX_MESSAGE_SIZE;
    }
}
exports.default = Messenger;
