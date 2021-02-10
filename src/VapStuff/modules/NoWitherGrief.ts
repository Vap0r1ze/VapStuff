import EntityType from '../../lib/org/bukkit/entity/EntityType.js'
import EntityExplodeEvent from '../../lib/org/bukkit/event/entity/EntityExplodeEvent.js'
import { Subscribe } from '../services/EventListener.js'
import Module from '../types/Module.js'

@Subscribe
export default class NoWitherGrief extends Module {
  get name() { return 'No Wither Grief' }

  onEntityExplode(listener: any, event: EntityExplodeEvent) {
    if (
      event.getEntityType() !== EntityType.WITHER
      && event.getEntityType() !== EntityType.WITHER_SKULL
    ) { return }
    event
      .getEntity()
      .getWorld()
      .createExplosion(event.getLocation(), 0)
    event.setCancelled(true)
  }
}
