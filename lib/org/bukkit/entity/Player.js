"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Player');
    }
    static $isInstance(obj) {
        return obj instanceof Player.$javaClass;
    }
}
exports.default = Player;
