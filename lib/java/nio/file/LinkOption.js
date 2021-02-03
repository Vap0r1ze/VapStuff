export default class LinkOption {
    static get $javaClass() {
        return Java.type('java.nio.file.LinkOption');
    }
    static get NOFOLLOW_LINKS() {
        return this.$javaClass.NOFOLLOW_LINKS;
    }
}
