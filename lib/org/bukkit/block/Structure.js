export default class Structure {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Structure');
    }
    static $isInstance(obj) {
        return obj instanceof Structure.$javaClass;
    }
}
