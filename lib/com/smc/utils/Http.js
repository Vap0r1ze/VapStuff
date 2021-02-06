export default class Http {
    static get $javaClass() {
        return Java.type('com.smc.utils.Http');
    }
    static $isInstance(obj) {
        return obj instanceof Http.$javaClass;
    }
    static delete(...args) {
        return Http.$javaClass.delete(...args);
    }
    static get(...args) {
        return Http.$javaClass.get(...args);
    }
    static head(...args) {
        return Http.$javaClass.head(...args);
    }
    static options(...args) {
        return Http.$javaClass.options(...args);
    }
    static patch(...args) {
        return Http.$javaClass.patch(...args);
    }
    static post(...args) {
        return Http.$javaClass.post(...args);
    }
    static put(...args) {
        return Http.$javaClass.put(...args);
    }
}
