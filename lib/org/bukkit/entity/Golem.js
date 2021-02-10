"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Golem {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Golem');
    }
    static $isInstance(obj) {
        return obj instanceof Golem.$javaClass;
    }
}
exports.default = Golem;
