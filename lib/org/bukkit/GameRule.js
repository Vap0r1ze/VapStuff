export default class GameRule {
    static get $javaClass() {
        return Java.type('org.bukkit.GameRule');
    }
    static $isInstance(obj) {
        return obj instanceof GameRule.$javaClass;
    }
    static get ANNOUNCE_ADVANCEMENTS() {
        return GameRule.$javaClass.ANNOUNCE_ADVANCEMENTS;
    }
    static get COMMAND_BLOCK_OUTPUT() {
        return GameRule.$javaClass.COMMAND_BLOCK_OUTPUT;
    }
    static get DISABLE_ELYTRA_MOVEMENT_CHECK() {
        return GameRule.$javaClass.DISABLE_ELYTRA_MOVEMENT_CHECK;
    }
    static get DISABLE_RAIDS() {
        return GameRule.$javaClass.DISABLE_RAIDS;
    }
    static get DO_DAYLIGHT_CYCLE() {
        return GameRule.$javaClass.DO_DAYLIGHT_CYCLE;
    }
    static get DO_ENTITY_DROPS() {
        return GameRule.$javaClass.DO_ENTITY_DROPS;
    }
    static get DO_FIRE_TICK() {
        return GameRule.$javaClass.DO_FIRE_TICK;
    }
    static get DO_IMMEDIATE_RESPAWN() {
        return GameRule.$javaClass.DO_IMMEDIATE_RESPAWN;
    }
    static get DO_INSOMNIA() {
        return GameRule.$javaClass.DO_INSOMNIA;
    }
    static get DO_LIMITED_CRAFTING() {
        return GameRule.$javaClass.DO_LIMITED_CRAFTING;
    }
    static get DO_MOB_LOOT() {
        return GameRule.$javaClass.DO_MOB_LOOT;
    }
    static get DO_MOB_SPAWNING() {
        return GameRule.$javaClass.DO_MOB_SPAWNING;
    }
    static get DO_PATROL_SPAWNING() {
        return GameRule.$javaClass.DO_PATROL_SPAWNING;
    }
    static get DO_TILE_DROPS() {
        return GameRule.$javaClass.DO_TILE_DROPS;
    }
    static get DO_TRADER_SPAWNING() {
        return GameRule.$javaClass.DO_TRADER_SPAWNING;
    }
    static get DO_WEATHER_CYCLE() {
        return GameRule.$javaClass.DO_WEATHER_CYCLE;
    }
    static get DROWNING_DAMAGE() {
        return GameRule.$javaClass.DROWNING_DAMAGE;
    }
    static get FALL_DAMAGE() {
        return GameRule.$javaClass.FALL_DAMAGE;
    }
    static get FIRE_DAMAGE() {
        return GameRule.$javaClass.FIRE_DAMAGE;
    }
    static get FORGIVE_DEAD_PLAYERS() {
        return GameRule.$javaClass.FORGIVE_DEAD_PLAYERS;
    }
    static get KEEP_INVENTORY() {
        return GameRule.$javaClass.KEEP_INVENTORY;
    }
    static get LOG_ADMIN_COMMANDS() {
        return GameRule.$javaClass.LOG_ADMIN_COMMANDS;
    }
    static get MAX_COMMAND_CHAIN_LENGTH() {
        return GameRule.$javaClass.MAX_COMMAND_CHAIN_LENGTH;
    }
    static get MAX_ENTITY_CRAMMING() {
        return GameRule.$javaClass.MAX_ENTITY_CRAMMING;
    }
    static get MOB_GRIEFING() {
        return GameRule.$javaClass.MOB_GRIEFING;
    }
    static get NATURAL_REGENERATION() {
        return GameRule.$javaClass.NATURAL_REGENERATION;
    }
    static get RANDOM_TICK_SPEED() {
        return GameRule.$javaClass.RANDOM_TICK_SPEED;
    }
    static get REDUCED_DEBUG_INFO() {
        return GameRule.$javaClass.REDUCED_DEBUG_INFO;
    }
    static get SEND_COMMAND_FEEDBACK() {
        return GameRule.$javaClass.SEND_COMMAND_FEEDBACK;
    }
    static get SHOW_DEATH_MESSAGES() {
        return GameRule.$javaClass.SHOW_DEATH_MESSAGES;
    }
    static get SPAWN_RADIUS() {
        return GameRule.$javaClass.SPAWN_RADIUS;
    }
    static get SPECTATORS_GENERATE_CHUNKS() {
        return GameRule.$javaClass.SPECTATORS_GENERATE_CHUNKS;
    }
    static get UNIVERSAL_ANGER() {
        return GameRule.$javaClass.UNIVERSAL_ANGER;
    }
    static getByName(...args) {
        return GameRule.$javaClass.getByName(...args);
    }
    static values(...args) {
        return GameRule.$javaClass.values(...args);
    }
}
