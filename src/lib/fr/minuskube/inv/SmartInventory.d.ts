import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryManager from './InventoryManager.js';
import InventoryProvider from './content/InventoryProvider.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import Player from '../../../org/bukkit/entity/Player.js';
import SmartInventory$Builder from './SmartInventory$Builder.js';
export default interface SmartInventory {
    close(player: Player): void;
    getColumns(): number;
    getId(): string;
    getManager(): InventoryManager;
    getParent(): any;
    getProvider(): InventoryProvider;
    getRows(): number;
    getTitle(): string;
    getType(): InventoryType;
    isCloseable(): boolean;
    open(player: Player): Inventory;
    open(player: Player, page: number): Inventory;
    setCloseable(closeable: boolean): void;
}
export default class SmartInventory {
    static get $javaClass(): any;
    static builder(): SmartInventory$Builder;
}
