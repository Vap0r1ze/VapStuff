"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PigZombie {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.PigZombie');
    }
    static $isInstance(obj) {
        return obj instanceof PigZombie.$javaClass;
    }
}
exports.default = PigZombie;
