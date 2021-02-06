export default class UnknownDependencyException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.UnknownDependencyException');
    }
    static $isInstance(obj) {
        return obj instanceof UnknownDependencyException.$javaClass;
    }
    constructor(...args) {
        return new UnknownDependencyException.$javaClass(...args);
    }
}
