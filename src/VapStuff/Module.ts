export default class Module {
  plugin: import('./main').default;

  constructor (plugin: import('./main').default) {
    this.plugin = plugin
  }

  onEnable () {}
  onDisable () {}
}
