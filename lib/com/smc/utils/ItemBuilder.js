"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemBuilder {
    static get $javaClass() {
        return Java.type('com.smc.utils.ItemBuilder');
    }
    static $isInstance(obj) {
        return obj instanceof ItemBuilder.$javaClass;
    }
    constructor(...args) {
        return new ItemBuilder.$javaClass(...args);
    }
    static addEnchant$default(...args) {
        return ItemBuilder.$javaClass.addEnchant$default(...args);
    }
}
exports.default = ItemBuilder;
