"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComplexEntityPart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ComplexEntityPart');
    }
    static $isInstance(obj) {
        return obj instanceof ComplexEntityPart.$javaClass;
    }
}
exports.default = ComplexEntityPart;
