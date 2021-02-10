"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractHorse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AbstractHorse');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractHorse.$javaClass;
    }
}
exports.default = AbstractHorse;
