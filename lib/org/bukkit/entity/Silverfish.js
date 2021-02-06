export default class Silverfish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Silverfish');
    }
    static $isInstance(obj) {
        return obj instanceof Silverfish.$javaClass;
    }
}
