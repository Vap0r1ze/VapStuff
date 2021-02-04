import InventoryContents from './InventoryContents.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface InventoryProvider {
    init(arg0: Player, arg1: InventoryContents): void;
    update(arg0: Player, arg1: InventoryContents): void;
}
export default class InventoryProvider {
    static get $javaClass(): any;
}
