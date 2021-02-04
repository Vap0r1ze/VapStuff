import NBTCompound from './NBTCompound.js';
import NBTList from './NBTList.js';
import NBTListCompound from './NBTListCompound.js';
import NBTType from './NBTType.js';
export default interface NBTCompoundList extends NBTList {
    add(arg0: any): boolean;
    add(empty: NBTListCompound): boolean;
    add(arg0: number, arg1: any): void;
    add(index: number, element: NBTListCompound): void;
    addAll(c: Array<any>): boolean;
    addAll(index: number, c: Array<any>): boolean;
    addCompound(): NBTListCompound;
    addCompound(comp: NBTCompound): NBTCompound;
    clear(): void;
    contains(o: any): boolean;
    containsAll(c: Array<any>): boolean;
    forEach(arg0: any): void;
    get(index: number): NBTListCompound;
    get(index: number): any;
    getName(): string;
    getParent(): NBTCompound;
    getType(): NBTType;
    indexOf(o: any): number;
    isEmpty(): boolean;
    iterator(): any;
    lastIndexOf(o: any): number;
    listIterator(): any;
    listIterator(startIndex: number): any;
    parallelStream(): any;
    remove(o: any): boolean;
    remove(i: number): any;
    removeAll(c: Array<any>): boolean;
    removeIf(arg0: any): boolean;
    replaceAll(arg0: any): void;
    retainAll(c: Array<any>): boolean;
    set(index: number, element: NBTListCompound): NBTListCompound;
    set(arg0: number, arg1: any): any;
    size(): number;
    sort(arg0: any): void;
    spliterator(): any;
    stream(): any;
    subList(fromIndex: number, toIndex: number): Array<any>;
    toArray(): Array<any>;
    toArray(a: Array<any>): Array<any>;
}
export default class NBTCompoundList {
    static get $javaClass(): any;
}
