export default class NBTCompoundList {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTCompoundList');
    }
    static $isInstance(obj) {
        return obj instanceof NBTCompoundList.$javaClass;
    }
}
