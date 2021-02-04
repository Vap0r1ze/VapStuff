import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
export default interface MushroomBlockTexture {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getCapFace(): BlockFace;
    getData(): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class MushroomBlockTexture {
    static get $javaClass(): any;
    static get ALL_CAP(): MushroomBlockTexture;
    static get ALL_PORES(): MushroomBlockTexture;
    static get ALL_STEM(): MushroomBlockTexture;
    static get CAP_EAST(): MushroomBlockTexture;
    static get CAP_NORTH(): MushroomBlockTexture;
    static get CAP_NORTH_EAST(): MushroomBlockTexture;
    static get CAP_NORTH_WEST(): MushroomBlockTexture;
    static get CAP_SOUTH(): MushroomBlockTexture;
    static get CAP_SOUTH_EAST(): MushroomBlockTexture;
    static get CAP_SOUTH_WEST(): MushroomBlockTexture;
    static get CAP_TOP(): MushroomBlockTexture;
    static get CAP_WEST(): MushroomBlockTexture;
    static get STEM_SIDES(): MushroomBlockTexture;
}
