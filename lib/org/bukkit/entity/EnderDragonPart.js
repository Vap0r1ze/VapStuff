export default class EnderDragonPart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderDragonPart');
    }
    static $isInstance(obj) {
        return obj instanceof EnderDragonPart.$javaClass;
    }
}
