export default class Bisected {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Bisected');
    }
    static $isInstance(obj) {
        return obj instanceof Bisected.$javaClass;
    }
}
