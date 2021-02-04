import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import FishHook from '../../../../org/bukkit/entity/FishHook.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
import PlayerFishEvent$State from './PlayerFishEvent$State.js';
export default interface PlayerFishEvent extends PlayerEvent, Cancellable {
    getCaught(): Entity;
    getEventName(): string;
    getExpToDrop(): number;
    getHandlers(): HandlerList;
    getHook(): FishHook;
    getPlayer(): Player;
    getState(): PlayerFishEvent$State;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setExpToDrop(amount: number): void;
}
export default class PlayerFishEvent {
    static get $javaClass(): any;
    constructor(player: Player, entity: Entity, hookEntity: FishHook, state: PlayerFishEvent$State);
    static getHandlerList(): HandlerList;
}
