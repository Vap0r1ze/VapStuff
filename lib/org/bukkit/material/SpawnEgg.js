"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpawnEgg {
    static get $javaClass() {
        return Java.type('org.bukkit.material.SpawnEgg');
    }
    static $isInstance(obj) {
        return obj instanceof SpawnEgg.$javaClass;
    }
    constructor(...args) {
        return new SpawnEgg.$javaClass(...args);
    }
}
exports.default = SpawnEgg;
