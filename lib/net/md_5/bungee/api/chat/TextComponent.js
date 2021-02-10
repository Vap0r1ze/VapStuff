"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TextComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.TextComponent');
    }
    static $isInstance(obj) {
        return obj instanceof TextComponent.$javaClass;
    }
    constructor(...args) {
        return new TextComponent.$javaClass(...args);
    }
    static fromLegacyText(...args) {
        return TextComponent.$javaClass.fromLegacyText(...args);
    }
    static toLegacyText(...args) {
        return TextComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return TextComponent.$javaClass.toPlainText(...args);
    }
}
exports.default = TextComponent;
