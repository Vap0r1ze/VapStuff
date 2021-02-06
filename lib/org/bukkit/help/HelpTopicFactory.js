export default class HelpTopicFactory {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpTopicFactory');
    }
    static $isInstance(obj) {
        return obj instanceof HelpTopicFactory.$javaClass;
    }
}
