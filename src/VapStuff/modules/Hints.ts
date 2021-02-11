import Player from '../../lib/org/bukkit/entity/Player.js'
import Location from '../../lib/org/bukkit/Location.js'
import Module from '../types/Module.js'

export const enum Hint {
  SIMPLE_ALCH_MADE,
  SIMPLE_ALCH_PREP,
  SIMPLE_ALCH_NO_PREP_CRAFT,
  SIMPLE_ALCH_LOW_HEAT,
  MAX_HINT,
}

export default class Hints extends Module {
  get name() { return 'Hints' }

  hintsShown: Map<Hint, UUID[]> = new Map()

  onEnable() {
    for (let i = 0; i < Hint.MAX_HINT; i += 1) {
      this.hintsShown.set(i, [])
    }
  }

  handleHint(player: Player, hint: Hint, handler: () => void, childHints?: Hint[]) {
    const shownTo = this.hintsShown.get(hint)
    const uuid = player.getUniqueId()
    if (!shownTo.includes(uuid)) {
      shownTo.push(uuid)
      if (childHints) {
        childHints.forEach(childHint => {
          const childShownTo = this.hintsShown.get(childHint)
          if (!childShownTo.includes(uuid)) childShownTo.push(uuid)
        })
      }
      handler()
    }
  }

  handleHintArea(
    area: Location,
    radius: number,
    hint: Hint,
    handler: (player: Player) => void,
    childHints?: Hint[],
  ) {
    const players = Array.from(this.plugin.server.getOnlinePlayers())
      .filter(player => player.getWorld() === area.getWorld()
          && player.getLocation().distanceSquared(area) < radius ** 2)
    players.forEach(player => {
      this.handleHint(player, hint, () => { handler(player) }, childHints)
    })
  }
}
