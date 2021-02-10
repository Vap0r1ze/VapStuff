"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoundingBox {
    static get $javaClass() {
        return Java.type('org.bukkit.util.BoundingBox');
    }
    static $isInstance(obj) {
        return obj instanceof BoundingBox.$javaClass;
    }
    constructor(...args) {
        return new BoundingBox.$javaClass(...args);
    }
    static deserialize(...args) {
        return BoundingBox.$javaClass.deserialize(...args);
    }
    static of(...args) {
        return BoundingBox.$javaClass.of(...args);
    }
}
exports.default = BoundingBox;
