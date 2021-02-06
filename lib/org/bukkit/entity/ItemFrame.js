export default class ItemFrame {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ItemFrame');
    }
    static $isInstance(obj) {
        return obj instanceof ItemFrame.$javaClass;
    }
}
