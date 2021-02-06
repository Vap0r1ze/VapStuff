export default class Pillager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Pillager');
    }
    static $isInstance(obj) {
        return obj instanceof Pillager.$javaClass;
    }
}
