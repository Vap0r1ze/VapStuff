export default class EntityEffect {
    static get $javaClass() {
        return Java.type('org.bukkit.EntityEffect');
    }
    static $isInstance(obj) {
        return obj instanceof EntityEffect.$javaClass;
    }
    static get ARMOR_STAND_HIT() {
        return this.$javaClass.ARMOR_STAND_HIT;
    }
    static get ARROW_PARTICLES() {
        return this.$javaClass.ARROW_PARTICLES;
    }
    static get BREAK_EQUIPMENT_BOOTS() {
        return this.$javaClass.BREAK_EQUIPMENT_BOOTS;
    }
    static get BREAK_EQUIPMENT_CHESTPLATE() {
        return this.$javaClass.BREAK_EQUIPMENT_CHESTPLATE;
    }
    static get BREAK_EQUIPMENT_HELMET() {
        return this.$javaClass.BREAK_EQUIPMENT_HELMET;
    }
    static get BREAK_EQUIPMENT_LEGGINGS() {
        return this.$javaClass.BREAK_EQUIPMENT_LEGGINGS;
    }
    static get BREAK_EQUIPMENT_MAIN_HAND() {
        return this.$javaClass.BREAK_EQUIPMENT_MAIN_HAND;
    }
    static get BREAK_EQUIPMENT_OFF_HAND() {
        return this.$javaClass.BREAK_EQUIPMENT_OFF_HAND;
    }
    static get CAT_TAME_FAIL() {
        return this.$javaClass.CAT_TAME_FAIL;
    }
    static get CAT_TAME_SUCCESS() {
        return this.$javaClass.CAT_TAME_SUCCESS;
    }
    static get DEATH() {
        return this.$javaClass.DEATH;
    }
    static get DOLPHIN_FED() {
        return this.$javaClass.DOLPHIN_FED;
    }
    static get ENTITY_POOF() {
        return this.$javaClass.ENTITY_POOF;
    }
    static get FIREWORK_EXPLODE() {
        return this.$javaClass.FIREWORK_EXPLODE;
    }
    static get FOX_CHEW() {
        return this.$javaClass.FOX_CHEW;
    }
    static get GUARDIAN_TARGET() {
        return this.$javaClass.GUARDIAN_TARGET;
    }
    static get HURT() {
        return this.$javaClass.HURT;
    }
    static get HURT_BERRY_BUSH() {
        return this.$javaClass.HURT_BERRY_BUSH;
    }
    static get HURT_DROWN() {
        return this.$javaClass.HURT_DROWN;
    }
    static get HURT_EXPLOSION() {
        return this.$javaClass.HURT_EXPLOSION;
    }
    static get IRON_GOLEM_ROSE() {
        return this.$javaClass.IRON_GOLEM_ROSE;
    }
    static get IRON_GOLEM_SHEATH() {
        return this.$javaClass.IRON_GOLEM_SHEATH;
    }
    static get LOVE_HEARTS() {
        return this.$javaClass.LOVE_HEARTS;
    }
    static get PLAYER_BAD_OMEN_RAID() {
        return this.$javaClass.PLAYER_BAD_OMEN_RAID;
    }
    static get RABBIT_JUMP() {
        return this.$javaClass.RABBIT_JUMP;
    }
    static get RAVAGER_STUNNED() {
        return this.$javaClass.RAVAGER_STUNNED;
    }
    static get SHEEP_EAT() {
        return this.$javaClass.SHEEP_EAT;
    }
    static get SHIELD_BLOCK() {
        return this.$javaClass.SHIELD_BLOCK;
    }
    static get SHIELD_BREAK() {
        return this.$javaClass.SHIELD_BREAK;
    }
    static get SQUID_ROTATE() {
        return this.$javaClass.SQUID_ROTATE;
    }
    static get TELEPORT_ENDER() {
        return this.$javaClass.TELEPORT_ENDER;
    }
    static get THORNS_HURT() {
        return this.$javaClass.THORNS_HURT;
    }
    static get TOTEM_RESURRECT() {
        return this.$javaClass.TOTEM_RESURRECT;
    }
    static get VILLAGER_ANGRY() {
        return this.$javaClass.VILLAGER_ANGRY;
    }
    static get VILLAGER_HAPPY() {
        return this.$javaClass.VILLAGER_HAPPY;
    }
    static get VILLAGER_HEART() {
        return this.$javaClass.VILLAGER_HEART;
    }
    static get VILLAGER_SPLASH() {
        return this.$javaClass.VILLAGER_SPLASH;
    }
    static get WITCH_MAGIC() {
        return this.$javaClass.WITCH_MAGIC;
    }
    static get WOLF_HEARTS() {
        return this.$javaClass.WOLF_HEARTS;
    }
    static get WOLF_SHAKE() {
        return this.$javaClass.WOLF_SHAKE;
    }
    static get WOLF_SMOKE() {
        return this.$javaClass.WOLF_SMOKE;
    }
    static get ZOMBIE_TRANSFORM() {
        return this.$javaClass.ZOMBIE_TRANSFORM;
    }
}
