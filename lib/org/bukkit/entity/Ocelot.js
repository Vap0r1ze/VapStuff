export default class Ocelot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ocelot');
    }
    static $isInstance(obj) {
        return obj instanceof Ocelot.$javaClass;
    }
}
