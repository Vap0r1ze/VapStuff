import Enchantment from '../lib/org/bukkit/enchantments/Enchantment.js';
import Player from '../lib/org/bukkit/entity/Player.js';
import ItemFlag from '../lib/org/bukkit/inventory/ItemFlag.js';
import Sound from '../lib/org/bukkit/Sound.js';
export default class Module {
    constructor(plugin) {
        this.DUMMY_ENCH = Enchantment.WATER_WORKER;
        this.plugin = plugin;
    }
    onEnable() { }
    onDisable() { }
    // Bukkit Helpers
    addGlowEffect(item, dummyEnch) {
        item.addUnsafeEnchantment(this.DUMMY_ENCH, 1);
        const meta = item.getItemMeta();
        meta.addItemFlags([ItemFlag.HIDE_ENCHANTS]);
        item.setItemMeta(meta);
        return item;
    }
    tellPlayer(player, colorMsg) {
        player.sendMessage(this.colorText(`&a[${this.plugin.pluginName}] &7${colorMsg.replace(/&r/g, '&7')}`));
    }
    smartExpGet(player) {
        const level = player.getLevel();
        const progress = player.getExp();
        const totalExperience = this.levelToExp(level) + this.levelToRequiredExp(level) * progress;
        return Math.floor(totalExperience);
    }
    smartExpSet(player, totalExperience) {
        player.setTotalExperience(totalExperience);
        const [level, progress] = this.expToLevelAndProgress(totalExperience);
        player.setLevel(level);
        player.sendExperienceChange(this.floatSafe(progress), level);
    }
    smartLvlDecr(player, lvl) {
        this.smartExpSet(player, this.smartExpGet(player) - this.levelToExp(lvl));
    }
    // Text Helpers
    colorText(text) {
        return text
            .replace(/&([0-9a-fklmnor])/g, '\xA7$1')
            .replace(/&#([0-9a-f]{6})/gi, (match, hex) => {
            return this.hexChatColor(hex);
        })
            .replace(/&&/g, '&');
    }
    hexChatColor(hex) {
        return '\xA7x' + [...hex].map(c => `\xA7${c}`).join('');
    }
    capitalize(text) {
        return text[0].toUpperCase() + text.slice(1);
    }
    capitalizeWords(words) {
        return words.split(' ').map(w => this.capitalize(w)).join(' ');
    }
    // Math Helpers
    expToLevelAndProgress(exp) {
        let level;
        if (exp <= 352)
            level = Math.sqrt(exp + 9) - 3;
        else if (level >= 1624)
            level = (Math.sqrt(72 * exp - 54215) + 325) / 18;
        else
            level = (Math.sqrt(40 * exp - 7839) + 81) / 10;
        // Remove some precision to allow Double -> Float with Polyglot
        return [Math.floor(level), +(level % 1).toFixed(6)];
    }
    levelToExp(level) {
        let exp;
        if (level <= 16)
            exp = level ** 2 + 6 * level;
        else if (level >= 32)
            exp = 4.5 * level ** 2 - 162.5 * level + 2220;
        else
            exp = 2.5 * level ** 2 - 40.5 * level + 360;
        return Math.floor(exp);
    }
    levelToRequiredExp(level) {
        if (level <= 15)
            return 2 * level + 7;
        if (level >= 31)
            return 9 * level - 158;
        return 5 * level - 38;
    }
    rotCCW(vec2, n) {
        return [
            vec2[0] * (Math.abs(n - 2) - 1) - vec2[1] * (1 - Math.abs(n - 1)),
            vec2[0] * (1 - Math.abs(n - 1)) + vec2[1] * (Math.abs(n - 2) - 1),
        ];
    }
    // Type Guards
    isPlayer(obj) {
        return obj instanceof Player.$javaClass;
    }
    isSound(obj) {
        return obj instanceof Sound.$javaClass;
    }
    // Java Interop Helpers
    floatSafe(n) {
        return new (Java.type('java.lang.Float'))(n);
    }
    // Scheduler
    get scheduler() {
        return this.plugin.server.getScheduler();
    }
    runTaskLater(task, inTicks) {
        return this.scheduler.scheduleSyncDelayedTask(this.plugin.context.getJavaPlugin(), task, inTicks);
    }
    runTaskRepeat(task, delayTicks, everyTicks) {
        return this.scheduler.scheduleSyncRepeatingTask(this.plugin.context.getJavaPlugin(), task, delayTicks, everyTicks);
    }
    cancelTask(id) {
        return this.scheduler.cancelTask(id);
    }
}
