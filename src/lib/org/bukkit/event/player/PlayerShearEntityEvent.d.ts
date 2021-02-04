import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
    getEntity(): Entity;
    getEventName(): string;
    getHand(): EquipmentSlot;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerShearEntityEvent {
    static get $javaClass(): any;
    constructor(who: Player, what: Entity);
    constructor(who: Player, what: Entity, item: ItemStack, hand: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
