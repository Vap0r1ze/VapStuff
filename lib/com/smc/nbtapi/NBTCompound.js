"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NBTCompound {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTCompound');
    }
    static $isInstance(obj) {
        return obj instanceof NBTCompound.$javaClass;
    }
}
exports.default = NBTCompound;
