import Messenger from './Messenger.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginMessageListener from './PluginMessageListener.js';
export default interface PluginMessageListenerRegistration {
    getChannel(): string;
    getListener(): PluginMessageListener;
    getPlugin(): Plugin;
    isValid(): boolean;
}
export default class PluginMessageListenerRegistration {
    static get $javaClass(): any;
    constructor(messenger: Messenger, plugin: Plugin, channel: string, listener: PluginMessageListener);
}
