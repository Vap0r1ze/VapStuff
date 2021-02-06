export default class ExtendedRails {
    static get $javaClass() {
        return Java.type('org.bukkit.material.ExtendedRails');
    }
    static $isInstance(obj) {
        return obj instanceof ExtendedRails.$javaClass;
    }
    constructor(...args) {
        return new ExtendedRails.$javaClass(...args);
    }
}
