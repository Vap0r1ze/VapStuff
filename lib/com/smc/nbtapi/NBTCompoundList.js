"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NBTCompoundList {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTCompoundList');
    }
    static $isInstance(obj) {
        return obj instanceof NBTCompoundList.$javaClass;
    }
}
exports.default = NBTCompoundList;
