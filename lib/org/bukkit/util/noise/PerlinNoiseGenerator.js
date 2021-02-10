"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerlinNoiseGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.PerlinNoiseGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof PerlinNoiseGenerator.$javaClass;
    }
    constructor(...args) {
        return new PerlinNoiseGenerator.$javaClass(...args);
    }
    static floor(...args) {
        return PerlinNoiseGenerator.$javaClass.floor(...args);
    }
    static getInstance(...args) {
        return PerlinNoiseGenerator.$javaClass.getInstance(...args);
    }
    static getNoise(...args) {
        return PerlinNoiseGenerator.$javaClass.getNoise(...args);
    }
}
exports.default = PerlinNoiseGenerator;
