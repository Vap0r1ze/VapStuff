import Keyed from './Keyed.js';
import NamespacedKey from './NamespacedKey.js';
export default interface Tag extends Keyed {
    getKey(): NamespacedKey;
    getValues(): any;
    isTagged(arg0: Keyed): boolean;
}
export default class Tag {
    static get $javaClass(): any;
    static get ACACIA_LOGS(): Tag;
    static get ANVIL(): Tag;
    static get BAMBOO_PLANTABLE_ON(): Tag;
    static get BANNERS(): Tag;
    static get BEACON_BASE_BLOCKS(): Tag;
    static get BEDS(): Tag;
    static get BEEHIVES(): Tag;
    static get BEE_GROWABLES(): Tag;
    static get BIRCH_LOGS(): Tag;
    static get BUTTONS(): Tag;
    static get CAMPFIRES(): Tag;
    static get CARPETS(): Tag;
    static get CLIMBABLE(): Tag;
    static get CORALS(): Tag;
    static get CORAL_BLOCKS(): Tag;
    static get CORAL_PLANTS(): Tag;
    static get CRIMSON_STEMS(): Tag;
    static get CROPS(): Tag;
    static get DARK_OAK_LOGS(): Tag;
    static get DOORS(): Tag;
    static get DRAGON_IMMUNE(): Tag;
    static get ENDERMAN_HOLDABLE(): Tag;
    static get FENCES(): Tag;
    static get FENCE_GATES(): Tag;
    static get FIRE(): Tag;
    static get FLOWERS(): Tag;
    static get FLOWER_POTS(): Tag;
    static get GOLD_ORES(): Tag;
    static get GUARDED_BY_PIGLINS(): Tag;
    static get HOGLIN_REPELLENTS(): Tag;
    static get ICE(): Tag;
    static get IMPERMEABLE(): Tag;
    static get INFINIBURN_END(): Tag;
    static get INFINIBURN_NETHER(): Tag;
    static get INFINIBURN_OVERWORLD(): Tag;
    static get ITEMS_ARROWS(): Tag;
    static get ITEMS_BANNERS(): Tag;
    static get ITEMS_BEACON_PAYMENT_ITEMS(): Tag;
    static get ITEMS_BOATS(): Tag;
    static get ITEMS_COALS(): Tag;
    static get ITEMS_CREEPER_DROP_MUSIC_DISCS(): Tag;
    static get ITEMS_FISHES(): Tag;
    static get ITEMS_FURNACE_MATERIALS(): Tag;
    static get ITEMS_LECTERN_BOOKS(): Tag;
    static get ITEMS_MUSIC_DISCS(): Tag;
    static get ITEMS_PIGLIN_LOVED(): Tag;
    static get ITEMS_STONE_TOOL_MATERIALS(): Tag;
    static get JUNGLE_LOGS(): Tag;
    static get LEAVES(): Tag;
    static get LOGS(): Tag;
    static get LOGS_THAT_BURN(): Tag;
    static get NON_FLAMMABLE_WOOD(): Tag;
    static get NYLIUM(): Tag;
    static get OAK_LOGS(): Tag;
    static get PIGLIN_REPELLENTS(): Tag;
    static get PLANKS(): Tag;
    static get PORTALS(): Tag;
    static get PRESSURE_PLATES(): Tag;
    static get PREVENT_MOB_SPAWNING_INSIDE(): Tag;
    static get RAILS(): Tag;
    static get REGISTRY_BLOCKS(): string;
    static get REGISTRY_ITEMS(): string;
    static get SAND(): Tag;
    static get SAPLINGS(): Tag;
    static get SHULKER_BOXES(): Tag;
    static get SIGNS(): Tag;
    static get SLABS(): Tag;
    static get SMALL_FLOWERS(): Tag;
    static get SOUL_FIRE_BASE_BLOCKS(): Tag;
    static get SOUL_SPEED_BLOCKS(): Tag;
    static get SPRUCE_LOGS(): Tag;
    static get STAIRS(): Tag;
    static get STANDING_SIGNS(): Tag;
    static get STONE_BRICKS(): Tag;
    static get STONE_PRESSURE_PLATES(): Tag;
    static get STRIDER_WARM_BLOCKS(): Tag;
    static get TALL_FLOWERS(): Tag;
    static get TRAPDOORS(): Tag;
    static get UNDERWATER_BONEMEALS(): Tag;
    static get UNSTABLE_BOTTOM_CENTER(): Tag;
    static get VALID_SPAWN(): Tag;
    static get WALLS(): Tag;
    static get WALL_CORALS(): Tag;
    static get WALL_POST_OVERRIDE(): Tag;
    static get WALL_SIGNS(): Tag;
    static get WARPED_STEMS(): Tag;
    static get WART_BLOCKS(): Tag;
    static get WITHER_IMMUNE(): Tag;
    static get WITHER_SUMMON_BASE_BLOCKS(): Tag;
    static get WOODEN_BUTTONS(): Tag;
    static get WOODEN_DOORS(): Tag;
    static get WOODEN_FENCES(): Tag;
    static get WOODEN_PRESSURE_PLATES(): Tag;
    static get WOODEN_SLABS(): Tag;
    static get WOODEN_STAIRS(): Tag;
    static get WOODEN_TRAPDOORS(): Tag;
    static get WOOL(): Tag;
}