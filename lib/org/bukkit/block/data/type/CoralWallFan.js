"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoralWallFan {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.CoralWallFan');
    }
    static $isInstance(obj) {
        return obj instanceof CoralWallFan.$javaClass;
    }
}
exports.default = CoralWallFan;
