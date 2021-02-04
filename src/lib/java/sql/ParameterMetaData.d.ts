import Wrapper from './Wrapper.js';
export default interface ParameterMetaData extends Wrapper {
    getParameterClassName(arg0: number): string;
    getParameterCount(): number;
    getParameterMode(arg0: number): number;
    getParameterType(arg0: number): number;
    getParameterTypeName(arg0: number): string;
    getPrecision(arg0: number): number;
    getScale(arg0: number): number;
    isNullable(arg0: number): number;
    isSigned(arg0: number): boolean;
    isWrapperFor(arg0: any): boolean;
    unwrap(arg0: any): any;
}
export default class ParameterMetaData {
    static get $javaClass(): any;
    static get parameterModeIn(): number;
    static get parameterModeInOut(): number;
    static get parameterModeOut(): number;
    static get parameterModeUnknown(): number;
    static get parameterNoNulls(): number;
    static get parameterNullable(): number;
    static get parameterNullableUnknown(): number;
}
