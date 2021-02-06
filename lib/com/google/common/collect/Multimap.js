export default class Multimap {
    static get $javaClass() {
        return Java.type('com.google.common.collect.Multimap');
    }
    static $isInstance(obj) {
        return obj instanceof Multimap.$javaClass;
    }
}
