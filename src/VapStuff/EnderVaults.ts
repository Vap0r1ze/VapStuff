import Block from '../lib/org/bukkit/block/Block.js'
import BlockFace from '../lib/org/bukkit/block/BlockFace.js'
import EnderChest from '../lib/org/bukkit/block/EnderChest.js'
import DyeColor from '../lib/org/bukkit/DyeColor.js'
import Effect from '../lib/org/bukkit/Effect.js'
import BlockPlaceEvent from '../lib/org/bukkit/event/block/BlockPlaceEvent.js'
import ItemStack from '../lib/org/bukkit/inventory/ItemStack.js'
import Location from '../lib/org/bukkit/Location.js'
import Material from '../lib/org/bukkit/Material.js'
import Wool from '../lib/org/bukkit/material/Wool.js'
import Sound from '../lib/org/bukkit/Sound.js'

export default class EnderStorage {
  // private CREATE_PERMISSION = 'vapstuff.enderstorage.createvault'
  // private EDIT_PERMISSION = 'vapstuff.enderstorage.editvault'
  // private OPEN_PERMISSION = 'vapstuff.enderstorage.openvault'

  // onBlockPlace (listener: any, event: BlockPlaceEvent) {
  //   const carpet = event.getBlock()
  //   if (!this.isCarpet(carpet)) return
  //   const echest = carpet.getRelative(BlockFace.DOWN)
  //   if (!this.isEChest(echest)) return
  //   carpet.getWorld().playEffect(carpet.getLocation(), Effect.STEP_SOUND, carpet.getType())
  //   carpet.setType(Material.AIR)
  //   carpet.getWorld().playSound(carpet.getLocation(), Sound.BLOCK_WOOL_BREAK, 1, 1)
  //   this.initVault(echest)
  //   console.log(carpet.getData())
  // }

  // initVault (echest: Block) {}

  // isEChest (block: Block): boolean {
  //   if (block.getType() === Material.ENDER_CHEST) return true
  //   return false
  // }
  // isCarpet (block: Block): boolean {
  //   switch (block.getType()) {
  //     case Material.LIGHT_GRAY_CARPET:
  //     case Material.BLACK_CARPET:
  //     case Material.BLUE_CARPET:
  //     case Material.BROWN_CARPET:
  //     case Material.CYAN_CARPET:
  //     case Material.GRAY_CARPET:
  //     case Material.GREEN_CARPET:
  //     case Material.LIGHT_BLUE_CARPET:
  //     case Material.LIME_CARPET:
  //     case Material.MAGENTA_CARPET:
  //     case Material.ORANGE_CARPET:
  //     case Material.PINK_CARPET:
  //     case Material.PURPLE_CARPET:
  //     case Material.RED_CARPET:
  //     case Material.WHITE_CARPET:
  //     case Material.YELLOW_CARPET:
  //       return true
  //     default:
  //       return false
  //   }
  // }
}
