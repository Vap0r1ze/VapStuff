import ObjectStreamField from './ObjectStreamField.js';
import Serializable from './Serializable.js';
export default interface ObjectStreamClass extends Serializable {
    forClass(): any;
    getField(arg0: string): ObjectStreamField;
    getFields(): Array<ObjectStreamField>;
    getName(): string;
    getSerialVersionUID(): number;
}
export default class ObjectStreamClass {
    static get $javaClass(): any;
    static get NO_FIELDS(): Array<ObjectStreamField>;
    static lookup(arg0: any): ObjectStreamClass;
    static lookupAny(arg0: any): ObjectStreamClass;
}
