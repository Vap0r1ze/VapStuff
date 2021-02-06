export default class Jigsaw {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Jigsaw');
    }
    static $isInstance(obj) {
        return obj instanceof Jigsaw.$javaClass;
    }
}
