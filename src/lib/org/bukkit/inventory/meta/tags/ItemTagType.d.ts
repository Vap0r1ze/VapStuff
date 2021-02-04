import ItemTagAdapterContext from './ItemTagAdapterContext.js';
export default interface ItemTagType {
    fromPrimitive(arg0: any, arg1: ItemTagAdapterContext): any;
    getComplexType(): any;
    getPrimitiveType(): any;
    toPrimitive(arg0: any, arg1: ItemTagAdapterContext): any;
}
export default class ItemTagType {
    static get $javaClass(): any;
    static get BYTE(): ItemTagType;
    static get BYTE_ARRAY(): ItemTagType;
    static get DOUBLE(): ItemTagType;
    static get FLOAT(): ItemTagType;
    static get INTEGER(): ItemTagType;
    static get INTEGER_ARRAY(): ItemTagType;
    static get LONG(): ItemTagType;
    static get LONG_ARRAY(): ItemTagType;
    static get SHORT(): ItemTagType;
    static get STRING(): ItemTagType;
    static get TAG_CONTAINER(): ItemTagType;
}
