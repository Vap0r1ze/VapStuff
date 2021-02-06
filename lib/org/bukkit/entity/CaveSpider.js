export default class CaveSpider {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.CaveSpider');
    }
    static $isInstance(obj) {
        return obj instanceof CaveSpider.$javaClass;
    }
}
