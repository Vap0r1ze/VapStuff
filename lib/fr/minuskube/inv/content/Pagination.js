export default class Pagination {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.Pagination');
    }
    static $isInstance(obj) {
        return obj instanceof Pagination.$javaClass;
    }
}
