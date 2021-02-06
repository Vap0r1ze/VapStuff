export default class IOFileFilter {
    static get $javaClass() {
        return Java.type('org.apache.commons.io.filefilter.IOFileFilter');
    }
    static $isInstance(obj) {
        return obj instanceof IOFileFilter.$javaClass;
    }
}
