export default class FishHook {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.FishHook');
    }
    static $isInstance(obj) {
        return obj instanceof FishHook.$javaClass;
    }
}
