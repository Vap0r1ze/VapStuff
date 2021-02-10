"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractVillager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AbstractVillager');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractVillager.$javaClass;
    }
}
exports.default = AbstractVillager;
