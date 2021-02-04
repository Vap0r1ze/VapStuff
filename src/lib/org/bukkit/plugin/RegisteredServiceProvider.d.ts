import Plugin from './Plugin.js';
import ServicePriority from './ServicePriority.js';
export default interface RegisteredServiceProvider {
    compareTo(other: RegisteredServiceProvider): number;
    compareTo(arg0: any): number;
    getPlugin(): Plugin;
    getPriority(): ServicePriority;
    getProvider(): any;
    getService(): any;
}
export default class RegisteredServiceProvider {
    static get $javaClass(): any;
    constructor(service: any, provider: any, priority: ServicePriority, plugin: Plugin);
}
