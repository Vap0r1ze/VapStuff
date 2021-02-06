export default class Donkey {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Donkey');
    }
    static $isInstance(obj) {
        return obj instanceof Donkey.$javaClass;
    }
}
