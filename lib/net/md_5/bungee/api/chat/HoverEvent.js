"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HoverEvent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.HoverEvent');
    }
    static $isInstance(obj) {
        return obj instanceof HoverEvent.$javaClass;
    }
    constructor(...args) {
        return new HoverEvent.$javaClass(...args);
    }
}
exports.default = HoverEvent;
