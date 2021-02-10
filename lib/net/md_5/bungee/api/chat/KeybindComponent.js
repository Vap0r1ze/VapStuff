"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeybindComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.KeybindComponent');
    }
    static $isInstance(obj) {
        return obj instanceof KeybindComponent.$javaClass;
    }
    constructor(...args) {
        return new KeybindComponent.$javaClass(...args);
    }
    static toLegacyText(...args) {
        return KeybindComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return KeybindComponent.$javaClass.toPlainText(...args);
    }
}
exports.default = KeybindComponent;
