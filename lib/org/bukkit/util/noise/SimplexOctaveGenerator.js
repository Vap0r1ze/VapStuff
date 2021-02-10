"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimplexOctaveGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.SimplexOctaveGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof SimplexOctaveGenerator.$javaClass;
    }
    constructor(...args) {
        return new SimplexOctaveGenerator.$javaClass(...args);
    }
}
exports.default = SimplexOctaveGenerator;
