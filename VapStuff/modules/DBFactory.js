"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Module_js_1 = require("../types/Module.js");
const YAMLDatabase_js_1 = require("../services/YAMLDatabase.js");
const File_js_1 = require("../../lib/java/io/File.js");
class DBFactory extends Module_js_1.default {
    get name() { return 'DB Factory'; }
    open(dbName) {
        this.plugin.getFile('');
        const dataFolder = this.plugin.context.getJavaPlugin().getDataFolder().getAbsolutePath();
        const filePath = `${dataFolder}/${dbName}.yml`;
        const file = new File_js_1.default(filePath);
        const db = new YAMLDatabase_js_1.default(file);
        return db;
    }
}
exports.default = DBFactory;
