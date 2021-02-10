"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biome {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Biome');
    }
    static $isInstance(obj) {
        return obj instanceof Biome.$javaClass;
    }
    static get BADLANDS() {
        return this.$javaClass.BADLANDS;
    }
    static get BADLANDS_PLATEAU() {
        return this.$javaClass.BADLANDS_PLATEAU;
    }
    static get BAMBOO_JUNGLE() {
        return this.$javaClass.BAMBOO_JUNGLE;
    }
    static get BAMBOO_JUNGLE_HILLS() {
        return this.$javaClass.BAMBOO_JUNGLE_HILLS;
    }
    static get BASALT_DELTAS() {
        return this.$javaClass.BASALT_DELTAS;
    }
    static get BEACH() {
        return this.$javaClass.BEACH;
    }
    static get BIRCH_FOREST() {
        return this.$javaClass.BIRCH_FOREST;
    }
    static get BIRCH_FOREST_HILLS() {
        return this.$javaClass.BIRCH_FOREST_HILLS;
    }
    static get COLD_OCEAN() {
        return this.$javaClass.COLD_OCEAN;
    }
    static get CRIMSON_FOREST() {
        return this.$javaClass.CRIMSON_FOREST;
    }
    static get DARK_FOREST() {
        return this.$javaClass.DARK_FOREST;
    }
    static get DARK_FOREST_HILLS() {
        return this.$javaClass.DARK_FOREST_HILLS;
    }
    static get DEEP_COLD_OCEAN() {
        return this.$javaClass.DEEP_COLD_OCEAN;
    }
    static get DEEP_FROZEN_OCEAN() {
        return this.$javaClass.DEEP_FROZEN_OCEAN;
    }
    static get DEEP_LUKEWARM_OCEAN() {
        return this.$javaClass.DEEP_LUKEWARM_OCEAN;
    }
    static get DEEP_OCEAN() {
        return this.$javaClass.DEEP_OCEAN;
    }
    static get DEEP_WARM_OCEAN() {
        return this.$javaClass.DEEP_WARM_OCEAN;
    }
    static get DESERT() {
        return this.$javaClass.DESERT;
    }
    static get DESERT_HILLS() {
        return this.$javaClass.DESERT_HILLS;
    }
    static get DESERT_LAKES() {
        return this.$javaClass.DESERT_LAKES;
    }
    static get END_BARRENS() {
        return this.$javaClass.END_BARRENS;
    }
    static get END_HIGHLANDS() {
        return this.$javaClass.END_HIGHLANDS;
    }
    static get END_MIDLANDS() {
        return this.$javaClass.END_MIDLANDS;
    }
    static get ERODED_BADLANDS() {
        return this.$javaClass.ERODED_BADLANDS;
    }
    static get FLOWER_FOREST() {
        return this.$javaClass.FLOWER_FOREST;
    }
    static get FOREST() {
        return this.$javaClass.FOREST;
    }
    static get FROZEN_OCEAN() {
        return this.$javaClass.FROZEN_OCEAN;
    }
    static get FROZEN_RIVER() {
        return this.$javaClass.FROZEN_RIVER;
    }
    static get GIANT_SPRUCE_TAIGA() {
        return this.$javaClass.GIANT_SPRUCE_TAIGA;
    }
    static get GIANT_SPRUCE_TAIGA_HILLS() {
        return this.$javaClass.GIANT_SPRUCE_TAIGA_HILLS;
    }
    static get GIANT_TREE_TAIGA() {
        return this.$javaClass.GIANT_TREE_TAIGA;
    }
    static get GIANT_TREE_TAIGA_HILLS() {
        return this.$javaClass.GIANT_TREE_TAIGA_HILLS;
    }
    static get GRAVELLY_MOUNTAINS() {
        return this.$javaClass.GRAVELLY_MOUNTAINS;
    }
    static get ICE_SPIKES() {
        return this.$javaClass.ICE_SPIKES;
    }
    static get JUNGLE() {
        return this.$javaClass.JUNGLE;
    }
    static get JUNGLE_EDGE() {
        return this.$javaClass.JUNGLE_EDGE;
    }
    static get JUNGLE_HILLS() {
        return this.$javaClass.JUNGLE_HILLS;
    }
    static get LUKEWARM_OCEAN() {
        return this.$javaClass.LUKEWARM_OCEAN;
    }
    static get MODIFIED_BADLANDS_PLATEAU() {
        return this.$javaClass.MODIFIED_BADLANDS_PLATEAU;
    }
    static get MODIFIED_GRAVELLY_MOUNTAINS() {
        return this.$javaClass.MODIFIED_GRAVELLY_MOUNTAINS;
    }
    static get MODIFIED_JUNGLE() {
        return this.$javaClass.MODIFIED_JUNGLE;
    }
    static get MODIFIED_JUNGLE_EDGE() {
        return this.$javaClass.MODIFIED_JUNGLE_EDGE;
    }
    static get MODIFIED_WOODED_BADLANDS_PLATEAU() {
        return this.$javaClass.MODIFIED_WOODED_BADLANDS_PLATEAU;
    }
    static get MOUNTAINS() {
        return this.$javaClass.MOUNTAINS;
    }
    static get MOUNTAIN_EDGE() {
        return this.$javaClass.MOUNTAIN_EDGE;
    }
    static get MUSHROOM_FIELDS() {
        return this.$javaClass.MUSHROOM_FIELDS;
    }
    static get MUSHROOM_FIELD_SHORE() {
        return this.$javaClass.MUSHROOM_FIELD_SHORE;
    }
    static get NETHER_WASTES() {
        return this.$javaClass.NETHER_WASTES;
    }
    static get OCEAN() {
        return this.$javaClass.OCEAN;
    }
    static get PLAINS() {
        return this.$javaClass.PLAINS;
    }
    static get RIVER() {
        return this.$javaClass.RIVER;
    }
    static get SAVANNA() {
        return this.$javaClass.SAVANNA;
    }
    static get SAVANNA_PLATEAU() {
        return this.$javaClass.SAVANNA_PLATEAU;
    }
    static get SHATTERED_SAVANNA() {
        return this.$javaClass.SHATTERED_SAVANNA;
    }
    static get SHATTERED_SAVANNA_PLATEAU() {
        return this.$javaClass.SHATTERED_SAVANNA_PLATEAU;
    }
    static get SMALL_END_ISLANDS() {
        return this.$javaClass.SMALL_END_ISLANDS;
    }
    static get SNOWY_BEACH() {
        return this.$javaClass.SNOWY_BEACH;
    }
    static get SNOWY_MOUNTAINS() {
        return this.$javaClass.SNOWY_MOUNTAINS;
    }
    static get SNOWY_TAIGA() {
        return this.$javaClass.SNOWY_TAIGA;
    }
    static get SNOWY_TAIGA_HILLS() {
        return this.$javaClass.SNOWY_TAIGA_HILLS;
    }
    static get SNOWY_TAIGA_MOUNTAINS() {
        return this.$javaClass.SNOWY_TAIGA_MOUNTAINS;
    }
    static get SNOWY_TUNDRA() {
        return this.$javaClass.SNOWY_TUNDRA;
    }
    static get SOUL_SAND_VALLEY() {
        return this.$javaClass.SOUL_SAND_VALLEY;
    }
    static get STONE_SHORE() {
        return this.$javaClass.STONE_SHORE;
    }
    static get SUNFLOWER_PLAINS() {
        return this.$javaClass.SUNFLOWER_PLAINS;
    }
    static get SWAMP() {
        return this.$javaClass.SWAMP;
    }
    static get SWAMP_HILLS() {
        return this.$javaClass.SWAMP_HILLS;
    }
    static get TAIGA() {
        return this.$javaClass.TAIGA;
    }
    static get TAIGA_HILLS() {
        return this.$javaClass.TAIGA_HILLS;
    }
    static get TAIGA_MOUNTAINS() {
        return this.$javaClass.TAIGA_MOUNTAINS;
    }
    static get TALL_BIRCH_FOREST() {
        return this.$javaClass.TALL_BIRCH_FOREST;
    }
    static get TALL_BIRCH_HILLS() {
        return this.$javaClass.TALL_BIRCH_HILLS;
    }
    static get THE_END() {
        return this.$javaClass.THE_END;
    }
    static get THE_VOID() {
        return this.$javaClass.THE_VOID;
    }
    static get WARM_OCEAN() {
        return this.$javaClass.WARM_OCEAN;
    }
    static get WARPED_FOREST() {
        return this.$javaClass.WARPED_FOREST;
    }
    static get WOODED_BADLANDS_PLATEAU() {
        return this.$javaClass.WOODED_BADLANDS_PLATEAU;
    }
    static get WOODED_HILLS() {
        return this.$javaClass.WOODED_HILLS;
    }
    static get WOODED_MOUNTAINS() {
        return this.$javaClass.WOODED_MOUNTAINS;
    }
}
exports.default = Biome;
