"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DragonBattle {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.DragonBattle');
    }
    static $isInstance(obj) {
        return obj instanceof DragonBattle.$javaClass;
    }
}
exports.default = DragonBattle;
