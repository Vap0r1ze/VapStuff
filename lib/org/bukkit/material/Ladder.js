"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ladder {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Ladder');
    }
    static $isInstance(obj) {
        return obj instanceof Ladder.$javaClass;
    }
    constructor(...args) {
        return new Ladder.$javaClass(...args);
    }
}
exports.default = Ladder;
