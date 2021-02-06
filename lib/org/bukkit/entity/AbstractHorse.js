export default class AbstractHorse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AbstractHorse');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractHorse.$javaClass;
    }
}
