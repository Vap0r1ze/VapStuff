export default class Door {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Door');
    }
    static $isInstance(obj) {
        return obj instanceof Door.$javaClass;
    }
}
