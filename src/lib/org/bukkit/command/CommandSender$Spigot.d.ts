import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js';
export default interface CommandSender$Spigot {
    sendMessage(component: BaseComponent): void;
    sendMessage(components: Array<BaseComponent>): void;
}
export default class CommandSender$Spigot {
    static get $javaClass(): any;
    constructor();
}
