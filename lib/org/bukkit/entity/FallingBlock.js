export default class FallingBlock {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.FallingBlock');
    }
    static $isInstance(obj) {
        return obj instanceof FallingBlock.$javaClass;
    }
}
