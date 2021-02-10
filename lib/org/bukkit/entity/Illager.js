"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Illager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Illager');
    }
    static $isInstance(obj) {
        return obj instanceof Illager.$javaClass;
    }
}
exports.default = Illager;
