import Entity from '../../../../org/bukkit/entity/Entity.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerInteractEntityEvent from './PlayerInteractEntityEvent.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
    getClickedPosition(): Vector;
    getEventName(): string;
    getHand(): EquipmentSlot;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getRightClicked(): Entity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerInteractAtEntityEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: Entity, position: Vector);
    constructor(who: Player, clickedEntity: Entity, position: Vector, hand: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
