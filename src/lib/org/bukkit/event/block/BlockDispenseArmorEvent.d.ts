import Block from '../../../../org/bukkit/block/Block.js';
import BlockDispenseEvent from './BlockDispenseEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface BlockDispenseArmorEvent extends BlockDispenseEvent {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getTargetEntity(): LivingEntity;
    getVelocity(): Vector;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setItem(item: ItemStack): void;
    setVelocity(vel: Vector): void;
}
export default class BlockDispenseArmorEvent {
    static get $javaClass(): any;
    constructor(block: Block, dispensed: ItemStack, target: LivingEntity);
    static getHandlerList(): HandlerList;
}
