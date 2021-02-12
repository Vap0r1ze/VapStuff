import File from '../../lib/java/io/File.js'
import FileUtils from '../../lib/org/apache/commons/io/FileUtils.js'
import * as YAML from 'yaml'

export default class YAMLDatabase {
  file: File

  data: any = {}

  constructor(file: File) {
    this.file = file
    this.load()
  }

  load() {
    if (this.file.exists()) {
      const yamlStr = FileUtils.readFileToString(this.file, 'UTF-8')
      const data = YAML.parse(yamlStr)
      this.data = data
    } else {
      FileUtils.writeStringToFile(this.file, '{}', 'UTF-8')
      this.data = {}
    }
  }

  save() {
    const yamlStr = this.stringify()
    FileUtils.writeStringToFile(this.file, yamlStr, 'UTF-8')
  }

  stringify(): string {
    return YAML.stringify(this.data)
  }
}
