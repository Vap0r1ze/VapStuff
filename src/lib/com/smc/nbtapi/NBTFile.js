export default class NBTFile {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTFile');
    }
    constructor(...args) {
        return new NBTFile.$javaClass(...args);
    }
}
