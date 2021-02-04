import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
export default interface Wood extends MaterialData {
    clone(): Wood;
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    getItemType(): Material;
    getSpecies(): TreeSpecies;
    setData(data: number): void;
    setSpecies(species: TreeSpecies): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Wood {
    static get $javaClass(): any;
    constructor();
    constructor(species: TreeSpecies);
    constructor(type: Material);
    constructor(type: Material, data: number);
    constructor(type: Material, species: TreeSpecies);
}
