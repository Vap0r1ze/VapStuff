import Player from '../../lib/org/bukkit/entity/Player.js'
import EntityDamageByEntityEvent from '../../lib/org/bukkit/event/entity/EntityDamageByEntityEvent.js'
import { Subscribe } from '../services/EventListener.js'
import Module from '../types/Module.js'

@Subscribe
export default class AntiCarter extends Module {
  onEntityDamageByEntity(listener: any, event: EntityDamageByEntityEvent) {
    const damager = event.getDamager()
    const victim = event.getEntity()
    if (Player.$isInstance(victim) && Player.$isInstance(damager)) {
      if (damager.getName() === 'Weeb_true' && victim.getName() === 'HamBapVap') {
        event.setCancelled(true)
        this.tellPlayer(damager, 'Nice try pal')
      }
    }
  }
}
