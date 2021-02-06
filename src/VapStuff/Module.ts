import Enchantment from '../lib/org/bukkit/enchantments/Enchantment.js'
import Player from '../lib/org/bukkit/entity/Player.js'
import ItemFlag from '../lib/org/bukkit/inventory/ItemFlag.js'
import ItemStack from '../lib/org/bukkit/inventory/ItemStack.js'
import Sound from '../lib/org/bukkit/Sound.js'

export default class Module {
  plugin: import('./main').default

  protected DUMMY_ENCH = Enchantment.WATER_WORKER

  constructor(plugin: import('./main').default) {
    this.plugin = plugin
  }

  get name() {
    return 'Unnamed Module'
  }

  onEnable() {}

  onDisable() {}

  // Bukkit Helpers
  protected addGlowEffect(item: ItemStack, dummyEnch?: Enchantment): ItemStack {
    item.addUnsafeEnchantment(this.DUMMY_ENCH, 1)
    const meta = item.getItemMeta()
    meta.addItemFlags([ItemFlag.HIDE_ENCHANTS])
    item.setItemMeta(meta)
    return item
  }

  protected tellPlayer(player: Player, colorMsg: string) {
    player.sendMessage(this.colorText(`&a[${this.plugin.pluginName}] &7${
      colorMsg.replace(/&r/g, '&7')
    }`))
  }

  protected smartExpGet(player: Player): number {
    const level = player.getLevel()
    const progress = player.getExp()
    const totalExperience = this.levelToExp(level) + this.levelToRequiredExp(level) * progress
    return Math.floor(totalExperience)
  }

  protected smartExpSet(player: Player, totalExperience: number) {
    player.setTotalExperience(totalExperience)
    const [level, progress] = this.expToLevelAndProgress(totalExperience)
    player.setLevel(level)
    player.sendExperienceChange(this.floatSafe(progress), level)
  }

  protected smartLvlDecr(player: Player, lvl: number) {
    this.smartExpSet(player, this.smartExpGet(player) - this.levelToExp(lvl))
  }

  // Text Helpers
  protected colorText(text: string): string {
    return text
      .replace(/&([0-9a-fklmnor])/g, '\xA7$1')
      .replace(/&#([0-9a-f]{6})/gi, (match, hex) => this.hexChatColor(hex))
      .replace(/&&/g, '&')
  }

  protected hexChatColor(hex: string): string {
    return `\xA7x${[...hex].map(c => `\xA7${c}`).join('')}`
  }

  protected capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1)
  }

  protected capitalizeWords(words: string): string {
    return words.split(' ').map(w => this.capitalize(w)).join(' ')
  }

  // Math Helpers
  protected expToLevelAndProgress(exp: number): [number, number] {
    let level: number
    if (exp <= 352) level = Math.sqrt(exp + 9) - 3
    else if (level >= 1624) level = (Math.sqrt(72 * exp - 54215) + 325) / 18
    else level = (Math.sqrt(40 * exp - 7839) + 81) / 10
    // Remove some precision to allow Double -> Float with Polyglot
    return [Math.floor(level), +(level % 1).toFixed(6)]
  }

  protected levelToExp(level: number): number {
    let exp: number
    if (level <= 16) exp = level ** 2 + 6 * level
    else if (level >= 32) exp = 4.5 * level ** 2 - 162.5 * level + 2220
    else exp = 2.5 * level ** 2 - 40.5 * level + 360
    return Math.floor(exp)
  }

  protected levelToRequiredExp(level: number) {
    if (level <= 15) return 2 * level + 7
    if (level >= 31) return 9 * level - 158
    return 5 * level - 38
  }

  protected rotCCW(vec2: [number, number], n: number): [number, number] {
    return [
      vec2[0] * (Math.abs(n - 2) - 1) - vec2[1] * (1 - Math.abs(n - 1)),
      vec2[0] * (1 - Math.abs(n - 1)) + vec2[1] * (Math.abs(n - 2) - 1),
    ]
  }

  // Type Guards
  protected isPlayer(obj): obj is Player {
    return obj instanceof Player.$javaClass
  }

  protected isSound(obj): obj is Sound {
    return obj instanceof Sound.$javaClass
  }

  // Java Interop Helpers
  protected floatSafe(n: number): number {
    return new (Java.type('java.lang.Float'))(n)
  }

  // Scheduler
  protected get scheduler() {
    return this.plugin.server.getScheduler()
  }

  protected runTaskLater<F extends CallableFunction>(task: F, inTicks: number) {
    return this.scheduler.scheduleSyncDelayedTask(
      this.plugin.context.getJavaPlugin(),
      task,
      inTicks,
    )
  }

  protected runTaskRepeat<F extends CallableFunction>(
    task: F,
    delayTicks: number,
    everyTicks: number,
  ) {
    return this.scheduler.scheduleSyncRepeatingTask(
      this.plugin.context.getJavaPlugin(),
      task,
      delayTicks,
      everyTicks,
    )
  }

  protected cancelTask(id: number) {
    return this.scheduler.cancelTask(id)
  }
}
