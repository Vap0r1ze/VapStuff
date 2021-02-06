export default class AttributeInstance {
    static get $javaClass() {
        return Java.type('org.bukkit.attribute.AttributeInstance');
    }
    static $isInstance(obj) {
        return obj instanceof AttributeInstance.$javaClass;
    }
}
