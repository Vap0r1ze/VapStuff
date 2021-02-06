export default class MagmaCube {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.MagmaCube');
    }
    static $isInstance(obj) {
        return obj instanceof MagmaCube.$javaClass;
    }
}
