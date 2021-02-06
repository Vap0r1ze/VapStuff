export default class Powerable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Powerable');
    }
    static $isInstance(obj) {
        return obj instanceof Powerable.$javaClass;
    }
}
