"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RayTraceResult {
    static get $javaClass() {
        return Java.type('org.bukkit.util.RayTraceResult');
    }
    static $isInstance(obj) {
        return obj instanceof RayTraceResult.$javaClass;
    }
    constructor(...args) {
        return new RayTraceResult.$javaClass(...args);
    }
}
exports.default = RayTraceResult;
