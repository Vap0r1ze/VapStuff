export default class MushroomCow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.MushroomCow');
    }
    static $isInstance(obj) {
        return obj instanceof MushroomCow.$javaClass;
    }
}
