import Chunk from '../../../../org/bukkit/Chunk.js';
import ChunkEvent from './ChunkEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
export default interface ChunkUnloadEvent extends ChunkEvent {
    getChunk(): Chunk;
    getEventName(): string;
    getHandlers(): HandlerList;
    getWorld(): World;
    isAsynchronous(): boolean;
    isSaveChunk(): boolean;
    setSaveChunk(saveChunk: boolean): void;
}
export default class ChunkUnloadEvent {
    static get $javaClass(): any;
    constructor(chunk: Chunk);
    constructor(chunk: Chunk, save: boolean);
    static getHandlerList(): HandlerList;
}
