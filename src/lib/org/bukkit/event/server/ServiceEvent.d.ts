import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServerEvent from './ServerEvent.js';
export default interface ServiceEvent extends ServerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getProvider(): RegisteredServiceProvider;
    isAsynchronous(): boolean;
}
export default class ServiceEvent {
    static get $javaClass(): any;
    constructor(provider: RegisteredServiceProvider);
}
