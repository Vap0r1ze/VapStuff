export default class SpectralArrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SpectralArrow');
    }
    static $isInstance(obj) {
        return obj instanceof SpectralArrow.$javaClass;
    }
}
