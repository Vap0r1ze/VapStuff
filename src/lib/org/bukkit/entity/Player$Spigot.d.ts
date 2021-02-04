import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js';
import ChatMessageType from '../../../net/md_5/bungee/api/ChatMessageType.js';
import Entity$Spigot from './Entity$Spigot.js';
export default interface Player$Spigot extends Entity$Spigot {
    getCollidesWithEntities(): boolean;
    getHiddenPlayers(): any;
    getRawAddress(): any;
    respawn(): void;
    sendMessage(component: BaseComponent): void;
    sendMessage(components: Array<BaseComponent>): void;
    sendMessage(position: ChatMessageType, component: BaseComponent): void;
    sendMessage(position: ChatMessageType, components: Array<BaseComponent>): void;
    setCollidesWithEntities(collides: boolean): void;
}
export default class Player$Spigot {
    static get $javaClass(): any;
    constructor();
}
