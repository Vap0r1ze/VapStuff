"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NBTList {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTList');
    }
    static $isInstance(obj) {
        return obj instanceof NBTList.$javaClass;
    }
}
exports.default = NBTList;
