export default class SoundGroup {
    static get $javaClass() {
        return Java.type('org.bukkit.SoundGroup');
    }
    static $isInstance(obj) {
        return obj instanceof SoundGroup.$javaClass;
    }
}
