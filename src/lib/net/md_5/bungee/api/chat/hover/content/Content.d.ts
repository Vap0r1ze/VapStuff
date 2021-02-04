import HoverEvent$Action from '../../../../../../../net/md_5/bungee/api/chat/HoverEvent$Action.js';
export default interface Content {
    assertAction(input: HoverEvent$Action): void;
    requiredAction(): HoverEvent$Action;
}
export default class Content {
    static get $javaClass(): any;
    constructor();
}
