"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeModifier {
    static get $javaClass() {
        return Java.type('org.bukkit.attribute.AttributeModifier');
    }
    static $isInstance(obj) {
        return obj instanceof AttributeModifier.$javaClass;
    }
    constructor(...args) {
        return new AttributeModifier.$javaClass(...args);
    }
    static deserialize(...args) {
        return AttributeModifier.$javaClass.deserialize(...args);
    }
}
exports.default = AttributeModifier;
