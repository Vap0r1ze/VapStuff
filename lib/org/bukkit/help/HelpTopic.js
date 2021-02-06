export default class HelpTopic {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpTopic');
    }
    static $isInstance(obj) {
        return obj instanceof HelpTopic.$javaClass;
    }
    constructor(...args) {
        return new HelpTopic.$javaClass(...args);
    }
}
