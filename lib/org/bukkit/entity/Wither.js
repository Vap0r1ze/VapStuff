export default class Wither {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Wither');
    }
    static $isInstance(obj) {
        return obj instanceof Wither.$javaClass;
    }
}
