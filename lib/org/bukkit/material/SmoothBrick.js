export default class SmoothBrick {
    static get $javaClass() {
        return Java.type('org.bukkit.material.SmoothBrick');
    }
    static $isInstance(obj) {
        return obj instanceof SmoothBrick.$javaClass;
    }
    constructor(...args) {
        return new SmoothBrick.$javaClass(...args);
    }
}
