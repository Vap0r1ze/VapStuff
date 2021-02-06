export default class Rails {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Rails');
    }
    static $isInstance(obj) {
        return obj instanceof Rails.$javaClass;
    }
    constructor(...args) {
        return new Rails.$javaClass(...args);
    }
}
