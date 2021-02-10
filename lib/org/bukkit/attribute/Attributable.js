"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attributable {
    static get $javaClass() {
        return Java.type('org.bukkit.attribute.Attributable');
    }
    static $isInstance(obj) {
        return obj instanceof Attributable.$javaClass;
    }
}
exports.default = Attributable;
