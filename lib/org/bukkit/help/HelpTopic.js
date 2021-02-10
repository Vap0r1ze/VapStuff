"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelpTopic {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpTopic');
    }
    static $isInstance(obj) {
        return obj instanceof HelpTopic.$javaClass;
    }
    constructor(...args) {
        return new HelpTopic.$javaClass(...args);
    }
}
exports.default = HelpTopic;
