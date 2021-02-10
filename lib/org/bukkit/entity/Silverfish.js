"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Silverfish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Silverfish');
    }
    static $isInstance(obj) {
        return obj instanceof Silverfish.$javaClass;
    }
}
exports.default = Silverfish;
