export default class Gate {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Gate');
    }
    static $isInstance(obj) {
        return obj instanceof Gate.$javaClass;
    }
    constructor(...args) {
        return new Gate.$javaClass(...args);
    }
}
