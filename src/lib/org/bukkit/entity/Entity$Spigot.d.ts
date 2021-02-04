import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js';
import CommandSender$Spigot from '../../../org/bukkit/command/CommandSender$Spigot.js';
export default interface Entity$Spigot extends CommandSender$Spigot {
    sendMessage(component: BaseComponent): void;
    sendMessage(components: Array<BaseComponent>): void;
}
export default class Entity$Spigot {
    static get $javaClass(): any;
    constructor();
}
