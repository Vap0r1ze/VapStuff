"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pattern {
    static get $javaClass() {
        return Java.type('org.bukkit.block.banner.Pattern');
    }
    static $isInstance(obj) {
        return obj instanceof Pattern.$javaClass;
    }
    constructor(...args) {
        return new Pattern.$javaClass(...args);
    }
}
exports.default = Pattern;
