export default class Parameters {
    static get $javaClass() {
        return Java.type('khttp.structures.parameters.Parameters');
    }
    constructor(...args) {
        return new Parameters.$javaClass(...args);
    }
}
