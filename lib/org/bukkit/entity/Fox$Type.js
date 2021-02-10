"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fox$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Fox$Type');
    }
    static $isInstance(obj) {
        return obj instanceof Fox$Type.$javaClass;
    }
    static get RED() {
        return this.$javaClass.RED;
    }
    static get SNOW() {
        return this.$javaClass.SNOW;
    }
}
exports.default = Fox$Type;
