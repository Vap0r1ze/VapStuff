export default class Flying {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Flying');
    }
    static $isInstance(obj) {
        return obj instanceof Flying.$javaClass;
    }
}
