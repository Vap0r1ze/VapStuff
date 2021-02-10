"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainHand {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.MainHand');
    }
    static $isInstance(obj) {
        return obj instanceof MainHand.$javaClass;
    }
    static get LEFT() {
        return this.$javaClass.LEFT;
    }
    static get RIGHT() {
        return this.$javaClass.RIGHT;
    }
}
exports.default = MainHand;
