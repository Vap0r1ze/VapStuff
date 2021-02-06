import Attribute from '../../../org/bukkit/attribute/Attribute.js';
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js';
import Block from '../../../org/bukkit/block/Block.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js';
import CommandSender$Spigot from '../../../org/bukkit/command/CommandSender$Spigot.js';
import Entity from './Entity.js';
import Entity$Spigot from './Entity$Spigot.js';
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../org/bukkit/EntityEffect.js';
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js';
import EntityType from './EntityType.js';
import EulerAngle from '../../../org/bukkit/util/EulerAngle.js';
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from './LivingEntity.js';
import Location from '../../../org/bukkit/Location.js';
import MemoryKey from './memory/MemoryKey.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js';
import Player from './Player.js';
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Pose from './Pose.js';
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js';
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js';
import Projectile from './Projectile.js';
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js';
import Server from '../../../org/bukkit/Server.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface ArmorStand extends LivingEntity {
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addPassenger(arg0: Entity): boolean;
    addPotionEffect(arg0: PotionEffect): boolean;
    addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
    addPotionEffects(arg0: Array<any>): boolean;
    addScoreboardTag(arg0: string): boolean;
    attack(arg0: Entity): void;
    damage(arg0: number): void;
    damage(arg0: number, arg1: Entity): void;
    eject(): boolean;
    getAbsorptionAmount(): number;
    getActivePotionEffects(): Array<PotionEffect>;
    getAttribute(arg0: Attribute): AttributeInstance;
    getBodyPose(): EulerAngle;
    getBoots(): ItemStack;
    getBoundingBox(): BoundingBox;
    getCanPickupItems(): boolean;
    getChestplate(): ItemStack;
    getCollidableExemptions(): any;
    getCustomName(): string;
    getEffectivePermissions(): any;
    getEntityId(): number;
    getEquipment(): EntityEquipment;
    getEyeHeight(): number;
    getEyeHeight(arg0: boolean): number;
    getEyeLocation(): Location;
    getFacing(): BlockFace;
    getFallDistance(): number;
    getFireTicks(): number;
    getHeadPose(): EulerAngle;
    getHealth(): number;
    getHeight(): number;
    getHelmet(): ItemStack;
    getItemInHand(): ItemStack;
    getKiller(): Player;
    getLastDamage(): number;
    getLastDamageCause(): EntityDamageEvent;
    getLastTwoTargetBlocks(arg0: any, arg1: number): Array<Block>;
    getLeashHolder(): Entity;
    getLeftArmPose(): EulerAngle;
    getLeftLegPose(): EulerAngle;
    getLeggings(): ItemStack;
    getLineOfSight(arg0: any, arg1: number): Array<Block>;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getMaxFireTicks(): number;
    getMaxHealth(): number;
    getMaximumAir(): number;
    getMaximumNoDamageTicks(): number;
    getMemory(arg0: MemoryKey): any;
    getMetadata(arg0: string): Array<MetadataValue>;
    getName(): string;
    getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
    getNoDamageTicks(): number;
    getPassenger(): Entity;
    getPassengers(): Array<Entity>;
    getPersistentDataContainer(): PersistentDataContainer;
    getPistonMoveReaction(): PistonMoveReaction;
    getPortalCooldown(): number;
    getPose(): Pose;
    getPotionEffect(arg0: PotionEffectType): PotionEffect;
    getRemainingAir(): number;
    getRemoveWhenFarAway(): boolean;
    getRightArmPose(): EulerAngle;
    getRightLegPose(): EulerAngle;
    getScoreboardTags(): any;
    getServer(): Server;
    getTargetBlock(arg0: any, arg1: number): Block;
    getTargetBlockExact(arg0: number): Block;
    getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
    getTicksLived(): number;
    getType(): EntityType;
    getUniqueId(): string;
    getVehicle(): Entity;
    getVelocity(): Vector;
    getWidth(): number;
    getWorld(): World;
    hasAI(): boolean;
    hasArms(): boolean;
    hasBasePlate(): boolean;
    hasGravity(): boolean;
    hasLineOfSight(arg0: Entity): boolean;
    hasMetadata(arg0: string): boolean;
    hasPermission(arg0: string): boolean;
    hasPermission(arg0: Permission): boolean;
    hasPotionEffect(arg0: PotionEffectType): boolean;
    isCollidable(): boolean;
    isCustomNameVisible(): boolean;
    isDead(): boolean;
    isEmpty(): boolean;
    isGliding(): boolean;
    isGlowing(): boolean;
    isInsideVehicle(): boolean;
    isInvulnerable(): boolean;
    isLeashed(): boolean;
    isMarker(): boolean;
    isOnGround(): boolean;
    isOp(): boolean;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    isPersistent(): boolean;
    isRiptiding(): boolean;
    isSilent(): boolean;
    isSleeping(): boolean;
    isSmall(): boolean;
    isSwimming(): boolean;
    isValid(): boolean;
    isVisible(): boolean;
    launchProjectile(arg0: any): Projectile;
    launchProjectile(arg0: any, arg1: Vector): Projectile;
    leaveVehicle(): boolean;
    playEffect(arg0: EntityEffect): void;
    rayTraceBlocks(arg0: number): RayTraceResult;
    rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
    recalculatePermissions(): void;
    remove(): void;
    removeAttachment(arg0: PermissionAttachment): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
    removePassenger(arg0: Entity): boolean;
    removePotionEffect(arg0: PotionEffectType): void;
    removeScoreboardTag(arg0: string): boolean;
    resetMaxHealth(): void;
    sendMessage(arg0: string): void;
    sendMessage(arg0: Array<string>): void;
    setAI(arg0: boolean): void;
    setAbsorptionAmount(arg0: number): void;
    setArms(arg0: boolean): void;
    setBasePlate(arg0: boolean): void;
    setBodyPose(arg0: EulerAngle): void;
    setBoots(arg0: ItemStack): void;
    setCanPickupItems(arg0: boolean): void;
    setChestplate(arg0: ItemStack): void;
    setCollidable(arg0: boolean): void;
    setCustomName(arg0: string): void;
    setCustomNameVisible(arg0: boolean): void;
    setFallDistance(arg0: number): void;
    setFireTicks(arg0: number): void;
    setGliding(arg0: boolean): void;
    setGlowing(arg0: boolean): void;
    setGravity(arg0: boolean): void;
    setHeadPose(arg0: EulerAngle): void;
    setHealth(arg0: number): void;
    setHelmet(arg0: ItemStack): void;
    setInvulnerable(arg0: boolean): void;
    setItemInHand(arg0: ItemStack): void;
    setLastDamage(arg0: number): void;
    setLastDamageCause(arg0: EntityDamageEvent): void;
    setLeashHolder(arg0: Entity): boolean;
    setLeftArmPose(arg0: EulerAngle): void;
    setLeftLegPose(arg0: EulerAngle): void;
    setLeggings(arg0: ItemStack): void;
    setMarker(arg0: boolean): void;
    setMaxHealth(arg0: number): void;
    setMaximumAir(arg0: number): void;
    setMaximumNoDamageTicks(arg0: number): void;
    setMemory(arg0: MemoryKey, arg1: any): void;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    setNoDamageTicks(arg0: number): void;
    setOp(arg0: boolean): void;
    setPassenger(arg0: Entity): boolean;
    setPersistent(arg0: boolean): void;
    setPortalCooldown(arg0: number): void;
    setRemainingAir(arg0: number): void;
    setRemoveWhenFarAway(arg0: boolean): void;
    setRightArmPose(arg0: EulerAngle): void;
    setRightLegPose(arg0: EulerAngle): void;
    setRotation(arg0: number, arg1: number): void;
    setSilent(arg0: boolean): void;
    setSmall(arg0: boolean): void;
    setSwimming(arg0: boolean): void;
    setTicksLived(arg0: number): void;
    setVelocity(arg0: Vector): void;
    setVisible(arg0: boolean): void;
    spigot(): CommandSender$Spigot;
    spigot(): Entity$Spigot;
    swingMainHand(): void;
    swingOffHand(): void;
    teleport(arg0: Location): boolean;
    teleport(arg0: Entity): boolean;
    teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
}
export default class ArmorStand {
    static get $javaClass(): any;
}