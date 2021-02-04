import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServiceEvent from './ServiceEvent.js';
export default interface ServiceUnregisterEvent extends ServiceEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getProvider(): RegisteredServiceProvider;
    isAsynchronous(): boolean;
}
export default class ServiceUnregisterEvent {
    static get $javaClass(): any;
    constructor(serviceProvider: RegisteredServiceProvider);
    static getHandlerList(): HandlerList;
}
