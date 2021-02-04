import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import ExperienceOrb from '../../../../org/bukkit/entity/ExperienceOrb.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getExperienceOrb(): ExperienceOrb;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getPlayer(): Player;
    getRepairAmount(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    setRepairAmount(amount: number): void;
}
export default class PlayerItemMendEvent {
    static get $javaClass(): any;
    constructor(who: Player, item: ItemStack, experienceOrb: ExperienceOrb, repairAmount: number);
    static getHandlerList(): HandlerList;
}
