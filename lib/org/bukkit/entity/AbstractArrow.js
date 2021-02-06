export default class AbstractArrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AbstractArrow');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractArrow.$javaClass;
    }
}
