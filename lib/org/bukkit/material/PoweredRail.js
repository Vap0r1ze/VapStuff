export default class PoweredRail {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PoweredRail');
    }
    static $isInstance(obj) {
        return obj instanceof PoweredRail.$javaClass;
    }
    constructor(...args) {
        return new PoweredRail.$javaClass(...args);
    }
}
