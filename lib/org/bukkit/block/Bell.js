export default class Bell {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Bell');
    }
    static $isInstance(obj) {
        return obj instanceof Bell.$javaClass;
    }
}
