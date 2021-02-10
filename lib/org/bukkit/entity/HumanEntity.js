"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HumanEntity {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.HumanEntity');
    }
    static $isInstance(obj) {
        return obj instanceof HumanEntity.$javaClass;
    }
}
exports.default = HumanEntity;
