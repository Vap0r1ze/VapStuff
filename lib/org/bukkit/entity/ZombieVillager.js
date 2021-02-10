"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZombieVillager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ZombieVillager');
    }
    static $isInstance(obj) {
        return obj instanceof ZombieVillager.$javaClass;
    }
}
exports.default = ZombieVillager;
