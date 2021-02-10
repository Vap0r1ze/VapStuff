"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BubbleColumn {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.BubbleColumn');
    }
    static $isInstance(obj) {
        return obj instanceof BubbleColumn.$javaClass;
    }
}
exports.default = BubbleColumn;
