"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trident {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Trident');
    }
    static $isInstance(obj) {
        return obj instanceof Trident.$javaClass;
    }
}
exports.default = Trident;
