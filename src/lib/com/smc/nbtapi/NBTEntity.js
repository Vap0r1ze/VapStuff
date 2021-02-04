export default class NBTEntity {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTEntity');
    }
    constructor(...args) {
        return new NBTEntity.$javaClass(...args);
    }
}
