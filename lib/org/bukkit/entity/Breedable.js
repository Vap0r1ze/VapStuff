export default class Breedable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Breedable');
    }
    static $isInstance(obj) {
        return obj instanceof Breedable.$javaClass;
    }
}
