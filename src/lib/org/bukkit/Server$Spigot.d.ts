import BaseComponent from '../../net/md_5/bungee/api/chat/BaseComponent.js';
import YamlConfiguration from './configuration/file/YamlConfiguration.js';
export default interface Server$Spigot {
    broadcast(component: BaseComponent): void;
    broadcast(components: Array<BaseComponent>): void;
    getConfig(): YamlConfiguration;
    restart(): void;
}
export default class Server$Spigot {
    static get $javaClass(): any;
    constructor();
}
