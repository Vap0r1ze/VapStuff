import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import NamespacedKey from '../../../../org/bukkit/NamespacedKey.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getRecipe(): NamespacedKey;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerRecipeDiscoverEvent {
    static get $javaClass(): any;
    constructor(who: Player, recipe: NamespacedKey);
    static getHandlerList(): HandlerList;
}
