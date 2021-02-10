"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersistentDataType {
    static get $javaClass() {
        return Java.type('org.bukkit.persistence.PersistentDataType');
    }
    static $isInstance(obj) {
        return obj instanceof PersistentDataType.$javaClass;
    }
    static get BYTE() {
        return PersistentDataType.$javaClass.BYTE;
    }
    static get BYTE_ARRAY() {
        return PersistentDataType.$javaClass.BYTE_ARRAY;
    }
    static get DOUBLE() {
        return PersistentDataType.$javaClass.DOUBLE;
    }
    static get FLOAT() {
        return PersistentDataType.$javaClass.FLOAT;
    }
    static get INTEGER() {
        return PersistentDataType.$javaClass.INTEGER;
    }
    static get INTEGER_ARRAY() {
        return PersistentDataType.$javaClass.INTEGER_ARRAY;
    }
    static get LONG() {
        return PersistentDataType.$javaClass.LONG;
    }
    static get LONG_ARRAY() {
        return PersistentDataType.$javaClass.LONG_ARRAY;
    }
    static get SHORT() {
        return PersistentDataType.$javaClass.SHORT;
    }
    static get STRING() {
        return PersistentDataType.$javaClass.STRING;
    }
    static get TAG_CONTAINER() {
        return PersistentDataType.$javaClass.TAG_CONTAINER;
    }
    static get TAG_CONTAINER_ARRAY() {
        return PersistentDataType.$javaClass.TAG_CONTAINER_ARRAY;
    }
}
exports.default = PersistentDataType;
