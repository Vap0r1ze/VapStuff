"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockPopulator {
    static get $javaClass() {
        return Java.type('org.bukkit.generator.BlockPopulator');
    }
    static $isInstance(obj) {
        return obj instanceof BlockPopulator.$javaClass;
    }
    constructor(...args) {
        return new BlockPopulator.$javaClass(...args);
    }
}
exports.default = BlockPopulator;
