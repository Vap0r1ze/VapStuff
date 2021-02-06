export default class Levelled {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Levelled');
    }
    static $isInstance(obj) {
        return obj instanceof Levelled.$javaClass;
    }
}
