"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OctaveGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.OctaveGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof OctaveGenerator.$javaClass;
    }
}
exports.default = OctaveGenerator;
