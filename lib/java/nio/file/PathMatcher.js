export default class PathMatcher {
    static get $javaClass() {
        return Java.type('java.nio.file.PathMatcher');
    }
    static $isInstance(obj) {
        return obj instanceof PathMatcher.$javaClass;
    }
}
