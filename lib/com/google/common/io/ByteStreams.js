export default class ByteStreams {
    static get $javaClass() {
        return Java.type('com.google.common.io.ByteStreams');
    }
    static $isInstance(obj) {
        return obj instanceof ByteStreams.$javaClass;
    }
    static copy(...args) {
        return ByteStreams.$javaClass.copy(...args);
    }
    static exhaust(...args) {
        return ByteStreams.$javaClass.exhaust(...args);
    }
    static limit(...args) {
        return ByteStreams.$javaClass.limit(...args);
    }
    static newDataInput(...args) {
        return ByteStreams.$javaClass.newDataInput(...args);
    }
    static newDataOutput(...args) {
        return ByteStreams.$javaClass.newDataOutput(...args);
    }
    static nullOutputStream(...args) {
        return ByteStreams.$javaClass.nullOutputStream(...args);
    }
    static read(...args) {
        return ByteStreams.$javaClass.read(...args);
    }
    static readBytes(...args) {
        return ByteStreams.$javaClass.readBytes(...args);
    }
    static readFully(...args) {
        return ByteStreams.$javaClass.readFully(...args);
    }
    static skipFully(...args) {
        return ByteStreams.$javaClass.skipFully(...args);
    }
    static toByteArray(...args) {
        return ByteStreams.$javaClass.toByteArray(...args);
    }
}
