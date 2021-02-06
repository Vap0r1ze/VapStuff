export default class KnowledgeBookMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.KnowledgeBookMeta');
    }
    static $isInstance(obj) {
        return obj instanceof KnowledgeBookMeta.$javaClass;
    }
}
