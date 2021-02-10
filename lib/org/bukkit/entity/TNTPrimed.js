"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TNTPrimed {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TNTPrimed');
    }
    static $isInstance(obj) {
        return obj instanceof TNTPrimed.$javaClass;
    }
}
exports.default = TNTPrimed;
