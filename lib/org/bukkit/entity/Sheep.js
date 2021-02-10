"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sheep {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Sheep');
    }
    static $isInstance(obj) {
        return obj instanceof Sheep.$javaClass;
    }
}
exports.default = Sheep;
