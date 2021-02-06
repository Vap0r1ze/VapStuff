export default class ElderGuardian {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ElderGuardian');
    }
    static $isInstance(obj) {
        return obj instanceof ElderGuardian.$javaClass;
    }
}
