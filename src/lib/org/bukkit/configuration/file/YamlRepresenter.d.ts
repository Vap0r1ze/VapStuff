export default interface YamlRepresenter {
    addClassTag(arg0: any, arg1: any): any;
    addTypeDescription(td: any): any;
    getDefaultFlowStyle(): any;
    getDefaultScalarStyle(): any;
    getPropertyUtils(): any;
    getTimeZone(): any;
    isExplicitPropertyUtils(): boolean;
    represent(data: any): any;
    setDefaultFlowStyle(defaultFlowStyle: any): void;
    setDefaultScalarStyle(defaultStyle: any): void;
    setPropertyUtils(propertyUtils: any): void;
    setTimeZone(arg0: any): void;
}
export default class YamlRepresenter {
    static get $javaClass(): any;
    constructor();
}
