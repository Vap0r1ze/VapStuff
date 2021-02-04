import Attribute from './Attribute.js';
import AttributeInstance from './AttributeInstance.js';
export default interface Attributable {
    getAttribute(arg0: Attribute): AttributeInstance;
}
export default class Attributable {
    static get $javaClass(): any;
}
