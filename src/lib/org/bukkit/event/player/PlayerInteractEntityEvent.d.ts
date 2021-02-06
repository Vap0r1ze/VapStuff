import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerInteractEntityEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHand(): EquipmentSlot;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getRightClicked(): Entity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerInteractEntityEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: Entity);
    constructor(who: Player, clickedEntity: Entity, hand: EquipmentSlot);
    static getHandlerList(): HandlerList;
}