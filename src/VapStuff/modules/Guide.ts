import ItemBuilder from '../../lib/com/smc/utils/ItemBuilder.js'
import Bukkit from '../../lib/org/bukkit/Bukkit.js'
import CommandSender from '../../lib/org/bukkit/command/CommandSender.js'
import Player from '../../lib/org/bukkit/entity/Player.js'
import InventoryAction from '../../lib/org/bukkit/event/inventory/InventoryAction.js'
import InventoryClickEvent from '../../lib/org/bukkit/event/inventory/InventoryClickEvent.js'
import InventoryCloseEvent from '../../lib/org/bukkit/event/inventory/InventoryCloseEvent.js'
import InventoryType from '../../lib/org/bukkit/event/inventory/InventoryType.js'
import Inventory from '../../lib/org/bukkit/inventory/Inventory.js'
import ItemStack from '../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../lib/org/bukkit/Material.js'
import { CommandHandler, CommandRegister } from '../services/CommandManager.js'
import { Subscribe } from '../services/EventListener.js'
import { GuideSection, GuideView } from '../types/GuideSection.js'
import Module from '../types/Module.js'
import DefaultPage from './guide/DefaultPage.js'

@CommandRegister
@Subscribe
export default class Guide extends Module {
  get name() { return 'Vap Guide' }

  guideViews: Record<string, GuideView> = {}

  expectingClose: Record<string, boolean> = {}

  icons = {
    null: new ItemBuilder(Material.BLACK_STAINED_GLASS_PANE)
      .setDisplayName(' ')
      .build(),
    close: new ItemBuilder(Material.BARRIER)
      .setDisplayName(this.colorText('&cClose'))
      .build(),
    back: (name: string) => new ItemBuilder(Material.ARROW)
      .setDisplayName(this.colorText('&aGo Back'))
      .setLore([this.colorText(`&7To ${name}`)])
      .build(),
  }

  onEnable() {
  }

  onDisable() {
    for (const playerName of Object.keys(this.guideViews)) {
      const player = this.plugin.server.getPlayer(playerName)
      if (player) {
        player.closeInventory()
      }
    }
  }

  onInventoryClick(listener: any, event: InventoryClickEvent) {
    const human = event.getWhoClicked()
    const humanName = human.getName()
    const view = this.guideViews[humanName]
    if (view) {
      const slot = event.getRawSlot()
      if (slot < 54) {
        event.setCancelled(true)
        if (!Player.$isInstance(human)) return
        switch (slot) {
          case 48: {
            if (view.getParent) {
              this.guideViews[humanName] = view.getParent()
              this.updateView(human)
            } else {
              this.sendViewPress(human, view, slot)
            }
            break
          }
          case 49: {
            human.closeInventory()
            break
          }
          default: {
            this.sendViewPress(human, view, slot)
          }
        }
        return
      }
      const action = event.getAction()
      if (
        action === InventoryAction.COLLECT_TO_CURSOR
        || action === InventoryAction.HOTBAR_SWAP
        || action === InventoryAction.HOTBAR_MOVE_AND_READD
        || action === InventoryAction.MOVE_TO_OTHER_INVENTORY
      ) {
        event.setCancelled(true)
      }
    }
  }

  onInventoryClose(listener: any, event: InventoryCloseEvent) {
    const player = event.getPlayer()
    const playerName = player.getName()
    if (this.guideViews[playerName]) {
      if (this.expectingClose[playerName]) {
        delete this.expectingClose[playerName]
      } else {
        delete this.guideViews[playerName]
      }
    }
  }

  @CommandHandler('guide')
  onGuideCmd(sender: CommandSender) {
    if (Player.$isInstance(sender)) {
      const senderName = sender.getName()
      this.guideViews[senderName] = new DefaultPage(this, sender)
      this.updateView(sender)
      return true
    }
    sender.sendMessage(this.colorText('&cThis command can only be ran by players'))
    return false
  }

  updateView(player: Player) {
    const playerName = player.getName()
    if (this.guideViews[playerName]) {
      const guideInv = this.createInventoryFromView(this.guideViews[playerName])
      const currentInvType = player.getOpenInventory().getType()
      if (
        currentInvType !== InventoryType.CREATIVE
        && currentInvType !== InventoryType.CRAFTING
      ) {
        this.expectingClose[playerName] = true
      }
      player.openInventory(guideInv)
    }
  }

  createInventoryFromView(view: GuideView): Inventory {
    const inv = Bukkit.createInventory(null, 54, view.name)
    for (let i = 0; i < 54; i += 1) {
      inv.setItem(i, this.icons.null)
    }
    for (const subview of view.getSubviews()) {
      const [x, y, w, h] = subview.xywh
      const area = w * h
      for (let i = 0; i < area; i += 1) {
        const dx = i % w
        const dy = Math.floor(i / w)
        const slot = (y + dy) * 9 + x + dx
        if (subview.items[i]) {
          inv.setItem(slot, subview.items[i])
        } else {
          inv.setItem(slot, new ItemStack(Material.AIR))
        }
      }
    }
    if (view.getParent) {
      inv.setItem(48, this.icons.back(view.getParent().name))
    }
    if (this.isViewSection(view) && inv.getItem(4).isSimilar(this.icons.null)) {
      inv.setItem(4, view.getButton())
    }
    inv.setItem(49, this.icons.close)
    return inv
  }

  sendViewPress(player: Player, view: GuideView, slot: number) {
    const subviews = view.getSubviews()
    const slotX = slot % 9
    const slotY = Math.floor(slot / 9)
    for (const subview of subviews) {
      const [x, y, w, h] = subview.xywh
      const dx = slotX - x
      const dy = slotY - y
      if (
        0 <= dx && dx < w
        && 0 <= dy && dy < h
      ) {
        const index = dy * w + dx
        const newView = view.onSelect(subview.id, index)
        if (newView) {
          this.guideViews[player.getName()] = newView
          this.updateView(player)
        }
        break
      }
    }
  }

  isViewSection(view: GuideView): view is GuideSection {
    return Boolean((view as any).getButton)
  }
}
