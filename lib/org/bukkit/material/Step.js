export default class Step {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Step');
    }
    static $isInstance(obj) {
        return obj instanceof Step.$javaClass;
    }
    constructor(...args) {
        return new Step.$javaClass(...args);
    }
}
