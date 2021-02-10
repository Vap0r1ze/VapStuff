"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormattedCommandAlias {
    static get $javaClass() {
        return Java.type('org.bukkit.command.FormattedCommandAlias');
    }
    static $isInstance(obj) {
        return obj instanceof FormattedCommandAlias.$javaClass;
    }
    constructor(...args) {
        return new FormattedCommandAlias.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return FormattedCommandAlias.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = FormattedCommandAlias;
