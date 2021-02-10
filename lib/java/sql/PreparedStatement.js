"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PreparedStatement {
    static get $javaClass() {
        return Java.type('java.sql.PreparedStatement');
    }
    static $isInstance(obj) {
        return obj instanceof PreparedStatement.$javaClass;
    }
    static get CLOSE_ALL_RESULTS() {
        return PreparedStatement.$javaClass.CLOSE_ALL_RESULTS;
    }
    static get CLOSE_CURRENT_RESULT() {
        return PreparedStatement.$javaClass.CLOSE_CURRENT_RESULT;
    }
    static get EXECUTE_FAILED() {
        return PreparedStatement.$javaClass.EXECUTE_FAILED;
    }
    static get KEEP_CURRENT_RESULT() {
        return PreparedStatement.$javaClass.KEEP_CURRENT_RESULT;
    }
    static get NO_GENERATED_KEYS() {
        return PreparedStatement.$javaClass.NO_GENERATED_KEYS;
    }
    static get RETURN_GENERATED_KEYS() {
        return PreparedStatement.$javaClass.RETURN_GENERATED_KEYS;
    }
    static get SUCCESS_NO_INFO() {
        return PreparedStatement.$javaClass.SUCCESS_NO_INFO;
    }
}
exports.default = PreparedStatement;
