export default class Tree {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Tree');
    }
    static $isInstance(obj) {
        return obj instanceof Tree.$javaClass;
    }
    constructor(...args) {
        return new Tree.$javaClass(...args);
    }
}
