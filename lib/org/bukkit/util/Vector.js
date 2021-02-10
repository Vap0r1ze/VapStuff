"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    static get $javaClass() {
        return Java.type('org.bukkit.util.Vector');
    }
    static $isInstance(obj) {
        return obj instanceof Vector.$javaClass;
    }
    constructor(...args) {
        return new Vector.$javaClass(...args);
    }
    static deserialize(...args) {
        return Vector.$javaClass.deserialize(...args);
    }
    static getEpsilon(...args) {
        return Vector.$javaClass.getEpsilon(...args);
    }
    static getMaximum(...args) {
        return Vector.$javaClass.getMaximum(...args);
    }
    static getMinimum(...args) {
        return Vector.$javaClass.getMinimum(...args);
    }
    static getRandom(...args) {
        return Vector.$javaClass.getRandom(...args);
    }
}
exports.default = Vector;
