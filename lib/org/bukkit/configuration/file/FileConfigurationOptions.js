export default class FileConfigurationOptions {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.FileConfigurationOptions');
    }
    static $isInstance(obj) {
        return obj instanceof FileConfigurationOptions.$javaClass;
    }
}
