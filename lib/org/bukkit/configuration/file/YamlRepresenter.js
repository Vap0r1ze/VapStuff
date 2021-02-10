"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YamlRepresenter {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlRepresenter');
    }
    static $isInstance(obj) {
        return obj instanceof YamlRepresenter.$javaClass;
    }
    constructor(...args) {
        return new YamlRepresenter.$javaClass(...args);
    }
}
exports.default = YamlRepresenter;
