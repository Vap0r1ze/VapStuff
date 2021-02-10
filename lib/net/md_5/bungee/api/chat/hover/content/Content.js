"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.hover.content.Content');
    }
    static $isInstance(obj) {
        return obj instanceof Content.$javaClass;
    }
    constructor(...args) {
        return new Content.$javaClass(...args);
    }
}
exports.default = Content;
