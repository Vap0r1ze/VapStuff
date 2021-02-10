"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Waterlogged {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Waterlogged');
    }
    static $isInstance(obj) {
        return obj instanceof Waterlogged.$javaClass;
    }
}
exports.default = Waterlogged;
