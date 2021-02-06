export default class SizedFireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SizedFireball');
    }
    static $isInstance(obj) {
        return obj instanceof SizedFireball.$javaClass;
    }
}
