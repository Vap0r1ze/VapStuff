"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ladder {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Ladder');
    }
    static $isInstance(obj) {
        return obj instanceof Ladder.$javaClass;
    }
}
exports.default = Ladder;
