"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetadataEvaluationException {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataEvaluationException');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataEvaluationException.$javaClass;
    }
}
exports.default = MetadataEvaluationException;
