export default class LlamaSpit {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LlamaSpit');
    }
    static $isInstance(obj) {
        return obj instanceof LlamaSpit.$javaClass;
    }
}
