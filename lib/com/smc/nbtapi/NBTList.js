export default class NBTList {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTList');
    }
    static $isInstance(obj) {
        return obj instanceof NBTList.$javaClass;
    }
}
