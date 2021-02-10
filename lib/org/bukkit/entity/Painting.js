"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Painting {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Painting');
    }
    static $isInstance(obj) {
        return obj instanceof Painting.$javaClass;
    }
}
exports.default = Painting;
