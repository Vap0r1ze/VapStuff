export default class StringUtil {
    static get $javaClass() {
        return Java.type('org.bukkit.util.StringUtil');
    }
    constructor(...args) {
        return new StringUtil.$javaClass(...args);
    }
    static copyPartialMatches(...args) {
        return StringUtil.$javaClass.copyPartialMatches(...args);
    }
    static startsWithIgnoreCase(...args) {
        return StringUtil.$javaClass.startsWithIgnoreCase(...args);
    }
}
