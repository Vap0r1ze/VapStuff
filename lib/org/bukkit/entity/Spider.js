export default class Spider {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Spider');
    }
    static $isInstance(obj) {
        return obj instanceof Spider.$javaClass;
    }
}
