import Block from '../../../../org/bukkit/block/Block.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerBedLeaveEvent extends PlayerEvent {
    getBed(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    setSpawnLocation(setBedSpawn: boolean): void;
    shouldSetSpawnLocation(): boolean;
}
export default class PlayerBedLeaveEvent {
    static get $javaClass(): any;
    constructor(who: Player, bed: Block, setBedSpawn: boolean);
    static getHandlerList(): HandlerList;
}
