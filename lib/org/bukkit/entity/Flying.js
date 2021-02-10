"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Flying {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Flying');
    }
    static $isInstance(obj) {
        return obj instanceof Flying.$javaClass;
    }
}
exports.default = Flying;
