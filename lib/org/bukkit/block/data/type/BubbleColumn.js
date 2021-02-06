export default class BubbleColumn {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.BubbleColumn');
    }
    static $isInstance(obj) {
        return obj instanceof BubbleColumn.$javaClass;
    }
}
