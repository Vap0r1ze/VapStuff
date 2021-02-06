export default class ThrownPotion {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ThrownPotion');
    }
    static $isInstance(obj) {
        return obj instanceof ThrownPotion.$javaClass;
    }
}
