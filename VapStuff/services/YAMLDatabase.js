"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileUtils_js_1 = require("../../lib/org/apache/commons/io/FileUtils.js");
const YAML = require("yaml");
class YAMLDatabase {
    constructor(file) {
        this.data = {};
        this.file = file;
        this.load();
    }
    load() {
        if (this.file.exists()) {
            const yamlStr = FileUtils_js_1.default.readFileToString(this.file, 'UTF-8');
            const data = YAML.parse(yamlStr);
            this.data = data;
        }
        else {
            FileUtils_js_1.default.writeStringToFile(this.file, '{}', 'UTF-8');
            this.data = {};
        }
    }
    save() {
        const yamlStr = this.stringify();
        FileUtils_js_1.default.writeStringToFile(this.file, yamlStr, 'UTF-8');
    }
    stringify() {
        return YAML.stringify(this.data);
    }
}
exports.default = YAMLDatabase;
