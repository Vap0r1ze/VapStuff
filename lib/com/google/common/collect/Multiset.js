export default class Multiset {
    static get $javaClass() {
        return Java.type('com.google.common.collect.Multiset');
    }
    static $isInstance(obj) {
        return obj instanceof Multiset.$javaClass;
    }
}
