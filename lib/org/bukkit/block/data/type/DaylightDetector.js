export default class DaylightDetector {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.DaylightDetector');
    }
    static $isInstance(obj) {
        return obj instanceof DaylightDetector.$javaClass;
    }
}
