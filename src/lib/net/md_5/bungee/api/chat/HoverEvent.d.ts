import BaseComponent from './BaseComponent.js';
import Content from './hover/content/Content.js';
import HoverEvent$Action from './HoverEvent$Action.js';
export default interface HoverEvent {
    addContent(content: Content): void;
    getAction(): HoverEvent$Action;
    getContents(): Array<Content>;
    getValue(): Array<BaseComponent>;
    isLegacy(): boolean;
    setLegacy(legacy: boolean): void;
}
export default class HoverEvent {
    static get $javaClass(): any;
    constructor(action: HoverEvent$Action, value: Array<BaseComponent>);
    constructor(action: HoverEvent$Action, contents: Array<any>);
    constructor(action: HoverEvent$Action, contents: Array<Content>);
}
