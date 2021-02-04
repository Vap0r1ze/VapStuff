import Messenger from './Messenger.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginMessageListener from './PluginMessageListener.js';
import PluginMessageListenerRegistration from './PluginMessageListenerRegistration.js';
export default interface StandardMessenger extends Messenger {
    dispatchIncomingMessage(source: Player, channel: string, message: Array<number>): void;
    getIncomingChannelRegistrations(channel: string): any;
    getIncomingChannelRegistrations(plugin: Plugin): any;
    getIncomingChannelRegistrations(plugin: Plugin, channel: string): any;
    getIncomingChannels(): any;
    getIncomingChannels(plugin: Plugin): any;
    getOutgoingChannels(): any;
    getOutgoingChannels(plugin: Plugin): any;
    isIncomingChannelRegistered(plugin: Plugin, channel: string): boolean;
    isOutgoingChannelRegistered(plugin: Plugin, channel: string): boolean;
    isRegistrationValid(registration: PluginMessageListenerRegistration): boolean;
    isReservedChannel(channel: string): boolean;
    registerIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
    registerOutgoingPluginChannel(plugin: Plugin, channel: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    unregisterIncomingPluginChannel(plugin: Plugin, channel: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): void;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, channel: string): void;
}
export default class StandardMessenger {
    static get $javaClass(): any;
    constructor();
    static get MAX_CHANNEL_SIZE(): number;
    static get MAX_MESSAGE_SIZE(): number;
    static validateAndCorrectChannel(channel: string): string;
    static validateChannel(channel: string): void;
    static validatePluginMessage(messenger: Messenger, source: Plugin, channel: string, message: Array<number>): void;
}
