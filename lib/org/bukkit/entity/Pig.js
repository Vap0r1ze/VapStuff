export default class Pig {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Pig');
    }
    static $isInstance(obj) {
        return obj instanceof Pig.$javaClass;
    }
}
