"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observer {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Observer');
    }
    static $isInstance(obj) {
        return obj instanceof Observer.$javaClass;
    }
}
exports.default = Observer;
