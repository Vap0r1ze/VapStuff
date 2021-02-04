import MapCursor$Type from './map/MapCursor$Type.js';
export default interface StructureType {
    getMapIcon(): MapCursor$Type;
    getName(): string;
}
export default class StructureType {
    static get $javaClass(): any;
    static get BASTION_REMNANT(): StructureType;
    static get BURIED_TREASURE(): StructureType;
    static get DESERT_PYRAMID(): StructureType;
    static get END_CITY(): StructureType;
    static get IGLOO(): StructureType;
    static get JUNGLE_PYRAMID(): StructureType;
    static get MINESHAFT(): StructureType;
    static get NETHER_FORTRESS(): StructureType;
    static get NETHER_FOSSIL(): StructureType;
    static get OCEAN_MONUMENT(): StructureType;
    static get OCEAN_RUIN(): StructureType;
    static get PILLAGER_OUTPOST(): StructureType;
    static get RUINED_PORTAL(): StructureType;
    static get SHIPWRECK(): StructureType;
    static get STRONGHOLD(): StructureType;
    static get SWAMP_HUT(): StructureType;
    static get VILLAGE(): StructureType;
    static get WOODLAND_MANSION(): StructureType;
    static getStructureTypes(): any;
}
