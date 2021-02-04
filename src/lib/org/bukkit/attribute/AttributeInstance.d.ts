import Attribute from './Attribute.js';
import AttributeModifier from './AttributeModifier.js';
export default interface AttributeInstance {
    addModifier(arg0: AttributeModifier): void;
    getAttribute(): Attribute;
    getBaseValue(): number;
    getDefaultValue(): number;
    getModifiers(): Array<AttributeModifier>;
    getValue(): number;
    removeModifier(arg0: AttributeModifier): void;
    setBaseValue(arg0: number): void;
}
export default class AttributeInstance {
    static get $javaClass(): any;
}
