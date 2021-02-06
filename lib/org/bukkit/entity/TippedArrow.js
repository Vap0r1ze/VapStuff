export default class TippedArrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TippedArrow');
    }
    static $isInstance(obj) {
        return obj instanceof TippedArrow.$javaClass;
    }
}
