export default class Sign {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Sign');
    }
    static $isInstance(obj) {
        return obj instanceof Sign.$javaClass;
    }
    constructor(...args) {
        return new Sign.$javaClass(...args);
    }
}
