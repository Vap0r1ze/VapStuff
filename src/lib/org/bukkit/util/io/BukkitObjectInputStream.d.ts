import InputStream from '../../../../java/io/InputStream.js';
import ObjectInputStream from '../../../../java/io/ObjectInputStream.js';
import ObjectInputStream$GetField from '../../../../java/io/ObjectInputStream$GetField.js';
import ObjectInputValidation from '../../../../java/io/ObjectInputValidation.js';
import SerializablePermission from '../../../../java/io/SerializablePermission.js';
export default interface BukkitObjectInputStream extends ObjectInputStream {
    available(): number;
    close(): void;
    defaultReadObject(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: Array<number>): number;
    read(arg0: Array<number>, arg1: number, arg2: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFields(): ObjectInputStream$GetField;
    readFloat(): number;
    readFully(arg0: Array<number>): void;
    readFully(arg0: Array<number>, arg1: number, arg2: number): void;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    readObject(): any;
    readShort(): number;
    readUTF(): string;
    readUnshared(): any;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    registerValidation(arg0: ObjectInputValidation, arg1: number): void;
    reset(): void;
    skip(arg0: number): number;
    skipBytes(arg0: number): number;
}
export default class BukkitObjectInputStream {
    static get $javaClass(): any;
    constructor(_in: InputStream);
    static get PROTOCOL_VERSION_1(): number;
    static get PROTOCOL_VERSION_2(): number;
    static get SC_BLOCK_DATA(): number;
    static get SC_ENUM(): number;
    static get SC_EXTERNALIZABLE(): number;
    static get SC_SERIALIZABLE(): number;
    static get SC_WRITE_METHOD(): number;
    static get STREAM_MAGIC(): number;
    static get STREAM_VERSION(): number;
    static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission;
    static get SUBSTITUTION_PERMISSION(): SerializablePermission;
    static get TC_ARRAY(): number;
    static get TC_BASE(): number;
    static get TC_BLOCKDATA(): number;
    static get TC_BLOCKDATALONG(): number;
    static get TC_CLASS(): number;
    static get TC_CLASSDESC(): number;
    static get TC_ENDBLOCKDATA(): number;
    static get TC_ENUM(): number;
    static get TC_EXCEPTION(): number;
    static get TC_LONGSTRING(): number;
    static get TC_MAX(): number;
    static get TC_NULL(): number;
    static get TC_OBJECT(): number;
    static get TC_PROXYCLASSDESC(): number;
    static get TC_REFERENCE(): number;
    static get TC_RESET(): number;
    static get TC_STRING(): number;
    static get baseWireHandle(): number;
}
