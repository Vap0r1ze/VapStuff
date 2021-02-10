"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelpTopicFactory {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpTopicFactory');
    }
    static $isInstance(obj) {
        return obj instanceof HelpTopicFactory.$javaClass;
    }
}
exports.default = HelpTopicFactory;
