export default class Tag {
    static get $javaClass() {
        return Java.type('org.bukkit.Tag');
    }
    static $isInstance(obj) {
        return obj instanceof Tag.$javaClass;
    }
    static get ACACIA_LOGS() {
        return Tag.$javaClass.ACACIA_LOGS;
    }
    static get ANVIL() {
        return Tag.$javaClass.ANVIL;
    }
    static get BAMBOO_PLANTABLE_ON() {
        return Tag.$javaClass.BAMBOO_PLANTABLE_ON;
    }
    static get BANNERS() {
        return Tag.$javaClass.BANNERS;
    }
    static get BEACON_BASE_BLOCKS() {
        return Tag.$javaClass.BEACON_BASE_BLOCKS;
    }
    static get BEDS() {
        return Tag.$javaClass.BEDS;
    }
    static get BEEHIVES() {
        return Tag.$javaClass.BEEHIVES;
    }
    static get BEE_GROWABLES() {
        return Tag.$javaClass.BEE_GROWABLES;
    }
    static get BIRCH_LOGS() {
        return Tag.$javaClass.BIRCH_LOGS;
    }
    static get BUTTONS() {
        return Tag.$javaClass.BUTTONS;
    }
    static get CAMPFIRES() {
        return Tag.$javaClass.CAMPFIRES;
    }
    static get CARPETS() {
        return Tag.$javaClass.CARPETS;
    }
    static get CLIMBABLE() {
        return Tag.$javaClass.CLIMBABLE;
    }
    static get CORALS() {
        return Tag.$javaClass.CORALS;
    }
    static get CORAL_BLOCKS() {
        return Tag.$javaClass.CORAL_BLOCKS;
    }
    static get CORAL_PLANTS() {
        return Tag.$javaClass.CORAL_PLANTS;
    }
    static get CRIMSON_STEMS() {
        return Tag.$javaClass.CRIMSON_STEMS;
    }
    static get CROPS() {
        return Tag.$javaClass.CROPS;
    }
    static get DARK_OAK_LOGS() {
        return Tag.$javaClass.DARK_OAK_LOGS;
    }
    static get DOORS() {
        return Tag.$javaClass.DOORS;
    }
    static get DRAGON_IMMUNE() {
        return Tag.$javaClass.DRAGON_IMMUNE;
    }
    static get ENDERMAN_HOLDABLE() {
        return Tag.$javaClass.ENDERMAN_HOLDABLE;
    }
    static get FENCES() {
        return Tag.$javaClass.FENCES;
    }
    static get FENCE_GATES() {
        return Tag.$javaClass.FENCE_GATES;
    }
    static get FIRE() {
        return Tag.$javaClass.FIRE;
    }
    static get FLOWERS() {
        return Tag.$javaClass.FLOWERS;
    }
    static get FLOWER_POTS() {
        return Tag.$javaClass.FLOWER_POTS;
    }
    static get FLUIDS_LAVA() {
        return Tag.$javaClass.FLUIDS_LAVA;
    }
    static get FLUIDS_WATER() {
        return Tag.$javaClass.FLUIDS_WATER;
    }
    static get GOLD_ORES() {
        return Tag.$javaClass.GOLD_ORES;
    }
    static get GUARDED_BY_PIGLINS() {
        return Tag.$javaClass.GUARDED_BY_PIGLINS;
    }
    static get HOGLIN_REPELLENTS() {
        return Tag.$javaClass.HOGLIN_REPELLENTS;
    }
    static get ICE() {
        return Tag.$javaClass.ICE;
    }
    static get IMPERMEABLE() {
        return Tag.$javaClass.IMPERMEABLE;
    }
    static get INFINIBURN_END() {
        return Tag.$javaClass.INFINIBURN_END;
    }
    static get INFINIBURN_NETHER() {
        return Tag.$javaClass.INFINIBURN_NETHER;
    }
    static get INFINIBURN_OVERWORLD() {
        return Tag.$javaClass.INFINIBURN_OVERWORLD;
    }
    static get ITEMS_ARROWS() {
        return Tag.$javaClass.ITEMS_ARROWS;
    }
    static get ITEMS_BANNERS() {
        return Tag.$javaClass.ITEMS_BANNERS;
    }
    static get ITEMS_BEACON_PAYMENT_ITEMS() {
        return Tag.$javaClass.ITEMS_BEACON_PAYMENT_ITEMS;
    }
    static get ITEMS_BOATS() {
        return Tag.$javaClass.ITEMS_BOATS;
    }
    static get ITEMS_COALS() {
        return Tag.$javaClass.ITEMS_COALS;
    }
    static get ITEMS_CREEPER_DROP_MUSIC_DISCS() {
        return Tag.$javaClass.ITEMS_CREEPER_DROP_MUSIC_DISCS;
    }
    static get ITEMS_FISHES() {
        return Tag.$javaClass.ITEMS_FISHES;
    }
    static get ITEMS_FURNACE_MATERIALS() {
        return Tag.$javaClass.ITEMS_FURNACE_MATERIALS;
    }
    static get ITEMS_LECTERN_BOOKS() {
        return Tag.$javaClass.ITEMS_LECTERN_BOOKS;
    }
    static get ITEMS_MUSIC_DISCS() {
        return Tag.$javaClass.ITEMS_MUSIC_DISCS;
    }
    static get ITEMS_PIGLIN_LOVED() {
        return Tag.$javaClass.ITEMS_PIGLIN_LOVED;
    }
    static get ITEMS_STONE_TOOL_MATERIALS() {
        return Tag.$javaClass.ITEMS_STONE_TOOL_MATERIALS;
    }
    static get JUNGLE_LOGS() {
        return Tag.$javaClass.JUNGLE_LOGS;
    }
    static get LEAVES() {
        return Tag.$javaClass.LEAVES;
    }
    static get LOGS() {
        return Tag.$javaClass.LOGS;
    }
    static get LOGS_THAT_BURN() {
        return Tag.$javaClass.LOGS_THAT_BURN;
    }
    static get NON_FLAMMABLE_WOOD() {
        return Tag.$javaClass.NON_FLAMMABLE_WOOD;
    }
    static get NYLIUM() {
        return Tag.$javaClass.NYLIUM;
    }
    static get OAK_LOGS() {
        return Tag.$javaClass.OAK_LOGS;
    }
    static get PIGLIN_REPELLENTS() {
        return Tag.$javaClass.PIGLIN_REPELLENTS;
    }
    static get PLANKS() {
        return Tag.$javaClass.PLANKS;
    }
    static get PORTALS() {
        return Tag.$javaClass.PORTALS;
    }
    static get PRESSURE_PLATES() {
        return Tag.$javaClass.PRESSURE_PLATES;
    }
    static get PREVENT_MOB_SPAWNING_INSIDE() {
        return Tag.$javaClass.PREVENT_MOB_SPAWNING_INSIDE;
    }
    static get RAILS() {
        return Tag.$javaClass.RAILS;
    }
    static get REGISTRY_BLOCKS() {
        return Tag.$javaClass.REGISTRY_BLOCKS;
    }
    static get REGISTRY_FLUIDS() {
        return Tag.$javaClass.REGISTRY_FLUIDS;
    }
    static get REGISTRY_ITEMS() {
        return Tag.$javaClass.REGISTRY_ITEMS;
    }
    static get SAND() {
        return Tag.$javaClass.SAND;
    }
    static get SAPLINGS() {
        return Tag.$javaClass.SAPLINGS;
    }
    static get SHULKER_BOXES() {
        return Tag.$javaClass.SHULKER_BOXES;
    }
    static get SIGNS() {
        return Tag.$javaClass.SIGNS;
    }
    static get SLABS() {
        return Tag.$javaClass.SLABS;
    }
    static get SMALL_FLOWERS() {
        return Tag.$javaClass.SMALL_FLOWERS;
    }
    static get SOUL_FIRE_BASE_BLOCKS() {
        return Tag.$javaClass.SOUL_FIRE_BASE_BLOCKS;
    }
    static get SOUL_SPEED_BLOCKS() {
        return Tag.$javaClass.SOUL_SPEED_BLOCKS;
    }
    static get SPRUCE_LOGS() {
        return Tag.$javaClass.SPRUCE_LOGS;
    }
    static get STAIRS() {
        return Tag.$javaClass.STAIRS;
    }
    static get STANDING_SIGNS() {
        return Tag.$javaClass.STANDING_SIGNS;
    }
    static get STONE_BRICKS() {
        return Tag.$javaClass.STONE_BRICKS;
    }
    static get STONE_PRESSURE_PLATES() {
        return Tag.$javaClass.STONE_PRESSURE_PLATES;
    }
    static get STRIDER_WARM_BLOCKS() {
        return Tag.$javaClass.STRIDER_WARM_BLOCKS;
    }
    static get TALL_FLOWERS() {
        return Tag.$javaClass.TALL_FLOWERS;
    }
    static get TRAPDOORS() {
        return Tag.$javaClass.TRAPDOORS;
    }
    static get UNDERWATER_BONEMEALS() {
        return Tag.$javaClass.UNDERWATER_BONEMEALS;
    }
    static get UNSTABLE_BOTTOM_CENTER() {
        return Tag.$javaClass.UNSTABLE_BOTTOM_CENTER;
    }
    static get VALID_SPAWN() {
        return Tag.$javaClass.VALID_SPAWN;
    }
    static get WALLS() {
        return Tag.$javaClass.WALLS;
    }
    static get WALL_CORALS() {
        return Tag.$javaClass.WALL_CORALS;
    }
    static get WALL_POST_OVERRIDE() {
        return Tag.$javaClass.WALL_POST_OVERRIDE;
    }
    static get WALL_SIGNS() {
        return Tag.$javaClass.WALL_SIGNS;
    }
    static get WARPED_STEMS() {
        return Tag.$javaClass.WARPED_STEMS;
    }
    static get WART_BLOCKS() {
        return Tag.$javaClass.WART_BLOCKS;
    }
    static get WITHER_IMMUNE() {
        return Tag.$javaClass.WITHER_IMMUNE;
    }
    static get WITHER_SUMMON_BASE_BLOCKS() {
        return Tag.$javaClass.WITHER_SUMMON_BASE_BLOCKS;
    }
    static get WOODEN_BUTTONS() {
        return Tag.$javaClass.WOODEN_BUTTONS;
    }
    static get WOODEN_DOORS() {
        return Tag.$javaClass.WOODEN_DOORS;
    }
    static get WOODEN_FENCES() {
        return Tag.$javaClass.WOODEN_FENCES;
    }
    static get WOODEN_PRESSURE_PLATES() {
        return Tag.$javaClass.WOODEN_PRESSURE_PLATES;
    }
    static get WOODEN_SLABS() {
        return Tag.$javaClass.WOODEN_SLABS;
    }
    static get WOODEN_STAIRS() {
        return Tag.$javaClass.WOODEN_STAIRS;
    }
    static get WOODEN_TRAPDOORS() {
        return Tag.$javaClass.WOODEN_TRAPDOORS;
    }
    static get WOOL() {
        return Tag.$javaClass.WOOL;
    }
}
