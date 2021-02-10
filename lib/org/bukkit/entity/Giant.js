"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Giant {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Giant');
    }
    static $isInstance(obj) {
        return obj instanceof Giant.$javaClass;
    }
}
exports.default = Giant;
