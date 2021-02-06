export default class EnderPearl {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderPearl');
    }
    static $isInstance(obj) {
        return obj instanceof EnderPearl.$javaClass;
    }
}
