export default class GenericResponse {
    static get $javaClass() {
        return Java.type('khttp.responses.GenericResponse');
    }
    static $isInstance(obj) {
        return obj instanceof GenericResponse.$javaClass;
    }
    constructor(...args) {
        return new GenericResponse.$javaClass(...args);
    }
    static access$getDefaultEndInitializers$cp(...args) {
        return GenericResponse.$javaClass.access$getDefaultEndInitializers$cp(...args);
    }
    static access$getDefaultStartInitializers$cp(...args) {
        return GenericResponse.$javaClass.access$getDefaultStartInitializers$cp(...args);
    }
    static access$get_cookies$p(...args) {
        return GenericResponse.$javaClass.access$get_cookies$p(...args);
    }
}
