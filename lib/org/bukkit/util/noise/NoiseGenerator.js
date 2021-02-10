"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NoiseGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.NoiseGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof NoiseGenerator.$javaClass;
    }
    constructor(...args) {
        return new NoiseGenerator.$javaClass(...args);
    }
    static floor(...args) {
        return NoiseGenerator.$javaClass.floor(...args);
    }
}
exports.default = NoiseGenerator;
