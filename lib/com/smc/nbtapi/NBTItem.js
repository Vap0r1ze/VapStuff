export default class NBTItem {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTItem');
    }
    static $isInstance(obj) {
        return obj instanceof NBTItem.$javaClass;
    }
    constructor(...args) {
        return new NBTItem.$javaClass(...args);
    }
    static convertItemtoNBT(...args) {
        return NBTItem.$javaClass.convertItemtoNBT(...args);
    }
    static convertNBTtoItem(...args) {
        return NBTItem.$javaClass.convertNBTtoItem(...args);
    }
}
