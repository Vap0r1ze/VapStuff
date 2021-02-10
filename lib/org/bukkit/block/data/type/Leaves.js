"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Leaves {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Leaves');
    }
    static $isInstance(obj) {
        return obj instanceof Leaves.$javaClass;
    }
}
exports.default = Leaves;
