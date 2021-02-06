export default class Cat {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Cat');
    }
    static $isInstance(obj) {
        return obj instanceof Cat.$javaClass;
    }
}
