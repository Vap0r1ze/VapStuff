export default class DirectionalContainer {
    static get $javaClass() {
        return Java.type('org.bukkit.material.DirectionalContainer');
    }
    static $isInstance(obj) {
        return obj instanceof DirectionalContainer.$javaClass;
    }
    constructor(...args) {
        return new DirectionalContainer.$javaClass(...args);
    }
}
