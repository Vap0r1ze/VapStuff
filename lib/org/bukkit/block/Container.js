"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Container {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Container');
    }
    static $isInstance(obj) {
        return obj instanceof Container.$javaClass;
    }
}
exports.default = Container;