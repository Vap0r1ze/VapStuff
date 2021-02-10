"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityEquipment {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.EntityEquipment');
    }
    static $isInstance(obj) {
        return obj instanceof EntityEquipment.$javaClass;
    }
}
exports.default = EntityEquipment;
