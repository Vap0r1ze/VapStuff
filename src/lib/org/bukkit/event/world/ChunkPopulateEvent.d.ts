import Chunk from '../../../../org/bukkit/Chunk.js';
import ChunkEvent from './ChunkEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
export default interface ChunkPopulateEvent extends ChunkEvent {
    getChunk(): Chunk;
    getEventName(): string;
    getHandlers(): HandlerList;
    getWorld(): World;
    isAsynchronous(): boolean;
}
export default class ChunkPopulateEvent {
    static get $javaClass(): any;
    constructor(chunk: Chunk);
    static getHandlerList(): HandlerList;
}
