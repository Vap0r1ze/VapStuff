import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface TexturedMaterial extends MaterialData {
    clone(): MaterialData;
    clone(): any;
    clone(): TexturedMaterial;
    getData(): number;
    getItemType(): Material;
    getMaterial(): Material;
    getTextures(): Array<Material>;
    setData(data: number): void;
    setMaterial(material: Material): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class TexturedMaterial {
    static get $javaClass(): any;
    constructor(m: Material);
    constructor(type: Material, data: number);
}
