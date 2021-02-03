export default class ByteOrder {
    static get $javaClass() {
        return Java.type('java.nio.ByteOrder');
    }
    static get BIG_ENDIAN() {
        return ByteOrder.$javaClass.BIG_ENDIAN;
    }
    static get LITTLE_ENDIAN() {
        return ByteOrder.$javaClass.LITTLE_ENDIAN;
    }
    static nativeOrder(...args) {
        return ByteOrder.$javaClass.nativeOrder(...args);
    }
}
