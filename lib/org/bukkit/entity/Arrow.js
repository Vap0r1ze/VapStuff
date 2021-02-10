"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Arrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Arrow');
    }
    static $isInstance(obj) {
        return obj instanceof Arrow.$javaClass;
    }
}
exports.default = Arrow;
