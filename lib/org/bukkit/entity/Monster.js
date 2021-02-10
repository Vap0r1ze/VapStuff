"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Monster');
    }
    static $isInstance(obj) {
        return obj instanceof Monster.$javaClass;
    }
}
exports.default = Monster;
