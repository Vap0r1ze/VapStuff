export default class Dye {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Dye');
    }
    static $isInstance(obj) {
        return obj instanceof Dye.$javaClass;
    }
    constructor(...args) {
        return new Dye.$javaClass(...args);
    }
}
