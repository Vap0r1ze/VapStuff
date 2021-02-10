"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vex {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Vex');
    }
    static $isInstance(obj) {
        return obj instanceof Vex.$javaClass;
    }
}
exports.default = Vex;
