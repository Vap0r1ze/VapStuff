import Module from '../types/Module.js'
import YAMLDatabase from '../services/YAMLDatabase.js'
import File from '../../lib/java/io/File.js'

export default class DBFactory extends Module {
  get name() { return 'DB Factory' }

  open(dbName: string) {
    this.plugin.getFile('')
    const dataFolder = this.plugin.context.getJavaPlugin().getDataFolder().getAbsolutePath()
    const filePath = `${dataFolder}/${dbName}.yml`
    const file = new File(filePath)
    const db = new YAMLDatabase(file)
    return db
  }
}
