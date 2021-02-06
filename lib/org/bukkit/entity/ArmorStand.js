export default class ArmorStand {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ArmorStand');
    }
    static $isInstance(obj) {
        return obj instanceof ArmorStand.$javaClass;
    }
}
