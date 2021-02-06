export default class Conversable {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Conversable');
    }
    static $isInstance(obj) {
        return obj instanceof Conversable.$javaClass;
    }
}
