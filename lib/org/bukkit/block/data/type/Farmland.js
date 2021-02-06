export default class Farmland {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Farmland');
    }
    static $isInstance(obj) {
        return obj instanceof Farmland.$javaClass;
    }
}
