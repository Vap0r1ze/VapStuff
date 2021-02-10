"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NBTContainer {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTContainer');
    }
    static $isInstance(obj) {
        return obj instanceof NBTContainer.$javaClass;
    }
    constructor(...args) {
        return new NBTContainer.$javaClass(...args);
    }
}
exports.default = NBTContainer;
