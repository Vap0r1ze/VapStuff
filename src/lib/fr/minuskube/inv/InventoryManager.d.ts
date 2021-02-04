import InventoryOpener from './opener/InventoryOpener.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import JavaPlugin from '../../../org/bukkit/plugin/java/JavaPlugin.js';
import Player from '../../../org/bukkit/entity/Player.js';
import SmartInventory from './SmartInventory.js';
export default interface InventoryManager {
    findOpener(type: InventoryType): any;
    getContents(p: Player): any;
    getInventory(p: Player): any;
    getOpenedPlayers(inv: SmartInventory): Array<Player>;
    init(): void;
    registerOpeners(openers: Array<InventoryOpener>): void;
}
export default class InventoryManager {
    static get $javaClass(): any;
    constructor(plugin: JavaPlugin);
}
