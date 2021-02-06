export default class TripwireHook {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TripwireHook');
    }
    static $isInstance(obj) {
        return obj instanceof TripwireHook.$javaClass;
    }
    constructor(...args) {
        return new TripwireHook.$javaClass(...args);
    }
}
