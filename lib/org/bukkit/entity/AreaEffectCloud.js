export default class AreaEffectCloud {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AreaEffectCloud');
    }
    static $isInstance(obj) {
        return obj instanceof AreaEffectCloud.$javaClass;
    }
}
