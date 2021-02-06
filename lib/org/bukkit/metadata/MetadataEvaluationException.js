export default class MetadataEvaluationException {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataEvaluationException');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataEvaluationException.$javaClass;
    }
}
