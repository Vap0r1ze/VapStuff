import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Instrument from '../../../../org/bukkit/Instrument.js';
import Note from '../../../../org/bukkit/Note.js';
export default interface NotePlayEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getInstrument(): Instrument;
    getNote(): Note;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setInstrument(instrument: Instrument): void;
    setNote(note: Note): void;
}
export default class NotePlayEvent {
    static get $javaClass(): any;
    constructor(block: Block, instrument: Instrument, note: Note);
    static getHandlerList(): HandlerList;
}
