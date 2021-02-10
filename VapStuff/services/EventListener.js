"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribe = void 0;
const BlockBreakEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockBreakEvent.js");
const BlockBurnEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockBurnEvent.js");
const BlockCanBuildEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockCanBuildEvent.js");
const BlockCookEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockCookEvent.js");
const BlockDamageEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockDamageEvent.js");
const BlockDispenseArmorEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockDispenseArmorEvent.js");
const BlockDispenseEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockDispenseEvent.js");
const BlockDropItemEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockDropItemEvent.js");
const BlockEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockEvent.js");
const BlockExpEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockExpEvent.js");
const BlockExplodeEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockExplodeEvent.js");
const BlockFadeEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockFadeEvent.js");
const BlockFertilizeEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockFertilizeEvent.js");
const BlockFormEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockFormEvent.js");
const BlockFromToEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockFromToEvent.js");
const BlockGrowEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockGrowEvent.js");
const BlockIgniteEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockIgniteEvent.js");
const BlockMultiPlaceEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockMultiPlaceEvent.js");
const BlockPhysicsEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockPhysicsEvent.js");
const BlockPistonEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockPistonEvent.js");
const BlockPistonExtendEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockPistonExtendEvent.js");
const BlockPistonRetractEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockPistonRetractEvent.js");
const BlockPlaceEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockPlaceEvent.js");
const BlockRedstoneEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockRedstoneEvent.js");
const BlockShearEntityEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockShearEntityEvent.js");
const BlockSpreadEvent_js_1 = require("../../lib/org/bukkit/event/block/BlockSpreadEvent.js");
const CauldronLevelChangeEvent_js_1 = require("../../lib/org/bukkit/event/block/CauldronLevelChangeEvent.js");
const EntityBlockFormEvent_js_1 = require("../../lib/org/bukkit/event/block/EntityBlockFormEvent.js");
const FluidLevelChangeEvent_js_1 = require("../../lib/org/bukkit/event/block/FluidLevelChangeEvent.js");
const LeavesDecayEvent_js_1 = require("../../lib/org/bukkit/event/block/LeavesDecayEvent.js");
const MoistureChangeEvent_js_1 = require("../../lib/org/bukkit/event/block/MoistureChangeEvent.js");
const NotePlayEvent_js_1 = require("../../lib/org/bukkit/event/block/NotePlayEvent.js");
const SignChangeEvent_js_1 = require("../../lib/org/bukkit/event/block/SignChangeEvent.js");
const SpongeAbsorbEvent_js_1 = require("../../lib/org/bukkit/event/block/SpongeAbsorbEvent.js");
const EnchantItemEvent_js_1 = require("../../lib/org/bukkit/event/enchantment/EnchantItemEvent.js");
const PrepareItemEnchantEvent_js_1 = require("../../lib/org/bukkit/event/enchantment/PrepareItemEnchantEvent.js");
const AreaEffectCloudApplyEvent_js_1 = require("../../lib/org/bukkit/event/entity/AreaEffectCloudApplyEvent.js");
const BatToggleSleepEvent_js_1 = require("../../lib/org/bukkit/event/entity/BatToggleSleepEvent.js");
const CreatureSpawnEvent_js_1 = require("../../lib/org/bukkit/event/entity/CreatureSpawnEvent.js");
const CreeperPowerEvent_js_1 = require("../../lib/org/bukkit/event/entity/CreeperPowerEvent.js");
const EnderDragonChangePhaseEvent_js_1 = require("../../lib/org/bukkit/event/entity/EnderDragonChangePhaseEvent.js");
const EntityAirChangeEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityAirChangeEvent.js");
const EntityBreakDoorEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityBreakDoorEvent.js");
const EntityBreedEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityBreedEvent.js");
const EntityChangeBlockEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityChangeBlockEvent.js");
const EntityCombustByBlockEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityCombustByBlockEvent.js");
const EntityCombustByEntityEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityCombustByEntityEvent.js");
const EntityCombustEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityCombustEvent.js");
const EntityCreatePortalEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityCreatePortalEvent.js");
const EntityDamageByBlockEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityDamageByBlockEvent.js");
const EntityDamageByEntityEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityDamageByEntityEvent.js");
const EntityDamageEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityDamageEvent.js");
const EntityDeathEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityDeathEvent.js");
const EntityDropItemEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityDropItemEvent.js");
const EntityEnterBlockEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityEnterBlockEvent.js");
const EntityEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityEvent.js");
const EntityExplodeEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityExplodeEvent.js");
const EntityInteractEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityInteractEvent.js");
const EntityPickupItemEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityPickupItemEvent.js");
const EntityPlaceEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityPlaceEvent.js");
const EntityPortalEnterEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityPortalEnterEvent.js");
const EntityPortalEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityPortalEvent.js");
const EntityPortalExitEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityPortalExitEvent.js");
const EntityPoseChangeEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityPoseChangeEvent.js");
const EntityPotionEffectEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityPotionEffectEvent.js");
const EntityRegainHealthEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityRegainHealthEvent.js");
const EntityResurrectEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityResurrectEvent.js");
const EntityShootBowEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityShootBowEvent.js");
const EntitySpawnEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntitySpawnEvent.js");
const EntityTameEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityTameEvent.js");
const EntityTargetEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityTargetEvent.js");
const EntityTargetLivingEntityEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityTargetLivingEntityEvent.js");
const EntityTeleportEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityTeleportEvent.js");
const EntityToggleGlideEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityToggleGlideEvent.js");
const EntityToggleSwimEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityToggleSwimEvent.js");
const EntityTransformEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityTransformEvent.js");
const EntityUnleashEvent_js_1 = require("../../lib/org/bukkit/event/entity/EntityUnleashEvent.js");
const ExpBottleEvent_js_1 = require("../../lib/org/bukkit/event/entity/ExpBottleEvent.js");
const ExplosionPrimeEvent_js_1 = require("../../lib/org/bukkit/event/entity/ExplosionPrimeEvent.js");
const FireworkExplodeEvent_js_1 = require("../../lib/org/bukkit/event/entity/FireworkExplodeEvent.js");
const FoodLevelChangeEvent_js_1 = require("../../lib/org/bukkit/event/entity/FoodLevelChangeEvent.js");
const HorseJumpEvent_js_1 = require("../../lib/org/bukkit/event/entity/HorseJumpEvent.js");
const ItemDespawnEvent_js_1 = require("../../lib/org/bukkit/event/entity/ItemDespawnEvent.js");
const ItemMergeEvent_js_1 = require("../../lib/org/bukkit/event/entity/ItemMergeEvent.js");
const ItemSpawnEvent_js_1 = require("../../lib/org/bukkit/event/entity/ItemSpawnEvent.js");
const LingeringPotionSplashEvent_js_1 = require("../../lib/org/bukkit/event/entity/LingeringPotionSplashEvent.js");
const PigZapEvent_js_1 = require("../../lib/org/bukkit/event/entity/PigZapEvent.js");
const PigZombieAngerEvent_js_1 = require("../../lib/org/bukkit/event/entity/PigZombieAngerEvent.js");
const PlayerDeathEvent_js_1 = require("../../lib/org/bukkit/event/entity/PlayerDeathEvent.js");
const PlayerLeashEntityEvent_js_1 = require("../../lib/org/bukkit/event/entity/PlayerLeashEntityEvent.js");
const PotionSplashEvent_js_1 = require("../../lib/org/bukkit/event/entity/PotionSplashEvent.js");
const ProjectileHitEvent_js_1 = require("../../lib/org/bukkit/event/entity/ProjectileHitEvent.js");
const ProjectileLaunchEvent_js_1 = require("../../lib/org/bukkit/event/entity/ProjectileLaunchEvent.js");
const SheepDyeWoolEvent_js_1 = require("../../lib/org/bukkit/event/entity/SheepDyeWoolEvent.js");
const SheepRegrowWoolEvent_js_1 = require("../../lib/org/bukkit/event/entity/SheepRegrowWoolEvent.js");
const SlimeSplitEvent_js_1 = require("../../lib/org/bukkit/event/entity/SlimeSplitEvent.js");
const SpawnerSpawnEvent_js_1 = require("../../lib/org/bukkit/event/entity/SpawnerSpawnEvent.js");
const VillagerAcquireTradeEvent_js_1 = require("../../lib/org/bukkit/event/entity/VillagerAcquireTradeEvent.js");
const VillagerCareerChangeEvent_js_1 = require("../../lib/org/bukkit/event/entity/VillagerCareerChangeEvent.js");
const VillagerReplenishTradeEvent_js_1 = require("../../lib/org/bukkit/event/entity/VillagerReplenishTradeEvent.js");
const HangingBreakByEntityEvent_js_1 = require("../../lib/org/bukkit/event/hanging/HangingBreakByEntityEvent.js");
const HangingBreakEvent_js_1 = require("../../lib/org/bukkit/event/hanging/HangingBreakEvent.js");
const HangingEvent_js_1 = require("../../lib/org/bukkit/event/hanging/HangingEvent.js");
const HangingPlaceEvent_js_1 = require("../../lib/org/bukkit/event/hanging/HangingPlaceEvent.js");
const BrewEvent_js_1 = require("../../lib/org/bukkit/event/inventory/BrewEvent.js");
const BrewingStandFuelEvent_js_1 = require("../../lib/org/bukkit/event/inventory/BrewingStandFuelEvent.js");
const CraftItemEvent_js_1 = require("../../lib/org/bukkit/event/inventory/CraftItemEvent.js");
const FurnaceBurnEvent_js_1 = require("../../lib/org/bukkit/event/inventory/FurnaceBurnEvent.js");
const FurnaceExtractEvent_js_1 = require("../../lib/org/bukkit/event/inventory/FurnaceExtractEvent.js");
const FurnaceSmeltEvent_js_1 = require("../../lib/org/bukkit/event/inventory/FurnaceSmeltEvent.js");
const InventoryClickEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryClickEvent.js");
const InventoryCloseEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryCloseEvent.js");
const InventoryCreativeEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryCreativeEvent.js");
const InventoryDragEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryDragEvent.js");
const InventoryEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryEvent.js");
const InventoryInteractEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryInteractEvent.js");
const InventoryMoveItemEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryMoveItemEvent.js");
const InventoryOpenEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryOpenEvent.js");
const InventoryPickupItemEvent_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryPickupItemEvent.js");
const PrepareAnvilEvent_js_1 = require("../../lib/org/bukkit/event/inventory/PrepareAnvilEvent.js");
const PrepareItemCraftEvent_js_1 = require("../../lib/org/bukkit/event/inventory/PrepareItemCraftEvent.js");
const TradeSelectEvent_js_1 = require("../../lib/org/bukkit/event/inventory/TradeSelectEvent.js");
const AsyncPlayerChatEvent_js_1 = require("../../lib/org/bukkit/event/player/AsyncPlayerChatEvent.js");
const AsyncPlayerPreLoginEvent_js_1 = require("../../lib/org/bukkit/event/player/AsyncPlayerPreLoginEvent.js");
const PlayerAdvancementDoneEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerAdvancementDoneEvent.js");
const PlayerAnimationEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerAnimationEvent.js");
const PlayerArmorStandManipulateEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerArmorStandManipulateEvent.js");
const PlayerBedEnterEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerBedEnterEvent.js");
const PlayerBedLeaveEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerBedLeaveEvent.js");
const PlayerBucketEmptyEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerBucketEmptyEvent.js");
const PlayerBucketEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerBucketEvent.js");
const PlayerBucketFillEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerBucketFillEvent.js");
const PlayerChangedMainHandEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerChangedMainHandEvent.js");
const PlayerChangedWorldEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerChangedWorldEvent.js");
const PlayerChannelEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerChannelEvent.js");
const PlayerChatEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerChatEvent.js");
const PlayerChatTabCompleteEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerChatTabCompleteEvent.js");
const PlayerCommandPreprocessEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerCommandPreprocessEvent.js");
const PlayerCommandSendEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerCommandSendEvent.js");
const PlayerDropItemEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerDropItemEvent.js");
const PlayerEditBookEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerEditBookEvent.js");
const PlayerEggThrowEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerEggThrowEvent.js");
const PlayerEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerEvent.js");
const PlayerExpChangeEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerExpChangeEvent.js");
const PlayerFishEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerFishEvent.js");
const PlayerGameModeChangeEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerGameModeChangeEvent.js");
const PlayerInteractAtEntityEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerInteractAtEntityEvent.js");
const PlayerInteractEntityEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerInteractEntityEvent.js");
const PlayerInteractEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerInteractEvent.js");
const PlayerItemBreakEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerItemBreakEvent.js");
const PlayerItemConsumeEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerItemConsumeEvent.js");
const PlayerItemDamageEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerItemDamageEvent.js");
const PlayerItemHeldEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerItemHeldEvent.js");
const PlayerItemMendEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerItemMendEvent.js");
const PlayerJoinEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerJoinEvent.js");
const PlayerKickEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerKickEvent.js");
const PlayerLevelChangeEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerLevelChangeEvent.js");
const PlayerLocaleChangeEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerLocaleChangeEvent.js");
const PlayerLoginEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerLoginEvent.js");
const PlayerMoveEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerMoveEvent.js");
const PlayerPickupArrowEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerPickupArrowEvent.js");
const PlayerPickupItemEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerPickupItemEvent.js");
const PlayerPortalEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerPortalEvent.js");
const PlayerPreLoginEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerPreLoginEvent.js");
const PlayerQuitEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerQuitEvent.js");
const PlayerRecipeDiscoverEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerRecipeDiscoverEvent.js");
const PlayerRegisterChannelEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerRegisterChannelEvent.js");
const PlayerResourcePackStatusEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerResourcePackStatusEvent.js");
const PlayerRespawnEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerRespawnEvent.js");
const PlayerRiptideEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerRiptideEvent.js");
const PlayerShearEntityEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerShearEntityEvent.js");
const PlayerStatisticIncrementEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerStatisticIncrementEvent.js");
const PlayerSwapHandItemsEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerSwapHandItemsEvent.js");
const PlayerTakeLecternBookEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerTakeLecternBookEvent.js");
const PlayerTeleportEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerTeleportEvent.js");
const PlayerToggleFlightEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerToggleFlightEvent.js");
const PlayerToggleSneakEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerToggleSneakEvent.js");
const PlayerToggleSprintEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerToggleSprintEvent.js");
const PlayerUnleashEntityEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerUnleashEntityEvent.js");
const PlayerUnregisterChannelEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerUnregisterChannelEvent.js");
const PlayerVelocityEvent_js_1 = require("../../lib/org/bukkit/event/player/PlayerVelocityEvent.js");
const RaidEvent_js_1 = require("../../lib/org/bukkit/event/raid/RaidEvent.js");
const RaidFinishEvent_js_1 = require("../../lib/org/bukkit/event/raid/RaidFinishEvent.js");
const RaidSpawnWaveEvent_js_1 = require("../../lib/org/bukkit/event/raid/RaidSpawnWaveEvent.js");
const RaidStopEvent_js_1 = require("../../lib/org/bukkit/event/raid/RaidStopEvent.js");
const RaidTriggerEvent_js_1 = require("../../lib/org/bukkit/event/raid/RaidTriggerEvent.js");
const BroadcastMessageEvent_js_1 = require("../../lib/org/bukkit/event/server/BroadcastMessageEvent.js");
const MapInitializeEvent_js_1 = require("../../lib/org/bukkit/event/server/MapInitializeEvent.js");
const PluginDisableEvent_js_1 = require("../../lib/org/bukkit/event/server/PluginDisableEvent.js");
const PluginEnableEvent_js_1 = require("../../lib/org/bukkit/event/server/PluginEnableEvent.js");
const PluginEvent_js_1 = require("../../lib/org/bukkit/event/server/PluginEvent.js");
const RemoteServerCommandEvent_js_1 = require("../../lib/org/bukkit/event/server/RemoteServerCommandEvent.js");
const ServerCommandEvent_js_1 = require("../../lib/org/bukkit/event/server/ServerCommandEvent.js");
const ServerEvent_js_1 = require("../../lib/org/bukkit/event/server/ServerEvent.js");
const ServerListPingEvent_js_1 = require("../../lib/org/bukkit/event/server/ServerListPingEvent.js");
const ServerLoadEvent_js_1 = require("../../lib/org/bukkit/event/server/ServerLoadEvent.js");
const ServiceEvent_js_1 = require("../../lib/org/bukkit/event/server/ServiceEvent.js");
const ServiceRegisterEvent_js_1 = require("../../lib/org/bukkit/event/server/ServiceRegisterEvent.js");
const ServiceUnregisterEvent_js_1 = require("../../lib/org/bukkit/event/server/ServiceUnregisterEvent.js");
const TabCompleteEvent_js_1 = require("../../lib/org/bukkit/event/server/TabCompleteEvent.js");
const VehicleBlockCollisionEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleBlockCollisionEvent.js");
const VehicleCollisionEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleCollisionEvent.js");
const VehicleCreateEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleCreateEvent.js");
const VehicleDamageEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleDamageEvent.js");
const VehicleDestroyEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleDestroyEvent.js");
const VehicleEnterEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleEnterEvent.js");
const VehicleEntityCollisionEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleEntityCollisionEvent.js");
const VehicleEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleEvent.js");
const VehicleExitEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleExitEvent.js");
const VehicleMoveEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleMoveEvent.js");
const VehicleUpdateEvent_js_1 = require("../../lib/org/bukkit/event/vehicle/VehicleUpdateEvent.js");
const LightningStrikeEvent_js_1 = require("../../lib/org/bukkit/event/weather/LightningStrikeEvent.js");
const ThunderChangeEvent_js_1 = require("../../lib/org/bukkit/event/weather/ThunderChangeEvent.js");
const WeatherChangeEvent_js_1 = require("../../lib/org/bukkit/event/weather/WeatherChangeEvent.js");
const WeatherEvent_js_1 = require("../../lib/org/bukkit/event/weather/WeatherEvent.js");
const ChunkEvent_js_1 = require("../../lib/org/bukkit/event/world/ChunkEvent.js");
const ChunkLoadEvent_js_1 = require("../../lib/org/bukkit/event/world/ChunkLoadEvent.js");
const ChunkPopulateEvent_js_1 = require("../../lib/org/bukkit/event/world/ChunkPopulateEvent.js");
const ChunkUnloadEvent_js_1 = require("../../lib/org/bukkit/event/world/ChunkUnloadEvent.js");
const PortalCreateEvent_js_1 = require("../../lib/org/bukkit/event/world/PortalCreateEvent.js");
const SpawnChangeEvent_js_1 = require("../../lib/org/bukkit/event/world/SpawnChangeEvent.js");
const StructureGrowEvent_js_1 = require("../../lib/org/bukkit/event/world/StructureGrowEvent.js");
const TimeSkipEvent_js_1 = require("../../lib/org/bukkit/event/world/TimeSkipEvent.js");
const WorldEvent_js_1 = require("../../lib/org/bukkit/event/world/WorldEvent.js");
const WorldInitEvent_js_1 = require("../../lib/org/bukkit/event/world/WorldInitEvent.js");
const WorldLoadEvent_js_1 = require("../../lib/org/bukkit/event/world/WorldLoadEvent.js");
const WorldSaveEvent_js_1 = require("../../lib/org/bukkit/event/world/WorldSaveEvent.js");
const WorldUnloadEvent_js_1 = require("../../lib/org/bukkit/event/world/WorldUnloadEvent.js");
function Subscribe(Constructor) {
    return class SubscriberModule extends Constructor {
        onEnable() {
            if (this.onBlockBreak) {
                this.plugin.registerEvent(BlockBreakEvent_js_1.default, this.onBlockBreak.bind(this));
            }
            if (this.onBlockBurn) {
                this.plugin.registerEvent(BlockBurnEvent_js_1.default, this.onBlockBurn.bind(this));
            }
            if (this.onBlockCanBuild) {
                this.plugin.registerEvent(BlockCanBuildEvent_js_1.default, this.onBlockCanBuild.bind(this));
            }
            if (this.onBlockCook) {
                this.plugin.registerEvent(BlockCookEvent_js_1.default, this.onBlockCook.bind(this));
            }
            if (this.onBlockDamage) {
                this.plugin.registerEvent(BlockDamageEvent_js_1.default, this.onBlockDamage.bind(this));
            }
            if (this.onBlockDispenseArmor) {
                this.plugin.registerEvent(BlockDispenseArmorEvent_js_1.default, this.onBlockDispenseArmor.bind(this));
            }
            if (this.onBlockDispense) {
                this.plugin.registerEvent(BlockDispenseEvent_js_1.default, this.onBlockDispense.bind(this));
            }
            if (this.onBlockDropItem) {
                this.plugin.registerEvent(BlockDropItemEvent_js_1.default, this.onBlockDropItem.bind(this));
            }
            if (this.onBlock) {
                this.plugin.registerEvent(BlockEvent_js_1.default, this.onBlock.bind(this));
            }
            if (this.onBlockExp) {
                this.plugin.registerEvent(BlockExpEvent_js_1.default, this.onBlockExp.bind(this));
            }
            if (this.onBlockExplode) {
                this.plugin.registerEvent(BlockExplodeEvent_js_1.default, this.onBlockExplode.bind(this));
            }
            if (this.onBlockFade) {
                this.plugin.registerEvent(BlockFadeEvent_js_1.default, this.onBlockFade.bind(this));
            }
            if (this.onBlockFertilize) {
                this.plugin.registerEvent(BlockFertilizeEvent_js_1.default, this.onBlockFertilize.bind(this));
            }
            if (this.onBlockForm) {
                this.plugin.registerEvent(BlockFormEvent_js_1.default, this.onBlockForm.bind(this));
            }
            if (this.onBlockFromTo) {
                this.plugin.registerEvent(BlockFromToEvent_js_1.default, this.onBlockFromTo.bind(this));
            }
            if (this.onBlockGrow) {
                this.plugin.registerEvent(BlockGrowEvent_js_1.default, this.onBlockGrow.bind(this));
            }
            if (this.onBlockIgnite) {
                this.plugin.registerEvent(BlockIgniteEvent_js_1.default, this.onBlockIgnite.bind(this));
            }
            if (this.onBlockMultiPlace) {
                this.plugin.registerEvent(BlockMultiPlaceEvent_js_1.default, this.onBlockMultiPlace.bind(this));
            }
            if (this.onBlockPhysics) {
                this.plugin.registerEvent(BlockPhysicsEvent_js_1.default, this.onBlockPhysics.bind(this));
            }
            if (this.onBlockPiston) {
                this.plugin.registerEvent(BlockPistonEvent_js_1.default, this.onBlockPiston.bind(this));
            }
            if (this.onBlockPistonExtend) {
                this.plugin.registerEvent(BlockPistonExtendEvent_js_1.default, this.onBlockPistonExtend.bind(this));
            }
            if (this.onBlockPistonRetract) {
                this.plugin.registerEvent(BlockPistonRetractEvent_js_1.default, this.onBlockPistonRetract.bind(this));
            }
            if (this.onBlockPlace) {
                this.plugin.registerEvent(BlockPlaceEvent_js_1.default, this.onBlockPlace.bind(this));
            }
            if (this.onBlockRedstone) {
                this.plugin.registerEvent(BlockRedstoneEvent_js_1.default, this.onBlockRedstone.bind(this));
            }
            if (this.onBlockShearEntity) {
                this.plugin.registerEvent(BlockShearEntityEvent_js_1.default, this.onBlockShearEntity.bind(this));
            }
            if (this.onBlockSpread) {
                this.plugin.registerEvent(BlockSpreadEvent_js_1.default, this.onBlockSpread.bind(this));
            }
            if (this.onCauldronLevelChange) {
                this.plugin.registerEvent(CauldronLevelChangeEvent_js_1.default, this.onCauldronLevelChange.bind(this));
            }
            if (this.onEntityBlockForm) {
                this.plugin.registerEvent(EntityBlockFormEvent_js_1.default, this.onEntityBlockForm.bind(this));
            }
            if (this.onFluidLevelChange) {
                this.plugin.registerEvent(FluidLevelChangeEvent_js_1.default, this.onFluidLevelChange.bind(this));
            }
            if (this.onLeavesDecay) {
                this.plugin.registerEvent(LeavesDecayEvent_js_1.default, this.onLeavesDecay.bind(this));
            }
            if (this.onMoistureChange) {
                this.plugin.registerEvent(MoistureChangeEvent_js_1.default, this.onMoistureChange.bind(this));
            }
            if (this.onNotePlay) {
                this.plugin.registerEvent(NotePlayEvent_js_1.default, this.onNotePlay.bind(this));
            }
            if (this.onSignChange) {
                this.plugin.registerEvent(SignChangeEvent_js_1.default, this.onSignChange.bind(this));
            }
            if (this.onSpongeAbsorb) {
                this.plugin.registerEvent(SpongeAbsorbEvent_js_1.default, this.onSpongeAbsorb.bind(this));
            }
            if (this.onEnchantItem) {
                this.plugin.registerEvent(EnchantItemEvent_js_1.default, this.onEnchantItem.bind(this));
            }
            if (this.onPrepareItemEnchant) {
                this.plugin.registerEvent(PrepareItemEnchantEvent_js_1.default, this.onPrepareItemEnchant.bind(this));
            }
            if (this.onAreaEffectCloudApply) {
                this.plugin.registerEvent(AreaEffectCloudApplyEvent_js_1.default, this.onAreaEffectCloudApply.bind(this));
            }
            if (this.onBatToggleSleep) {
                this.plugin.registerEvent(BatToggleSleepEvent_js_1.default, this.onBatToggleSleep.bind(this));
            }
            if (this.onCreatureSpawn) {
                this.plugin.registerEvent(CreatureSpawnEvent_js_1.default, this.onCreatureSpawn.bind(this));
            }
            if (this.onCreeperPower) {
                this.plugin.registerEvent(CreeperPowerEvent_js_1.default, this.onCreeperPower.bind(this));
            }
            if (this.onEnderDragonChangePhase) {
                this.plugin.registerEvent(EnderDragonChangePhaseEvent_js_1.default, this.onEnderDragonChangePhase.bind(this));
            }
            if (this.onEntityAirChange) {
                this.plugin.registerEvent(EntityAirChangeEvent_js_1.default, this.onEntityAirChange.bind(this));
            }
            if (this.onEntityBreakDoor) {
                this.plugin.registerEvent(EntityBreakDoorEvent_js_1.default, this.onEntityBreakDoor.bind(this));
            }
            if (this.onEntityBreed) {
                this.plugin.registerEvent(EntityBreedEvent_js_1.default, this.onEntityBreed.bind(this));
            }
            if (this.onEntityChangeBlock) {
                this.plugin.registerEvent(EntityChangeBlockEvent_js_1.default, this.onEntityChangeBlock.bind(this));
            }
            if (this.onEntityCombustByBlock) {
                this.plugin.registerEvent(EntityCombustByBlockEvent_js_1.default, this.onEntityCombustByBlock.bind(this));
            }
            if (this.onEntityCombustByEntity) {
                this.plugin.registerEvent(EntityCombustByEntityEvent_js_1.default, this.onEntityCombustByEntity.bind(this));
            }
            if (this.onEntityCombust) {
                this.plugin.registerEvent(EntityCombustEvent_js_1.default, this.onEntityCombust.bind(this));
            }
            if (this.onEntityCreatePortal) {
                this.plugin.registerEvent(EntityCreatePortalEvent_js_1.default, this.onEntityCreatePortal.bind(this));
            }
            if (this.onEntityDamageByBlock) {
                this.plugin.registerEvent(EntityDamageByBlockEvent_js_1.default, this.onEntityDamageByBlock.bind(this));
            }
            if (this.onEntityDamageByEntity) {
                this.plugin.registerEvent(EntityDamageByEntityEvent_js_1.default, this.onEntityDamageByEntity.bind(this));
            }
            if (this.onEntityDamage) {
                this.plugin.registerEvent(EntityDamageEvent_js_1.default, this.onEntityDamage.bind(this));
            }
            if (this.onEntityDeath) {
                this.plugin.registerEvent(EntityDeathEvent_js_1.default, this.onEntityDeath.bind(this));
            }
            if (this.onEntityDropItem) {
                this.plugin.registerEvent(EntityDropItemEvent_js_1.default, this.onEntityDropItem.bind(this));
            }
            if (this.onEntityEnterBlock) {
                this.plugin.registerEvent(EntityEnterBlockEvent_js_1.default, this.onEntityEnterBlock.bind(this));
            }
            if (this.onEntity) {
                this.plugin.registerEvent(EntityEvent_js_1.default, this.onEntity.bind(this));
            }
            if (this.onEntityExplode) {
                this.plugin.registerEvent(EntityExplodeEvent_js_1.default, this.onEntityExplode.bind(this));
            }
            if (this.onEntityInteract) {
                this.plugin.registerEvent(EntityInteractEvent_js_1.default, this.onEntityInteract.bind(this));
            }
            if (this.onEntityPickupItem) {
                this.plugin.registerEvent(EntityPickupItemEvent_js_1.default, this.onEntityPickupItem.bind(this));
            }
            if (this.onEntityPlace) {
                this.plugin.registerEvent(EntityPlaceEvent_js_1.default, this.onEntityPlace.bind(this));
            }
            if (this.onEntityPortalEnter) {
                this.plugin.registerEvent(EntityPortalEnterEvent_js_1.default, this.onEntityPortalEnter.bind(this));
            }
            if (this.onEntityPortal) {
                this.plugin.registerEvent(EntityPortalEvent_js_1.default, this.onEntityPortal.bind(this));
            }
            if (this.onEntityPortalExit) {
                this.plugin.registerEvent(EntityPortalExitEvent_js_1.default, this.onEntityPortalExit.bind(this));
            }
            if (this.onEntityPoseChange) {
                this.plugin.registerEvent(EntityPoseChangeEvent_js_1.default, this.onEntityPoseChange.bind(this));
            }
            if (this.onEntityPotionEffect) {
                this.plugin.registerEvent(EntityPotionEffectEvent_js_1.default, this.onEntityPotionEffect.bind(this));
            }
            if (this.onEntityRegainHealth) {
                this.plugin.registerEvent(EntityRegainHealthEvent_js_1.default, this.onEntityRegainHealth.bind(this));
            }
            if (this.onEntityResurrect) {
                this.plugin.registerEvent(EntityResurrectEvent_js_1.default, this.onEntityResurrect.bind(this));
            }
            if (this.onEntityShootBow) {
                this.plugin.registerEvent(EntityShootBowEvent_js_1.default, this.onEntityShootBow.bind(this));
            }
            if (this.onEntitySpawn) {
                this.plugin.registerEvent(EntitySpawnEvent_js_1.default, this.onEntitySpawn.bind(this));
            }
            if (this.onEntityTame) {
                this.plugin.registerEvent(EntityTameEvent_js_1.default, this.onEntityTame.bind(this));
            }
            if (this.onEntityTarget) {
                this.plugin.registerEvent(EntityTargetEvent_js_1.default, this.onEntityTarget.bind(this));
            }
            if (this.onEntityTargetLivingEntity) {
                this.plugin.registerEvent(EntityTargetLivingEntityEvent_js_1.default, this.onEntityTargetLivingEntity.bind(this));
            }
            if (this.onEntityTeleport) {
                this.plugin.registerEvent(EntityTeleportEvent_js_1.default, this.onEntityTeleport.bind(this));
            }
            if (this.onEntityToggleGlide) {
                this.plugin.registerEvent(EntityToggleGlideEvent_js_1.default, this.onEntityToggleGlide.bind(this));
            }
            if (this.onEntityToggleSwim) {
                this.plugin.registerEvent(EntityToggleSwimEvent_js_1.default, this.onEntityToggleSwim.bind(this));
            }
            if (this.onEntityTransform) {
                this.plugin.registerEvent(EntityTransformEvent_js_1.default, this.onEntityTransform.bind(this));
            }
            if (this.onEntityUnleash) {
                this.plugin.registerEvent(EntityUnleashEvent_js_1.default, this.onEntityUnleash.bind(this));
            }
            if (this.onExpBottle) {
                this.plugin.registerEvent(ExpBottleEvent_js_1.default, this.onExpBottle.bind(this));
            }
            if (this.onExplosionPrime) {
                this.plugin.registerEvent(ExplosionPrimeEvent_js_1.default, this.onExplosionPrime.bind(this));
            }
            if (this.onFireworkExplode) {
                this.plugin.registerEvent(FireworkExplodeEvent_js_1.default, this.onFireworkExplode.bind(this));
            }
            if (this.onFoodLevelChange) {
                this.plugin.registerEvent(FoodLevelChangeEvent_js_1.default, this.onFoodLevelChange.bind(this));
            }
            if (this.onHorseJump) {
                this.plugin.registerEvent(HorseJumpEvent_js_1.default, this.onHorseJump.bind(this));
            }
            if (this.onItemDespawn) {
                this.plugin.registerEvent(ItemDespawnEvent_js_1.default, this.onItemDespawn.bind(this));
            }
            if (this.onItemMerge) {
                this.plugin.registerEvent(ItemMergeEvent_js_1.default, this.onItemMerge.bind(this));
            }
            if (this.onItemSpawn) {
                this.plugin.registerEvent(ItemSpawnEvent_js_1.default, this.onItemSpawn.bind(this));
            }
            if (this.onLingeringPotionSplash) {
                this.plugin.registerEvent(LingeringPotionSplashEvent_js_1.default, this.onLingeringPotionSplash.bind(this));
            }
            if (this.onPigZap) {
                this.plugin.registerEvent(PigZapEvent_js_1.default, this.onPigZap.bind(this));
            }
            if (this.onPigZombieAnger) {
                this.plugin.registerEvent(PigZombieAngerEvent_js_1.default, this.onPigZombieAnger.bind(this));
            }
            if (this.onPlayerDeath) {
                this.plugin.registerEvent(PlayerDeathEvent_js_1.default, this.onPlayerDeath.bind(this));
            }
            if (this.onPlayerLeashEntity) {
                this.plugin.registerEvent(PlayerLeashEntityEvent_js_1.default, this.onPlayerLeashEntity.bind(this));
            }
            if (this.onPotionSplash) {
                this.plugin.registerEvent(PotionSplashEvent_js_1.default, this.onPotionSplash.bind(this));
            }
            if (this.onProjectileHit) {
                this.plugin.registerEvent(ProjectileHitEvent_js_1.default, this.onProjectileHit.bind(this));
            }
            if (this.onProjectileLaunch) {
                this.plugin.registerEvent(ProjectileLaunchEvent_js_1.default, this.onProjectileLaunch.bind(this));
            }
            if (this.onSheepDyeWool) {
                this.plugin.registerEvent(SheepDyeWoolEvent_js_1.default, this.onSheepDyeWool.bind(this));
            }
            if (this.onSheepRegrowWool) {
                this.plugin.registerEvent(SheepRegrowWoolEvent_js_1.default, this.onSheepRegrowWool.bind(this));
            }
            if (this.onSlimeSplit) {
                this.plugin.registerEvent(SlimeSplitEvent_js_1.default, this.onSlimeSplit.bind(this));
            }
            if (this.onSpawnerSpawn) {
                this.plugin.registerEvent(SpawnerSpawnEvent_js_1.default, this.onSpawnerSpawn.bind(this));
            }
            if (this.onVillagerAcquireTrade) {
                this.plugin.registerEvent(VillagerAcquireTradeEvent_js_1.default, this.onVillagerAcquireTrade.bind(this));
            }
            if (this.onVillagerCareerChange) {
                this.plugin.registerEvent(VillagerCareerChangeEvent_js_1.default, this.onVillagerCareerChange.bind(this));
            }
            if (this.onVillagerReplenishTrade) {
                this.plugin.registerEvent(VillagerReplenishTradeEvent_js_1.default, this.onVillagerReplenishTrade.bind(this));
            }
            if (this.onHangingBreakByEntity) {
                this.plugin.registerEvent(HangingBreakByEntityEvent_js_1.default, this.onHangingBreakByEntity.bind(this));
            }
            if (this.onHangingBreak) {
                this.plugin.registerEvent(HangingBreakEvent_js_1.default, this.onHangingBreak.bind(this));
            }
            if (this.onHanging) {
                this.plugin.registerEvent(HangingEvent_js_1.default, this.onHanging.bind(this));
            }
            if (this.onHangingPlace) {
                this.plugin.registerEvent(HangingPlaceEvent_js_1.default, this.onHangingPlace.bind(this));
            }
            if (this.onBrew) {
                this.plugin.registerEvent(BrewEvent_js_1.default, this.onBrew.bind(this));
            }
            if (this.onBrewingStandFuel) {
                this.plugin.registerEvent(BrewingStandFuelEvent_js_1.default, this.onBrewingStandFuel.bind(this));
            }
            if (this.onCraftItem) {
                this.plugin.registerEvent(CraftItemEvent_js_1.default, this.onCraftItem.bind(this));
            }
            if (this.onFurnaceBurn) {
                this.plugin.registerEvent(FurnaceBurnEvent_js_1.default, this.onFurnaceBurn.bind(this));
            }
            if (this.onFurnaceExtract) {
                this.plugin.registerEvent(FurnaceExtractEvent_js_1.default, this.onFurnaceExtract.bind(this));
            }
            if (this.onFurnaceSmelt) {
                this.plugin.registerEvent(FurnaceSmeltEvent_js_1.default, this.onFurnaceSmelt.bind(this));
            }
            if (this.onInventoryClick) {
                this.plugin.registerEvent(InventoryClickEvent_js_1.default, this.onInventoryClick.bind(this));
            }
            if (this.onInventoryClose) {
                this.plugin.registerEvent(InventoryCloseEvent_js_1.default, this.onInventoryClose.bind(this));
            }
            if (this.onInventoryCreative) {
                this.plugin.registerEvent(InventoryCreativeEvent_js_1.default, this.onInventoryCreative.bind(this));
            }
            if (this.onInventoryDrag) {
                this.plugin.registerEvent(InventoryDragEvent_js_1.default, this.onInventoryDrag.bind(this));
            }
            if (this.onInventory) {
                this.plugin.registerEvent(InventoryEvent_js_1.default, this.onInventory.bind(this));
            }
            if (this.onInventoryInteract) {
                this.plugin.registerEvent(InventoryInteractEvent_js_1.default, this.onInventoryInteract.bind(this));
            }
            if (this.onInventoryMoveItem) {
                this.plugin.registerEvent(InventoryMoveItemEvent_js_1.default, this.onInventoryMoveItem.bind(this));
            }
            if (this.onInventoryOpen) {
                this.plugin.registerEvent(InventoryOpenEvent_js_1.default, this.onInventoryOpen.bind(this));
            }
            if (this.onInventoryPickupItem) {
                this.plugin.registerEvent(InventoryPickupItemEvent_js_1.default, this.onInventoryPickupItem.bind(this));
            }
            if (this.onPrepareAnvil) {
                this.plugin.registerEvent(PrepareAnvilEvent_js_1.default, this.onPrepareAnvil.bind(this));
            }
            if (this.onPrepareItemCraft) {
                this.plugin.registerEvent(PrepareItemCraftEvent_js_1.default, this.onPrepareItemCraft.bind(this));
            }
            if (this.onTradeSelect) {
                this.plugin.registerEvent(TradeSelectEvent_js_1.default, this.onTradeSelect.bind(this));
            }
            if (this.onAsyncPlayerChat) {
                this.plugin.registerEvent(AsyncPlayerChatEvent_js_1.default, this.onAsyncPlayerChat.bind(this));
            }
            if (this.onAsyncPlayerPreLogin) {
                this.plugin.registerEvent(AsyncPlayerPreLoginEvent_js_1.default, this.onAsyncPlayerPreLogin.bind(this));
            }
            if (this.onPlayerAdvancementDone) {
                this.plugin.registerEvent(PlayerAdvancementDoneEvent_js_1.default, this.onPlayerAdvancementDone.bind(this));
            }
            if (this.onPlayerAnimation) {
                this.plugin.registerEvent(PlayerAnimationEvent_js_1.default, this.onPlayerAnimation.bind(this));
            }
            if (this.onPlayerArmorStandManipulate) {
                this.plugin.registerEvent(PlayerArmorStandManipulateEvent_js_1.default, this.onPlayerArmorStandManipulate.bind(this));
            }
            if (this.onPlayerBedEnter) {
                this.plugin.registerEvent(PlayerBedEnterEvent_js_1.default, this.onPlayerBedEnter.bind(this));
            }
            if (this.onPlayerBedLeave) {
                this.plugin.registerEvent(PlayerBedLeaveEvent_js_1.default, this.onPlayerBedLeave.bind(this));
            }
            if (this.onPlayerBucketEmpty) {
                this.plugin.registerEvent(PlayerBucketEmptyEvent_js_1.default, this.onPlayerBucketEmpty.bind(this));
            }
            if (this.onPlayerBucket) {
                this.plugin.registerEvent(PlayerBucketEvent_js_1.default, this.onPlayerBucket.bind(this));
            }
            if (this.onPlayerBucketFill) {
                this.plugin.registerEvent(PlayerBucketFillEvent_js_1.default, this.onPlayerBucketFill.bind(this));
            }
            if (this.onPlayerChangedMainHand) {
                this.plugin.registerEvent(PlayerChangedMainHandEvent_js_1.default, this.onPlayerChangedMainHand.bind(this));
            }
            if (this.onPlayerChangedWorld) {
                this.plugin.registerEvent(PlayerChangedWorldEvent_js_1.default, this.onPlayerChangedWorld.bind(this));
            }
            if (this.onPlayerChannel) {
                this.plugin.registerEvent(PlayerChannelEvent_js_1.default, this.onPlayerChannel.bind(this));
            }
            if (this.onPlayerChat) {
                this.plugin.registerEvent(PlayerChatEvent_js_1.default, this.onPlayerChat.bind(this));
            }
            if (this.onPlayerChatTabComplete) {
                this.plugin.registerEvent(PlayerChatTabCompleteEvent_js_1.default, this.onPlayerChatTabComplete.bind(this));
            }
            if (this.onPlayerCommandPreprocess) {
                this.plugin.registerEvent(PlayerCommandPreprocessEvent_js_1.default, this.onPlayerCommandPreprocess.bind(this));
            }
            if (this.onPlayerCommandSend) {
                this.plugin.registerEvent(PlayerCommandSendEvent_js_1.default, this.onPlayerCommandSend.bind(this));
            }
            if (this.onPlayerDropItem) {
                this.plugin.registerEvent(PlayerDropItemEvent_js_1.default, this.onPlayerDropItem.bind(this));
            }
            if (this.onPlayerEditBook) {
                this.plugin.registerEvent(PlayerEditBookEvent_js_1.default, this.onPlayerEditBook.bind(this));
            }
            if (this.onPlayerEggThrow) {
                this.plugin.registerEvent(PlayerEggThrowEvent_js_1.default, this.onPlayerEggThrow.bind(this));
            }
            if (this.onPlayer) {
                this.plugin.registerEvent(PlayerEvent_js_1.default, this.onPlayer.bind(this));
            }
            if (this.onPlayerExpChange) {
                this.plugin.registerEvent(PlayerExpChangeEvent_js_1.default, this.onPlayerExpChange.bind(this));
            }
            if (this.onPlayerFish) {
                this.plugin.registerEvent(PlayerFishEvent_js_1.default, this.onPlayerFish.bind(this));
            }
            if (this.onPlayerGameModeChange) {
                this.plugin.registerEvent(PlayerGameModeChangeEvent_js_1.default, this.onPlayerGameModeChange.bind(this));
            }
            if (this.onPlayerInteractAtEntity) {
                this.plugin.registerEvent(PlayerInteractAtEntityEvent_js_1.default, this.onPlayerInteractAtEntity.bind(this));
            }
            if (this.onPlayerInteractEntity) {
                this.plugin.registerEvent(PlayerInteractEntityEvent_js_1.default, this.onPlayerInteractEntity.bind(this));
            }
            if (this.onPlayerInteract) {
                this.plugin.registerEvent(PlayerInteractEvent_js_1.default, this.onPlayerInteract.bind(this));
            }
            if (this.onPlayerItemBreak) {
                this.plugin.registerEvent(PlayerItemBreakEvent_js_1.default, this.onPlayerItemBreak.bind(this));
            }
            if (this.onPlayerItemConsume) {
                this.plugin.registerEvent(PlayerItemConsumeEvent_js_1.default, this.onPlayerItemConsume.bind(this));
            }
            if (this.onPlayerItemDamage) {
                this.plugin.registerEvent(PlayerItemDamageEvent_js_1.default, this.onPlayerItemDamage.bind(this));
            }
            if (this.onPlayerItemHeld) {
                this.plugin.registerEvent(PlayerItemHeldEvent_js_1.default, this.onPlayerItemHeld.bind(this));
            }
            if (this.onPlayerItemMend) {
                this.plugin.registerEvent(PlayerItemMendEvent_js_1.default, this.onPlayerItemMend.bind(this));
            }
            if (this.onPlayerJoin) {
                this.plugin.registerEvent(PlayerJoinEvent_js_1.default, this.onPlayerJoin.bind(this));
            }
            if (this.onPlayerKick) {
                this.plugin.registerEvent(PlayerKickEvent_js_1.default, this.onPlayerKick.bind(this));
            }
            if (this.onPlayerLevelChange) {
                this.plugin.registerEvent(PlayerLevelChangeEvent_js_1.default, this.onPlayerLevelChange.bind(this));
            }
            if (this.onPlayerLocaleChange) {
                this.plugin.registerEvent(PlayerLocaleChangeEvent_js_1.default, this.onPlayerLocaleChange.bind(this));
            }
            if (this.onPlayerLogin) {
                this.plugin.registerEvent(PlayerLoginEvent_js_1.default, this.onPlayerLogin.bind(this));
            }
            if (this.onPlayerMove) {
                this.plugin.registerEvent(PlayerMoveEvent_js_1.default, this.onPlayerMove.bind(this));
            }
            if (this.onPlayerPickupArrow) {
                this.plugin.registerEvent(PlayerPickupArrowEvent_js_1.default, this.onPlayerPickupArrow.bind(this));
            }
            if (this.onPlayerPickupItem) {
                this.plugin.registerEvent(PlayerPickupItemEvent_js_1.default, this.onPlayerPickupItem.bind(this));
            }
            if (this.onPlayerPortal) {
                this.plugin.registerEvent(PlayerPortalEvent_js_1.default, this.onPlayerPortal.bind(this));
            }
            if (this.onPlayerPreLogin) {
                this.plugin.registerEvent(PlayerPreLoginEvent_js_1.default, this.onPlayerPreLogin.bind(this));
            }
            if (this.onPlayerQuit) {
                this.plugin.registerEvent(PlayerQuitEvent_js_1.default, this.onPlayerQuit.bind(this));
            }
            if (this.onPlayerRecipeDiscover) {
                this.plugin.registerEvent(PlayerRecipeDiscoverEvent_js_1.default, this.onPlayerRecipeDiscover.bind(this));
            }
            if (this.onPlayerRegisterChannel) {
                this.plugin.registerEvent(PlayerRegisterChannelEvent_js_1.default, this.onPlayerRegisterChannel.bind(this));
            }
            if (this.onPlayerResourcePackStatus) {
                this.plugin.registerEvent(PlayerResourcePackStatusEvent_js_1.default, this.onPlayerResourcePackStatus.bind(this));
            }
            if (this.onPlayerRespawn) {
                this.plugin.registerEvent(PlayerRespawnEvent_js_1.default, this.onPlayerRespawn.bind(this));
            }
            if (this.onPlayerRiptide) {
                this.plugin.registerEvent(PlayerRiptideEvent_js_1.default, this.onPlayerRiptide.bind(this));
            }
            if (this.onPlayerShearEntity) {
                this.plugin.registerEvent(PlayerShearEntityEvent_js_1.default, this.onPlayerShearEntity.bind(this));
            }
            if (this.onPlayerStatisticIncrement) {
                this.plugin.registerEvent(PlayerStatisticIncrementEvent_js_1.default, this.onPlayerStatisticIncrement.bind(this));
            }
            if (this.onPlayerSwapHandItems) {
                this.plugin.registerEvent(PlayerSwapHandItemsEvent_js_1.default, this.onPlayerSwapHandItems.bind(this));
            }
            if (this.onPlayerTakeLecternBook) {
                this.plugin.registerEvent(PlayerTakeLecternBookEvent_js_1.default, this.onPlayerTakeLecternBook.bind(this));
            }
            if (this.onPlayerTeleport) {
                this.plugin.registerEvent(PlayerTeleportEvent_js_1.default, this.onPlayerTeleport.bind(this));
            }
            if (this.onPlayerToggleFlight) {
                this.plugin.registerEvent(PlayerToggleFlightEvent_js_1.default, this.onPlayerToggleFlight.bind(this));
            }
            if (this.onPlayerToggleSneak) {
                this.plugin.registerEvent(PlayerToggleSneakEvent_js_1.default, this.onPlayerToggleSneak.bind(this));
            }
            if (this.onPlayerToggleSprint) {
                this.plugin.registerEvent(PlayerToggleSprintEvent_js_1.default, this.onPlayerToggleSprint.bind(this));
            }
            if (this.onPlayerUnleashEntity) {
                this.plugin.registerEvent(PlayerUnleashEntityEvent_js_1.default, this.onPlayerUnleashEntity.bind(this));
            }
            if (this.onPlayerUnregisterChannel) {
                this.plugin.registerEvent(PlayerUnregisterChannelEvent_js_1.default, this.onPlayerUnregisterChannel.bind(this));
            }
            if (this.onPlayerVelocity) {
                this.plugin.registerEvent(PlayerVelocityEvent_js_1.default, this.onPlayerVelocity.bind(this));
            }
            if (this.onRaid) {
                this.plugin.registerEvent(RaidEvent_js_1.default, this.onRaid.bind(this));
            }
            if (this.onRaidFinish) {
                this.plugin.registerEvent(RaidFinishEvent_js_1.default, this.onRaidFinish.bind(this));
            }
            if (this.onRaidSpawnWave) {
                this.plugin.registerEvent(RaidSpawnWaveEvent_js_1.default, this.onRaidSpawnWave.bind(this));
            }
            if (this.onRaidStop) {
                this.plugin.registerEvent(RaidStopEvent_js_1.default, this.onRaidStop.bind(this));
            }
            if (this.onRaidTrigger) {
                this.plugin.registerEvent(RaidTriggerEvent_js_1.default, this.onRaidTrigger.bind(this));
            }
            if (this.onBroadcastMessage) {
                this.plugin.registerEvent(BroadcastMessageEvent_js_1.default, this.onBroadcastMessage.bind(this));
            }
            if (this.onMapInitialize) {
                this.plugin.registerEvent(MapInitializeEvent_js_1.default, this.onMapInitialize.bind(this));
            }
            if (this.onPluginDisable) {
                this.plugin.registerEvent(PluginDisableEvent_js_1.default, this.onPluginDisable.bind(this));
            }
            if (this.onPluginEnable) {
                this.plugin.registerEvent(PluginEnableEvent_js_1.default, this.onPluginEnable.bind(this));
            }
            if (this.onPlugin) {
                this.plugin.registerEvent(PluginEvent_js_1.default, this.onPlugin.bind(this));
            }
            if (this.onRemoteServerCommand) {
                this.plugin.registerEvent(RemoteServerCommandEvent_js_1.default, this.onRemoteServerCommand.bind(this));
            }
            if (this.onServerCommand) {
                this.plugin.registerEvent(ServerCommandEvent_js_1.default, this.onServerCommand.bind(this));
            }
            if (this.onServer) {
                this.plugin.registerEvent(ServerEvent_js_1.default, this.onServer.bind(this));
            }
            if (this.onServerListPing) {
                this.plugin.registerEvent(ServerListPingEvent_js_1.default, this.onServerListPing.bind(this));
            }
            if (this.onServerLoad) {
                this.plugin.registerEvent(ServerLoadEvent_js_1.default, this.onServerLoad.bind(this));
            }
            if (this.onService) {
                this.plugin.registerEvent(ServiceEvent_js_1.default, this.onService.bind(this));
            }
            if (this.onServiceRegister) {
                this.plugin.registerEvent(ServiceRegisterEvent_js_1.default, this.onServiceRegister.bind(this));
            }
            if (this.onServiceUnregister) {
                this.plugin.registerEvent(ServiceUnregisterEvent_js_1.default, this.onServiceUnregister.bind(this));
            }
            if (this.onTabComplete) {
                this.plugin.registerEvent(TabCompleteEvent_js_1.default, this.onTabComplete.bind(this));
            }
            if (this.onVehicleBlockCollision) {
                this.plugin.registerEvent(VehicleBlockCollisionEvent_js_1.default, this.onVehicleBlockCollision.bind(this));
            }
            if (this.onVehicleCollision) {
                this.plugin.registerEvent(VehicleCollisionEvent_js_1.default, this.onVehicleCollision.bind(this));
            }
            if (this.onVehicleCreate) {
                this.plugin.registerEvent(VehicleCreateEvent_js_1.default, this.onVehicleCreate.bind(this));
            }
            if (this.onVehicleDamage) {
                this.plugin.registerEvent(VehicleDamageEvent_js_1.default, this.onVehicleDamage.bind(this));
            }
            if (this.onVehicleDestroy) {
                this.plugin.registerEvent(VehicleDestroyEvent_js_1.default, this.onVehicleDestroy.bind(this));
            }
            if (this.onVehicleEnter) {
                this.plugin.registerEvent(VehicleEnterEvent_js_1.default, this.onVehicleEnter.bind(this));
            }
            if (this.onVehicleEntityCollision) {
                this.plugin.registerEvent(VehicleEntityCollisionEvent_js_1.default, this.onVehicleEntityCollision.bind(this));
            }
            if (this.onVehicle) {
                this.plugin.registerEvent(VehicleEvent_js_1.default, this.onVehicle.bind(this));
            }
            if (this.onVehicleExit) {
                this.plugin.registerEvent(VehicleExitEvent_js_1.default, this.onVehicleExit.bind(this));
            }
            if (this.onVehicleMove) {
                this.plugin.registerEvent(VehicleMoveEvent_js_1.default, this.onVehicleMove.bind(this));
            }
            if (this.onVehicleUpdate) {
                this.plugin.registerEvent(VehicleUpdateEvent_js_1.default, this.onVehicleUpdate.bind(this));
            }
            if (this.onLightningStrike) {
                this.plugin.registerEvent(LightningStrikeEvent_js_1.default, this.onLightningStrike.bind(this));
            }
            if (this.onThunderChange) {
                this.plugin.registerEvent(ThunderChangeEvent_js_1.default, this.onThunderChange.bind(this));
            }
            if (this.onWeatherChange) {
                this.plugin.registerEvent(WeatherChangeEvent_js_1.default, this.onWeatherChange.bind(this));
            }
            if (this.onWeather) {
                this.plugin.registerEvent(WeatherEvent_js_1.default, this.onWeather.bind(this));
            }
            if (this.onChunk) {
                this.plugin.registerEvent(ChunkEvent_js_1.default, this.onChunk.bind(this));
            }
            if (this.onChunkLoad) {
                this.plugin.registerEvent(ChunkLoadEvent_js_1.default, this.onChunkLoad.bind(this));
            }
            if (this.onChunkPopulate) {
                this.plugin.registerEvent(ChunkPopulateEvent_js_1.default, this.onChunkPopulate.bind(this));
            }
            if (this.onChunkUnload) {
                this.plugin.registerEvent(ChunkUnloadEvent_js_1.default, this.onChunkUnload.bind(this));
            }
            if (this.onPortalCreate) {
                this.plugin.registerEvent(PortalCreateEvent_js_1.default, this.onPortalCreate.bind(this));
            }
            if (this.onSpawnChange) {
                this.plugin.registerEvent(SpawnChangeEvent_js_1.default, this.onSpawnChange.bind(this));
            }
            if (this.onStructureGrow) {
                this.plugin.registerEvent(StructureGrowEvent_js_1.default, this.onStructureGrow.bind(this));
            }
            if (this.onTimeSkip) {
                this.plugin.registerEvent(TimeSkipEvent_js_1.default, this.onTimeSkip.bind(this));
            }
            if (this.onWorld) {
                this.plugin.registerEvent(WorldEvent_js_1.default, this.onWorld.bind(this));
            }
            if (this.onWorldInit) {
                this.plugin.registerEvent(WorldInitEvent_js_1.default, this.onWorldInit.bind(this));
            }
            if (this.onWorldLoad) {
                this.plugin.registerEvent(WorldLoadEvent_js_1.default, this.onWorldLoad.bind(this));
            }
            if (this.onWorldSave) {
                this.plugin.registerEvent(WorldSaveEvent_js_1.default, this.onWorldSave.bind(this));
            }
            if (this.onWorldUnload) {
                this.plugin.registerEvent(WorldUnloadEvent_js_1.default, this.onWorldUnload.bind(this));
            }
            Constructor.prototype.onEnable.call(this);
        }
    };
}
exports.Subscribe = Subscribe;
