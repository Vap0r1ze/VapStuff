export default class GenericCommandHelpTopic {
    static get $javaClass() {
        return Java.type('org.bukkit.help.GenericCommandHelpTopic');
    }
    static $isInstance(obj) {
        return obj instanceof GenericCommandHelpTopic.$javaClass;
    }
    constructor(...args) {
        return new GenericCommandHelpTopic.$javaClass(...args);
    }
}
