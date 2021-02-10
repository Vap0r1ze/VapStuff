"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemTagType {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.tags.ItemTagType');
    }
    static $isInstance(obj) {
        return obj instanceof ItemTagType.$javaClass;
    }
    static get BYTE() {
        return ItemTagType.$javaClass.BYTE;
    }
    static get BYTE_ARRAY() {
        return ItemTagType.$javaClass.BYTE_ARRAY;
    }
    static get DOUBLE() {
        return ItemTagType.$javaClass.DOUBLE;
    }
    static get FLOAT() {
        return ItemTagType.$javaClass.FLOAT;
    }
    static get INTEGER() {
        return ItemTagType.$javaClass.INTEGER;
    }
    static get INTEGER_ARRAY() {
        return ItemTagType.$javaClass.INTEGER_ARRAY;
    }
    static get LONG() {
        return ItemTagType.$javaClass.LONG;
    }
    static get LONG_ARRAY() {
        return ItemTagType.$javaClass.LONG_ARRAY;
    }
    static get SHORT() {
        return ItemTagType.$javaClass.SHORT;
    }
    static get STRING() {
        return ItemTagType.$javaClass.STRING;
    }
    static get TAG_CONTAINER() {
        return ItemTagType.$javaClass.TAG_CONTAINER;
    }
}
exports.default = ItemTagType;
