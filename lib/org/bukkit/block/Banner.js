export default class Banner {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Banner');
    }
    static $isInstance(obj) {
        return obj instanceof Banner.$javaClass;
    }
}
