"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandBlock {
    static get $javaClass() {
        return Java.type('org.bukkit.block.CommandBlock');
    }
    static $isInstance(obj) {
        return obj instanceof CommandBlock.$javaClass;
    }
}
exports.default = CommandBlock;
