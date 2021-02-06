export default class Llama {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Llama');
    }
    static $isInstance(obj) {
        return obj instanceof Llama.$javaClass;
    }
}
