import File from '../../../java/io/File.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from './Plugin.js';
import PluginDescriptionFile from './PluginDescriptionFile.js';
export default interface PluginLoader {
    createRegisteredListeners(arg0: Listener, arg1: Plugin): any;
    disablePlugin(arg0: Plugin): void;
    enablePlugin(arg0: Plugin): void;
    getPluginDescription(arg0: File): PluginDescriptionFile;
    getPluginFileFilters(): Array<any>;
    loadPlugin(arg0: File): Plugin;
}
export default class PluginLoader {
    static get $javaClass(): any;
}
