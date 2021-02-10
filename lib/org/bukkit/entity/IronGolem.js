"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IronGolem {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.IronGolem');
    }
    static $isInstance(obj) {
        return obj instanceof IronGolem.$javaClass;
    }
}
exports.default = IronGolem;
