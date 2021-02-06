export default class MultipleFacing {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.MultipleFacing');
    }
    static $isInstance(obj) {
        return obj instanceof MultipleFacing.$javaClass;
    }
}
