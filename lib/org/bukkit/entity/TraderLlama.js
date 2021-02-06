export default class TraderLlama {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TraderLlama');
    }
    static $isInstance(obj) {
        return obj instanceof TraderLlama.$javaClass;
    }
}
