export default class YamlConstructor {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlConstructor');
    }
    static $isInstance(obj) {
        return obj instanceof YamlConstructor.$javaClass;
    }
    constructor(...args) {
        return new YamlConstructor.$javaClass(...args);
    }
    static get undefinedConstructor() {
        return YamlConstructor.$javaClass.undefinedConstructor;
    }
}
