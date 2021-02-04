export default class ByteOrder {
    static get $javaClass(): any;
    static get BIG_ENDIAN(): ByteOrder;
    static get LITTLE_ENDIAN(): ByteOrder;
    static nativeOrder(): ByteOrder;
}
