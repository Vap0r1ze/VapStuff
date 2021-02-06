export default class Rotatable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Rotatable');
    }
    static $isInstance(obj) {
        return obj instanceof Rotatable.$javaClass;
    }
}
