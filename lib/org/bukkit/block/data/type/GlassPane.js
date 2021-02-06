export default class GlassPane {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.GlassPane');
    }
    static $isInstance(obj) {
        return obj instanceof GlassPane.$javaClass;
    }
}
