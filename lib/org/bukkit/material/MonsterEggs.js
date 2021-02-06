export default class MonsterEggs {
    static get $javaClass() {
        return Java.type('org.bukkit.material.MonsterEggs');
    }
    static $isInstance(obj) {
        return obj instanceof MonsterEggs.$javaClass;
    }
    constructor(...args) {
        return new MonsterEggs.$javaClass(...args);
    }
}
