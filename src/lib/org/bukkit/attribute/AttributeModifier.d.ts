import AttributeModifier$Operation from './AttributeModifier$Operation.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import EquipmentSlot from '../../../org/bukkit/inventory/EquipmentSlot.js';
export default interface AttributeModifier extends ConfigurationSerializable {
    getAmount(): number;
    getName(): string;
    getOperation(): AttributeModifier$Operation;
    getSlot(): EquipmentSlot;
    getUniqueId(): string;
    serialize(): any;
}
export default class AttributeModifier {
    static get $javaClass(): any;
    constructor(_name: string, amount: number, operation: AttributeModifier$Operation);
    constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation);
    constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
    static deserialize(args: any): AttributeModifier;
}
