"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCommand {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.BaseCommand');
    }
    static $isInstance(obj) {
        return obj instanceof BaseCommand.$javaClass;
    }
    constructor(...args) {
        return new BaseCommand.$javaClass(...args);
    }
}
exports.default = BaseCommand;
