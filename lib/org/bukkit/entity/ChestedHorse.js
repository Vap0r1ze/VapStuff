"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChestedHorse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ChestedHorse');
    }
    static $isInstance(obj) {
        return obj instanceof ChestedHorse.$javaClass;
    }
}
exports.default = ChestedHorse;
