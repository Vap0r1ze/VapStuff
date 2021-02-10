"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Raid {
    static get $javaClass() {
        return Java.type('org.bukkit.Raid');
    }
    static $isInstance(obj) {
        return obj instanceof Raid.$javaClass;
    }
}
exports.default = Raid;
