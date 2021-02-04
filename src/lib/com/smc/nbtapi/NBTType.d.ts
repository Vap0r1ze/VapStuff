export default interface NBTType {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    getId(): number;
    name(): string;
    ordinal(): number;
}
export default class NBTType {
    static get $javaClass(): any;
    static get NBTTagByte(): NBTType;
    static get NBTTagByteArray(): NBTType;
    static get NBTTagCompound(): NBTType;
    static get NBTTagDouble(): NBTType;
    static get NBTTagEnd(): NBTType;
    static get NBTTagFloat(): NBTType;
    static get NBTTagInt(): NBTType;
    static get NBTTagIntArray(): NBTType;
    static get NBTTagList(): NBTType;
    static get NBTTagLong(): NBTType;
    static get NBTTagShort(): NBTType;
    static get NBTTagString(): NBTType;
}
