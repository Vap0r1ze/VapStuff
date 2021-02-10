"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurtleEgg {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.TurtleEgg');
    }
    static $isInstance(obj) {
        return obj instanceof TurtleEgg.$javaClass;
    }
}
exports.default = TurtleEgg;
