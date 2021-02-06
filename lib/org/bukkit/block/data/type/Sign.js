export default class Sign {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Sign');
    }
    static $isInstance(obj) {
        return obj instanceof Sign.$javaClass;
    }
}
