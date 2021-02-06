import Advancement from './advancement/Advancement.js';
import BanList from './BanList.js';
import BanList$Type from './BanList$Type.js';
import BarColor from './boss/BarColor.js';
import BarFlag from './boss/BarFlag.js';
import BarStyle from './boss/BarStyle.js';
import BlockData from './block/data/BlockData.js';
import BossBar from './boss/BossBar.js';
import BukkitScheduler from './scheduler/BukkitScheduler.js';
import CachedServerIcon from './util/CachedServerIcon.js';
import ChunkGenerator$ChunkData from './generator/ChunkGenerator$ChunkData.js';
import CommandSender from './command/CommandSender.js';
import ConsoleCommandSender from './command/ConsoleCommandSender.js';
import Entity from './entity/Entity.js';
import File from '../../java/io/File.js';
import GameMode from './GameMode.js';
import HelpMap from './help/HelpMap.js';
import Inventory from './inventory/Inventory.js';
import InventoryHolder from './inventory/InventoryHolder.js';
import InventoryType from './event/inventory/InventoryType.js';
import ItemFactory from './inventory/ItemFactory.js';
import ItemStack from './inventory/ItemStack.js';
import KeyedBossBar from './boss/KeyedBossBar.js';
import Location from './Location.js';
import LootTable from './loot/LootTable.js';
import MapView from './map/MapView.js';
import Material from './Material.js';
import Merchant from './inventory/Merchant.js';
import Messenger from './plugin/messaging/Messenger.js';
import NamespacedKey from './NamespacedKey.js';
import OfflinePlayer from './OfflinePlayer.js';
import Player from './entity/Player.js';
import PluginCommand from './command/PluginCommand.js';
import PluginManager from './plugin/PluginManager.js';
import Recipe from './inventory/Recipe.js';
import ScoreboardManager from './scoreboard/ScoreboardManager.js';
import Server from './Server.js';
import Server$Spigot from './Server$Spigot.js';
import ServicesManager from './plugin/ServicesManager.js';
import StructureType from './StructureType.js';
import Tag from './Tag.js';
import UnsafeValues from './UnsafeValues.js';
import Warning$WarningState from './Warning$WarningState.js';
import World from './World.js';
import WorldCreator from './WorldCreator.js';
export default class Bukkit {
    static get $javaClass(): any;
    static addRecipe(recipe: Recipe): boolean;
    static advancementIterator(): any;
    static banIP(address: string): void;
    static broadcast(message: string, permission: string): number;
    static broadcastMessage(message: string): number;
    static clearRecipes(): void;
    static createBlockData(material: Material): BlockData;
    static createBlockData(data: string): BlockData;
    static createBlockData(material: Material, consumer: any): BlockData;
    static createBlockData(material: Material, data: string): BlockData;
    static createBossBar(title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): BossBar;
    static createBossBar(key: NamespacedKey, title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): KeyedBossBar;
    static createChunkData(world: World): ChunkGenerator$ChunkData;
    static createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
    static createExplorerMap(world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
    static createInventory(owner: InventoryHolder, type: InventoryType): Inventory;
    static createInventory(owner: InventoryHolder, size: number): Inventory;
    static createInventory(owner: InventoryHolder, type: InventoryType, title: string): Inventory;
    static createInventory(owner: InventoryHolder, size: number, title: string): Inventory;
    static createMap(world: World): MapView;
    static createMerchant(title: string): Merchant;
    static createWorld(creator: WorldCreator): World;
    static dispatchCommand(sender: CommandSender, commandLine: string): boolean;
    static getAdvancement(key: NamespacedKey): Advancement;
    static getAllowEnd(): boolean;
    static getAllowFlight(): boolean;
    static getAllowNether(): boolean;
    static getAmbientSpawnLimit(): number;
    static getAnimalSpawnLimit(): number;
    static getBanList(type: BanList$Type): BanList;
    static getBannedPlayers(): any;
    static getBossBar(key: NamespacedKey): KeyedBossBar;
    static getBossBars(): any;
    static getBukkitVersion(): string;
    static getCommandAliases(): any;
    static getConnectionThrottle(): number;
    static getConsoleSender(): ConsoleCommandSender;
    static getDefaultGameMode(): GameMode;
    static getEntity(uuid: string): Entity;
    static getGenerateStructures(): boolean;
    static getHelpMap(): HelpMap;
    static getIPBans(): any;
    static getIdleTimeout(): number;
    static getIp(): string;
    static getItemFactory(): ItemFactory;
    static getLogger(): any;
    static getLootTable(key: NamespacedKey): LootTable;
    static getMap(id: number): MapView;
    static getMaxPlayers(): number;
    static getMessenger(): Messenger;
    static getMonsterSpawnLimit(): number;
    static getMotd(): string;
    static getName(): string;
    static getOfflinePlayer(_name: string): OfflinePlayer;
    static getOfflinePlayer(id: string): OfflinePlayer;
    static getOfflinePlayers(): Array<OfflinePlayer>;
    static getOnlineMode(): boolean;
    static getOnlinePlayers(): Array<Player>;
    static getOperators(): any;
    static getPlayer(id: string): Player;
    static getPlayer(_name: string): Player;
    static getPlayerExact(_name: string): Player;
    static getPluginCommand(_name: string): PluginCommand;
    static getPluginManager(): PluginManager;
    static getPort(): number;
    static getRecipe(recipeKey: NamespacedKey): Recipe;
    static getRecipesFor(result: ItemStack): Array<Recipe>;
    static getScheduler(): BukkitScheduler;
    static getScoreboardManager(): ScoreboardManager;
    static getServer(): Server;
    static getServerIcon(): CachedServerIcon;
    static getServicesManager(): ServicesManager;
    static getShutdownMessage(): string;
    static getSpawnRadius(): number;
    static getTag(registry: string, tag: NamespacedKey, clazz: any): Tag;
    static getTags(registry: string, clazz: any): any;
    static getTicksPerAmbientSpawns(): number;
    static getTicksPerAnimalSpawns(): number;
    static getTicksPerMonsterSpawns(): number;
    static getTicksPerWaterAmbientSpawns(): number;
    static getTicksPerWaterSpawns(): number;
    static getUnsafe(): UnsafeValues;
    static getUpdateFolder(): string;
    static getUpdateFolderFile(): File;
    static getVersion(): string;
    static getViewDistance(): number;
    static getWarningState(): Warning$WarningState;
    static getWaterAmbientSpawnLimit(): number;
    static getWaterAnimalSpawnLimit(): number;
    static getWhitelistedPlayers(): any;
    static getWorld(_name: string): World;
    static getWorld(uid: string): World;
    static getWorldContainer(): File;
    static getWorldType(): string;
    static getWorlds(): Array<World>;
    static hasWhitelist(): boolean;
    static isHardcore(): boolean;
    static isPrimaryThread(): boolean;
    static loadServerIcon(file: File): CachedServerIcon;
    static loadServerIcon(image: any): CachedServerIcon;
    static matchPlayer(_name: string): Array<Player>;
    static recipeIterator(): any;
    static reload(): void;
    static reloadData(): void;
    static reloadWhitelist(): void;
    static removeBossBar(key: NamespacedKey): boolean;
    static removeRecipe(key: NamespacedKey): boolean;
    static resetRecipes(): void;
    static savePlayers(): void;
    static selectEntities(sender: CommandSender, selector: string): Array<Entity>;
    static setDefaultGameMode(mode: GameMode): void;
    static setIdleTimeout(threshold: number): void;
    static setServer(server: Server): void;
    static setSpawnRadius(value: number): void;
    static setWhitelist(value: boolean): void;
    static shutdown(): void;
    static spigot(): Server$Spigot;
    static unbanIP(address: string): void;
    static unloadWorld(world: World, save: boolean): boolean;
    static unloadWorld(_name: string, save: boolean): boolean;
}