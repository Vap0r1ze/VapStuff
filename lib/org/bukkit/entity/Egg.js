"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Egg {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Egg');
    }
    static $isInstance(obj) {
        return obj instanceof Egg.$javaClass;
    }
}
exports.default = Egg;
