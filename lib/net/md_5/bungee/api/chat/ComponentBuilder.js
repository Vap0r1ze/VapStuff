"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentBuilder {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.ComponentBuilder');
    }
    static $isInstance(obj) {
        return obj instanceof ComponentBuilder.$javaClass;
    }
    constructor(...args) {
        return new ComponentBuilder.$javaClass(...args);
    }
}
exports.default = ComponentBuilder;
