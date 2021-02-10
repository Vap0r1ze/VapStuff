"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Keyed {
    static get $javaClass() {
        return Java.type('org.bukkit.Keyed');
    }
    static $isInstance(obj) {
        return obj instanceof Keyed.$javaClass;
    }
}
exports.default = Keyed;
