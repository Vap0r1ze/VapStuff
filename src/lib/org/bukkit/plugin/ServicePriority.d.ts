export default interface ServicePriority {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class ServicePriority {
    static get $javaClass(): any;
    static get High(): ServicePriority;
    static get Highest(): ServicePriority;
    static get Low(): ServicePriority;
    static get Lowest(): ServicePriority;
    static get Normal(): ServicePriority;
}
