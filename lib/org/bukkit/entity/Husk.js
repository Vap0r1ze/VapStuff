"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Husk {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Husk');
    }
    static $isInstance(obj) {
        return obj instanceof Husk.$javaClass;
    }
}
exports.default = Husk;
