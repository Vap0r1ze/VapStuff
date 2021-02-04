import EntityType from '../../../org/bukkit/entity/EntityType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface SpawnEgg extends MaterialData {
    clone(): any;
    clone(): MaterialData;
    clone(): SpawnEgg;
    getData(): number;
    getItemType(): Material;
    getSpawnedType(): EntityType;
    setData(data: number): void;
    setSpawnedType(type: EntityType): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class SpawnEgg {
    static get $javaClass(): any;
    constructor();
    constructor(type: EntityType);
    constructor(data: number);
    constructor(type: Material, data: number);
}
