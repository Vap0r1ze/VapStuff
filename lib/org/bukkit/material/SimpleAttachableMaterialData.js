export default class SimpleAttachableMaterialData {
    static get $javaClass() {
        return Java.type('org.bukkit.material.SimpleAttachableMaterialData');
    }
    static $isInstance(obj) {
        return obj instanceof SimpleAttachableMaterialData.$javaClass;
    }
    constructor(...args) {
        return new SimpleAttachableMaterialData.$javaClass(...args);
    }
}
