"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParameterMetaData {
    static get $javaClass() {
        return Java.type('java.sql.ParameterMetaData');
    }
    static $isInstance(obj) {
        return obj instanceof ParameterMetaData.$javaClass;
    }
    static get parameterModeIn() {
        return ParameterMetaData.$javaClass.parameterModeIn;
    }
    static get parameterModeInOut() {
        return ParameterMetaData.$javaClass.parameterModeInOut;
    }
    static get parameterModeOut() {
        return ParameterMetaData.$javaClass.parameterModeOut;
    }
    static get parameterModeUnknown() {
        return ParameterMetaData.$javaClass.parameterModeUnknown;
    }
    static get parameterNoNulls() {
        return ParameterMetaData.$javaClass.parameterNoNulls;
    }
    static get parameterNullable() {
        return ParameterMetaData.$javaClass.parameterNullable;
    }
    static get parameterNullableUnknown() {
        return ParameterMetaData.$javaClass.parameterNullableUnknown;
    }
}
exports.default = ParameterMetaData;
