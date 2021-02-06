export default class Jukebox {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Jukebox');
    }
    static $isInstance(obj) {
        return obj instanceof Jukebox.$javaClass;
    }
}
