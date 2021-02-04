import ClickEvent$Action from './ClickEvent$Action.js';
export default interface ClickEvent {
    getAction(): ClickEvent$Action;
    getValue(): string;
}
export default class ClickEvent {
    static get $javaClass(): any;
    constructor(action: ClickEvent$Action, value: string);
}
