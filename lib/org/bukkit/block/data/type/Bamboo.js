"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bamboo {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Bamboo');
    }
    static $isInstance(obj) {
        return obj instanceof Bamboo.$javaClass;
    }
}
exports.default = Bamboo;
