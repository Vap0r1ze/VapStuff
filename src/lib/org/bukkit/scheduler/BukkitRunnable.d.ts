import BukkitTask from './BukkitTask.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitRunnable {
    cancel(): void;
    getTaskId(): number;
    isCancelled(): boolean;
    run(): void;
    runTask(plugin: Plugin): BukkitTask;
    runTaskAsynchronously(plugin: Plugin): BukkitTask;
    runTaskLater(plugin: Plugin, delay: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask;
    runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, delay: number, period: number): BukkitTask;
}
export default class BukkitRunnable {
    static get $javaClass(): any;
    constructor();
}
