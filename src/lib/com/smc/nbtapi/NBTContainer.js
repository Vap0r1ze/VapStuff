export default class NBTContainer {
    static get $javaClass() {
        return Java.type('com.smc.nbtapi.NBTContainer');
    }
    constructor(...args) {
        return new NBTContainer.$javaClass(...args);
    }
}
