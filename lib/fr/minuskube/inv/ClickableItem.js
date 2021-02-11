"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClickableItem {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.ClickableItem');
    }
    static $isInstance(obj) {
        return obj instanceof ClickableItem.$javaClass;
    }
    static empty(...args) {
        return ClickableItem.$javaClass.empty(...args);
    }
    static of(...args) {
        return ClickableItem.$javaClass.of(...args);
    }
}
exports.default = ClickableItem;