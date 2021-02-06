export default class ExperienceOrb {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ExperienceOrb');
    }
    static $isInstance(obj) {
        return obj instanceof ExperienceOrb.$javaClass;
    }
}
