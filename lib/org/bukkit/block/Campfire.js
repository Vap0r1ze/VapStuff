"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Campfire {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Campfire');
    }
    static $isInstance(obj) {
        return obj instanceof Campfire.$javaClass;
    }
}
exports.default = Campfire;
