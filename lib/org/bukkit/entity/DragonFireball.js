export default class DragonFireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.DragonFireball');
    }
    static $isInstance(obj) {
        return obj instanceof DragonFireball.$javaClass;
    }
}
