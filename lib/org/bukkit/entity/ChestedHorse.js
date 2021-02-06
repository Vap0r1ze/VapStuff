export default class ChestedHorse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ChestedHorse');
    }
    static $isInstance(obj) {
        return obj instanceof ChestedHorse.$javaClass;
    }
}
