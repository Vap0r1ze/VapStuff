export default class Campfire {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Campfire');
    }
    static $isInstance(obj) {
        return obj instanceof Campfire.$javaClass;
    }
}
