"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NBTEntity {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTEntity');
    }
    static $isInstance(obj) {
        return obj instanceof NBTEntity.$javaClass;
    }
    constructor(...args) {
        return new NBTEntity.$javaClass(...args);
    }
}
exports.default = NBTEntity;
