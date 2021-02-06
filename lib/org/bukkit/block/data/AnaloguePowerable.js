export default class AnaloguePowerable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.AnaloguePowerable');
    }
    static $isInstance(obj) {
        return obj instanceof AnaloguePowerable.$javaClass;
    }
}
