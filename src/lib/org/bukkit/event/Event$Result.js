export default class Event$Result {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Event$Result');
    }
    static get ALLOW() {
        return this.$javaClass.ALLOW;
    }
    static get DEFAULT() {
        return this.$javaClass.DEFAULT;
    }
    static get DENY() {
        return this.$javaClass.DENY;
    }
}
