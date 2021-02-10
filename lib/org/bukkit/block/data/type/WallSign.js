"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WallSign {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.WallSign');
    }
    static $isInstance(obj) {
        return obj instanceof WallSign.$javaClass;
    }
}
exports.default = WallSign;
