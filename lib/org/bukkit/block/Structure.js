"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Structure {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Structure');
    }
    static $isInstance(obj) {
        return obj instanceof Structure.$javaClass;
    }
}
exports.default = Structure;
