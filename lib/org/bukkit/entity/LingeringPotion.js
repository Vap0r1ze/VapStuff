export default class LingeringPotion {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LingeringPotion');
    }
    static $isInstance(obj) {
        return obj instanceof LingeringPotion.$javaClass;
    }
}
