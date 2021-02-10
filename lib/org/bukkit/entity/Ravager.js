"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ravager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ravager');
    }
    static $isInstance(obj) {
        return obj instanceof Ravager.$javaClass;
    }
}
exports.default = Ravager;
