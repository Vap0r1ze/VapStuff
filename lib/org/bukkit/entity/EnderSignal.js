export default class EnderSignal {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderSignal');
    }
    static $isInstance(obj) {
        return obj instanceof EnderSignal.$javaClass;
    }
}
