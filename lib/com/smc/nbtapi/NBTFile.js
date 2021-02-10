"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NBTFile {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTFile');
    }
    static $isInstance(obj) {
        return obj instanceof NBTFile.$javaClass;
    }
    constructor(...args) {
        return new NBTFile.$javaClass(...args);
    }
}
exports.default = NBTFile;
