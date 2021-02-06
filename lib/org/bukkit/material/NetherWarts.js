export default class NetherWarts {
    static get $javaClass() {
        return Java.type('org.bukkit.material.NetherWarts');
    }
    static $isInstance(obj) {
        return obj instanceof NetherWarts.$javaClass;
    }
    constructor(...args) {
        return new NetherWarts.$javaClass(...args);
    }
}
