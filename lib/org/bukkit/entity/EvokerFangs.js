export default class EvokerFangs {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EvokerFangs');
    }
    static $isInstance(obj) {
        return obj instanceof EvokerFangs.$javaClass;
    }
}
