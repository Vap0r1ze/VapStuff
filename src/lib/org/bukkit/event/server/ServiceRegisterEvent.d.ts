import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServiceEvent from './ServiceEvent.js';
export default interface ServiceRegisterEvent extends ServiceEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getProvider(): RegisteredServiceProvider;
    isAsynchronous(): boolean;
}
export default class ServiceRegisterEvent {
    static get $javaClass(): any;
    constructor(registeredProvider: RegisteredServiceProvider);
    static getHandlerList(): HandlerList;
}
