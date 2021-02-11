import {
  GuideSection, GuideBase, GuideSubview,
} from '../../types/GuideSection.js'
import RecipePage from './RecipePage.js'

export default class DefaultPage extends GuideBase implements GuideSection {
  name = 'Vap Guide'

  pageNumber = 0

  sections: GuideSection[] = [
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
    return this.context.icons.null
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
