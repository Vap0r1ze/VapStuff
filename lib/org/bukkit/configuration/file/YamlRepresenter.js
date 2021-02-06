export default class YamlRepresenter {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlRepresenter');
    }
    static $isInstance(obj) {
        return obj instanceof YamlRepresenter.$javaClass;
    }
    constructor(...args) {
        return new YamlRepresenter.$javaClass(...args);
    }
}
