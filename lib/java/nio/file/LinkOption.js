export default class LinkOption {
    static get $javaClass() {
        return Java.type('java.nio.file.LinkOption');
    }
    static $isInstance(obj) {
        return obj instanceof LinkOption.$javaClass;
    }
    static get NOFOLLOW_LINKS() {
        return this.$javaClass.NOFOLLOW_LINKS;
    }
}
