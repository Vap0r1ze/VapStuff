export default class RayTraceResult {
    static get $javaClass() {
        return Java.type('org.bukkit.util.RayTraceResult');
    }
    static $isInstance(obj) {
        return obj instanceof RayTraceResult.$javaClass;
    }
    constructor(...args) {
        return new RayTraceResult.$javaClass(...args);
    }
}
