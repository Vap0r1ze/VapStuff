"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimplexNoiseGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.SimplexNoiseGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof SimplexNoiseGenerator.$javaClass;
    }
    constructor(...args) {
        return new SimplexNoiseGenerator.$javaClass(...args);
    }
    static floor(...args) {
        return SimplexNoiseGenerator.$javaClass.floor(...args);
    }
    static getInstance(...args) {
        return SimplexNoiseGenerator.$javaClass.getInstance(...args);
    }
    static getNoise(...args) {
        return SimplexNoiseGenerator.$javaClass.getNoise(...args);
    }
}
exports.default = SimplexNoiseGenerator;
