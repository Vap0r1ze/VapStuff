export default class Spellcaster {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Spellcaster');
    }
    static $isInstance(obj) {
        return obj instanceof Spellcaster.$javaClass;
    }
}
