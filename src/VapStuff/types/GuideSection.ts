import Player from '../../lib/org/bukkit/entity/Player.js'
import ItemStack from '../../lib/org/bukkit/inventory/ItemStack.js'

export interface GuideSubview {
  id: string;
  items: ItemStack[];
  xywh: [number, number, number, number];
}

export interface GuideView {
  name: string;
  pageNumber: number;
  getSubviews: () => GuideSubview[];
  onSelect: (subviewId: string, index: number) => GuideView | void;
  getParent?: () => GuideView;
}

export interface GuideSection extends GuideView, GuideBase {
  getButton: () => ItemStack;
}

export class GuideBase {
  context: import('../modules/Guide').default

  player: Player

  constructor(
    context: import('../modules/Guide').default,
    player: Player,
  ) {
    this.context = context
    this.player = player
  }
}
