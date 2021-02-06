export default class Advancement {
    static get $javaClass() {
        return Java.type('org.bukkit.advancement.Advancement');
    }
    static $isInstance(obj) {
        return obj instanceof Advancement.$javaClass;
    }
}
