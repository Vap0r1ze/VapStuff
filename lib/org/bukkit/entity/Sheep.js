export default class Sheep {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Sheep');
    }
    static $isInstance(obj) {
        return obj instanceof Sheep.$javaClass;
    }
}
