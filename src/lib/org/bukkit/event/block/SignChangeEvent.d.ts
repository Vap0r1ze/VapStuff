import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface SignChangeEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLine(index: number): string;
    getLines(): Array<string>;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setLine(index: number, line: string): void;
}
export default class SignChangeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, thePlayer: Player, theLines: Array<string>);
    static getHandlerList(): HandlerList;
}
