export default interface YamlConstructor {
    addTypeDescription(definition: any): any;
    checkData(): boolean;
    getData(): any;
    getPropertyUtils(): any;
    getSingleData(type: any): any;
    isAllowDuplicateKeys(): boolean;
    isExplicitPropertyUtils(): boolean;
    isWrappedToRootException(): boolean;
    setAllowDuplicateKeys(allowDuplicateKeys: boolean): void;
    setComposer(composer: any): void;
    setPropertyUtils(propertyUtils: any): void;
    setWrappedToRootException(wrappedToRootException: boolean): void;
}
export default class YamlConstructor {
    static get $javaClass(): any;
    constructor();
    static get undefinedConstructor(): any;
}
