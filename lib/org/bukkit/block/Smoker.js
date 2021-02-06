export default class Smoker {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Smoker');
    }
    static $isInstance(obj) {
        return obj instanceof Smoker.$javaClass;
    }
}
