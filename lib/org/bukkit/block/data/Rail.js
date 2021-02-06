export default class Rail {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Rail');
    }
    static $isInstance(obj) {
        return obj instanceof Rail.$javaClass;
    }
}
