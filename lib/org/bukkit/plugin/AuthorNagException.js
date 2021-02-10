"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthorNagException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.AuthorNagException');
    }
    static $isInstance(obj) {
        return obj instanceof AuthorNagException.$javaClass;
    }
    constructor(...args) {
        return new AuthorNagException.$javaClass(...args);
    }
}
exports.default = AuthorNagException;
