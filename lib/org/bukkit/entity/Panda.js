"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Panda {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Panda');
    }
    static $isInstance(obj) {
        return obj instanceof Panda.$javaClass;
    }
}
exports.default = Panda;
