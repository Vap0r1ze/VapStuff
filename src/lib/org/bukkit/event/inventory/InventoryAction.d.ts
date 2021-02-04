export default interface InventoryAction {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class InventoryAction {
    static get $javaClass(): any;
    static get CLONE_STACK(): InventoryAction;
    static get COLLECT_TO_CURSOR(): InventoryAction;
    static get DROP_ALL_CURSOR(): InventoryAction;
    static get DROP_ALL_SLOT(): InventoryAction;
    static get DROP_ONE_CURSOR(): InventoryAction;
    static get DROP_ONE_SLOT(): InventoryAction;
    static get HOTBAR_MOVE_AND_READD(): InventoryAction;
    static get HOTBAR_SWAP(): InventoryAction;
    static get MOVE_TO_OTHER_INVENTORY(): InventoryAction;
    static get NOTHING(): InventoryAction;
    static get PICKUP_ALL(): InventoryAction;
    static get PICKUP_HALF(): InventoryAction;
    static get PICKUP_ONE(): InventoryAction;
    static get PICKUP_SOME(): InventoryAction;
    static get PLACE_ALL(): InventoryAction;
    static get PLACE_ONE(): InventoryAction;
    static get PLACE_SOME(): InventoryAction;
    static get SWAP_WITH_CURSOR(): InventoryAction;
    static get UNKNOWN(): InventoryAction;
}
