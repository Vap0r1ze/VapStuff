"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Switch {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Switch');
    }
    static $isInstance(obj) {
        return obj instanceof Switch.$javaClass;
    }
}
exports.default = Switch;
