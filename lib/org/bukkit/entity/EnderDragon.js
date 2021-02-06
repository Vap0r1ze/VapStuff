export default class EnderDragon {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderDragon');
    }
    static $isInstance(obj) {
        return obj instanceof EnderDragon.$javaClass;
    }
}
