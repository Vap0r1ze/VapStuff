import Bukkit from '../lib/org/bukkit/Bukkit.js'
import Entity from '../lib/org/bukkit/entity/Entity.js'
import EntityType from '../lib/org/bukkit/entity/EntityType.js'
import Parrot from '../lib/org/bukkit/entity/Parrot.js'
import Player from '../lib/org/bukkit/entity/Player.js'
import EntitySpawnEvent from '../lib/org/bukkit/event/entity/EntitySpawnEvent.js'
import PlayerToggleSneakEvent from '../lib/org/bukkit/event/player/PlayerToggleSneakEvent.js'
import { Subscribe } from './EventListener.js'
import Module from './Module.js'

export const enum Shoulder {
  LEFT,
  RIGHT
}

@Subscribe
export default class ParrotSubmission extends Module {
  // private remountQueue: Record<UUID, Parrot[]> = {}

  // onPlayerToggleSneak (listener: any, event: PlayerToggleSneakEvent) {
  //   console.log(event)
  //   if (!event.isSneaking()) return
  //   const player = event.getPlayer()
  //   const where = player.getLocation().add(0, 1, 0)
  //   const leftShoulder = player.getShoulderEntityLeft()
  //   const rightShoulder = player.getShoulderEntityRight()
  //   const parrots: [Parrot, Shoulder][] = []

  //   if (this.isParrot(leftShoulder))
  //     parrots.push([leftShoulder, Shoulder.LEFT])
  //   if (this.isParrot(rightShoulder))
  //     parrots.push([rightShoulder, Shoulder.RIGHT])

  //   for (const [parrot, shoulder] of parrots) {
  //     const parrotData = this.getParrotData(parrot)
  //     const newParrot = this.spawnFromParrotData(where, parrotData)
  //     if (shoulder === Shoulder.LEFT) player.setShoulderEntityLeft(null)
  //     if (shoulder === Shoulder.RIGHT) player.setShoulderEntityRight(null)
  //   }
  // }
  // onEntitySpawn (listener: any, event: EntitySpawnEvent) {
  //   const parrot = event.getEntity()
  //   if (!this.isParrot(parrot)) return
  //   const owner = parrot.getOwner()
  //   if (!owner) return
  //   const ownerId = owner.getUniqueId()
  //   const player = this.plugin.server.getPlayer(ownerId)
  //   if (!player) return
  //   if (!player.isOnGround()) {
  //     const where = parrot.getLocation()
  //     event.setCancelled(true)
  //     if (!this.remountQueue[player.getUniqueId()]) this.remountQueue[player.getUniqueId()] = []
  //     this.remountQueue[player.getUniqueId()].push(parrot)
  //     console.log(`Queue: [${this.remountQueue[player.getUniqueId()].join(', ')}]`)
  //     this.plugin.server.getScheduler().scheduleSyncDelayedTask(
  //       this.plugin.context.getJavaPlugin(),
  //       () => {
  //         const queue = this.remountQueue[player.getUniqueId()]
  //         if (!queue) return
  //         console.log(`[Start Loop] Shoulders: [${player.getShoulderEntityLeft()}, ${player.getShoulderEntityRight()}]`)
  //         const openShoulders: Shoulder[] = []
  //         if (!player.getShoulderEntityLeft()) openShoulders.push(Shoulder.LEFT)
  //         if (!player.getShoulderEntityRight()) openShoulders.push(Shoulder.RIGHT)
  //         for (let i = 0; i < queue.length; i++) {
  //           const queued = queue[i]
  //           if (openShoulders.length > 0) {
  //             const openShoulder = openShoulders.shift()
  //             if (openShoulder === Shoulder.LEFT)
  //               player.setShoulderEntityLeft(queued)
  //             if (openShoulder === Shoulder.RIGHT)
  //               player.setShoulderEntityRight(queued)
  //           } else {
  //             const queuedData = this.getParrotData(queued)
  //             this.spawnFromParrotData(where, queuedData)
  //           }
  //           console.log(`[${i}] ${queued}`)
  //         }
  //         delete this.remountQueue[player.getUniqueId()]
  //       },
  //       5,
  //     )
  //   }
  // }

  // private isParrot (entity: Entity): entity is Parrot {
  //   return entity instanceof Parrot.$javaClass
  // }
}
