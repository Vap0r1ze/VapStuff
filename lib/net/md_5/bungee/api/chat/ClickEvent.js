"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClickEvent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.ClickEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ClickEvent.$javaClass;
    }
    constructor(...args) {
        return new ClickEvent.$javaClass(...args);
    }
}
exports.default = ClickEvent;
