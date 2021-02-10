"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Channel {
    static get $javaClass() {
        return Java.type('java.nio.channels.Channel');
    }
    static $isInstance(obj) {
        return obj instanceof Channel.$javaClass;
    }
}
exports.default = Channel;
