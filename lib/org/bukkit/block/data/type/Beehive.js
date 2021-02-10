"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beehive {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Beehive');
    }
    static $isInstance(obj) {
        return obj instanceof Beehive.$javaClass;
    }
}
exports.default = Beehive;
