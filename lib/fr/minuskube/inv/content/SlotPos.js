"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlotPos {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.SlotPos');
    }
    static $isInstance(obj) {
        return obj instanceof SlotPos.$javaClass;
    }
    constructor(...args) {
        return new SlotPos.$javaClass(...args);
    }
    static of(...args) {
        return SlotPos.$javaClass.of(...args);
    }
}
exports.default = SlotPos;
