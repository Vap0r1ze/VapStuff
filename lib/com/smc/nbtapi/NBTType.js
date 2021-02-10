"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NBTType {
    static get $javaClass() {
        return Java.type('de.tr7zw.changeme.nbtapi.NBTType');
    }
    static $isInstance(obj) {
        return obj instanceof NBTType.$javaClass;
    }
    static get NBTTagByte() {
        return this.$javaClass.NBTTagByte;
    }
    static get NBTTagByteArray() {
        return this.$javaClass.NBTTagByteArray;
    }
    static get NBTTagCompound() {
        return this.$javaClass.NBTTagCompound;
    }
    static get NBTTagDouble() {
        return this.$javaClass.NBTTagDouble;
    }
    static get NBTTagEnd() {
        return this.$javaClass.NBTTagEnd;
    }
    static get NBTTagFloat() {
        return this.$javaClass.NBTTagFloat;
    }
    static get NBTTagInt() {
        return this.$javaClass.NBTTagInt;
    }
    static get NBTTagIntArray() {
        return this.$javaClass.NBTTagIntArray;
    }
    static get NBTTagList() {
        return this.$javaClass.NBTTagList;
    }
    static get NBTTagLong() {
        return this.$javaClass.NBTTagLong;
    }
    static get NBTTagShort() {
        return this.$javaClass.NBTTagShort;
    }
    static get NBTTagString() {
        return this.$javaClass.NBTTagString;
    }
}
exports.default = NBTType;
