import JsPlugin from "../lib/JsPlugin";

export default class Module {
  plugin: JsPlugin

  constructor (plugin: JsPlugin) {
    this.plugin = plugin
  }

  onEnable () {}
  onDisable () {}
}
