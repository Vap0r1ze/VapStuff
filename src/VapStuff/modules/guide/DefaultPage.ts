import ItemStack from '../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../lib/org/bukkit/Material.js'
import {
  GuideSection, GuideBase, GuideSubview,
} from '../../types/GuideSection.js'
import RecipePage from './RecipePage.js'

export default class DefaultPage extends GuideBase implements GuideSection {
  name = 'Vap Guide'

  pageNumber = 0

  private sections: GuideSection[] = [
    new RecipePage(this.context, this.player),
  ]

  getSubviews() {
    const sectionsView: GuideSubview = {
      id: 'sections',
      items: this.sections.map(page => page.getButton()),
      xywh: [4, 2, 1, 1],
    }
    return [sectionsView]
  }

  getButton() {
    return new ItemStack(Material.AIR)
  }

  onSelect(subviewId: string, index: number) {
    switch (subviewId) {
      case 'sections': {
        const section = this.sections[index]
        if (section) return section
        break
      }
      default: {
        break
      }
    }
    return null
  }
}
