export default class Golem {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Golem');
    }
    static $isInstance(obj) {
        return obj instanceof Golem.$javaClass;
    }
}
