"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gate {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Gate');
    }
    static $isInstance(obj) {
        return obj instanceof Gate.$javaClass;
    }
}
exports.default = Gate;
