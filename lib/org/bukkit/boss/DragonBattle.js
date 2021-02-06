export default class DragonBattle {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.DragonBattle');
    }
    static $isInstance(obj) {
        return obj instanceof DragonBattle.$javaClass;
    }
}
