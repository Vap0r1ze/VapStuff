export default class Date {
    static get $javaClass() {
        return Java.type('java.sql.Date');
    }
    static $isInstance(obj) {
        return obj instanceof Date.$javaClass;
    }
    constructor(...args) {
        return new Date.$javaClass(...args);
    }
    static UTC(...args) {
        return Date.$javaClass.UTC(...args);
    }
    static from(...args) {
        return Date.$javaClass.from(...args);
    }
    static parse(...args) {
        return Date.$javaClass.parse(...args);
    }
    static valueOf(...args) {
        return Date.$javaClass.valueOf(...args);
    }
}
