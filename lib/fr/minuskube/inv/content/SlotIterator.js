export default class SlotIterator {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.SlotIterator');
    }
    static $isInstance(obj) {
        return obj instanceof SlotIterator.$javaClass;
    }
}
