export default class StructureType {
    static get $javaClass() {
        return Java.type('org.bukkit.StructureType');
    }
    static get BURIED_TREASURE() {
        return StructureType.$javaClass.BURIED_TREASURE;
    }
    static get DESERT_PYRAMID() {
        return StructureType.$javaClass.DESERT_PYRAMID;
    }
    static get END_CITY() {
        return StructureType.$javaClass.END_CITY;
    }
    static get IGLOO() {
        return StructureType.$javaClass.IGLOO;
    }
    static get JUNGLE_PYRAMID() {
        return StructureType.$javaClass.JUNGLE_PYRAMID;
    }
    static get MINESHAFT() {
        return StructureType.$javaClass.MINESHAFT;
    }
    static get NETHER_FORTRESS() {
        return StructureType.$javaClass.NETHER_FORTRESS;
    }
    static get OCEAN_MONUMENT() {
        return StructureType.$javaClass.OCEAN_MONUMENT;
    }
    static get OCEAN_RUIN() {
        return StructureType.$javaClass.OCEAN_RUIN;
    }
    static get PILLAGER_OUTPOST() {
        return StructureType.$javaClass.PILLAGER_OUTPOST;
    }
    static get SHIPWRECK() {
        return StructureType.$javaClass.SHIPWRECK;
    }
    static get STRONGHOLD() {
        return StructureType.$javaClass.STRONGHOLD;
    }
    static get SWAMP_HUT() {
        return StructureType.$javaClass.SWAMP_HUT;
    }
    static get VILLAGE() {
        return StructureType.$javaClass.VILLAGE;
    }
    static get WOODLAND_MANSION() {
        return StructureType.$javaClass.WOODLAND_MANSION;
    }
    static getStructureTypes(...args) {
        return StructureType.$javaClass.getStructureTypes(...args);
    }
}
