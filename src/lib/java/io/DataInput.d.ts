export default interface DataInput {
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readFully(arg0: Array<number>): void;
    readFully(arg0: Array<number>, arg1: number, arg2: number): void;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    skipBytes(arg0: number): number;
}
export default class DataInput {
    static get $javaClass(): any;
}
