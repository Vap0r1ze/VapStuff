export default class Fire {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Fire');
    }
    static $isInstance(obj) {
        return obj instanceof Fire.$javaClass;
    }
}
