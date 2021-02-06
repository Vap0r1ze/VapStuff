export default class NBTListCompound {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTListCompound');
    }
    static $isInstance(obj) {
        return obj instanceof NBTListCompound.$javaClass;
    }
}
