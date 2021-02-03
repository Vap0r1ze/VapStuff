export default class ServicePriority {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.ServicePriority');
    }
    static get High() {
        return this.$javaClass.High;
    }
    static get Highest() {
        return this.$javaClass.Highest;
    }
    static get Low() {
        return this.$javaClass.Low;
    }
    static get Lowest() {
        return this.$javaClass.Lowest;
    }
    static get Normal() {
        return this.$javaClass.Normal;
    }
}
