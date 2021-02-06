import Projectile from '../lib/org/bukkit/entity/Projectile.js';
import EntityShootBowEvent from '../lib/org/bukkit/event/entity/EntityShootBowEvent.js';
import Module from './Module.js'

export default class TracerArrows extends Module {
  onEntityShootBow (listener: any, event: EntityShootBowEvent) {
    const shooter = event.getEntity()
    if (!this.isPlayer(shooter)) return
    const proj = event.getProjectile()
    if (!this.isProjectile(proj))
    proj.getLocation()
  }

  isProjectile (entity): entity is Projectile {
    return entity instanceof Projectile.$javaClass
  }
}

