export default class ComplexLivingEntity {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ComplexLivingEntity');
    }
    static $isInstance(obj) {
        return obj instanceof ComplexLivingEntity.$javaClass;
    }
}
