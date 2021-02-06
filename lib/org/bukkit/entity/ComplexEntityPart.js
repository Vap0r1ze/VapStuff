export default class ComplexEntityPart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ComplexEntityPart');
    }
    static $isInstance(obj) {
        return obj instanceof ComplexEntityPart.$javaClass;
    }
}
