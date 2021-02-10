"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexHelpTopic {
    static get $javaClass() {
        return Java.type('org.bukkit.help.IndexHelpTopic');
    }
    static $isInstance(obj) {
        return obj instanceof IndexHelpTopic.$javaClass;
    }
    constructor(...args) {
        return new IndexHelpTopic.$javaClass(...args);
    }
}
exports.default = IndexHelpTopic;
