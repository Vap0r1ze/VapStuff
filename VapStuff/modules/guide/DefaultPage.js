"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemStack_js_1 = require("../../../lib/org/bukkit/inventory/ItemStack.js");
const Material_js_1 = require("../../../lib/org/bukkit/Material.js");
const GuideSection_js_1 = require("../../types/GuideSection.js");
const RecipePage_js_1 = require("./RecipePage.js");
class DefaultPage extends GuideSection_js_1.GuideBase {
    constructor() {
        super(...arguments);
        this.name = 'Vap Guide';
        this.pageNumber = 0;
        this.sections = [
            new RecipePage_js_1.default(this.context, this.player),
        ];
    }
    getSubviews() {
        const sectionsView = {
            id: 'sections',
            items: this.sections.map(page => page.getButton()),
            xywh: [4, 2, 1, 1],
        };
        return [sectionsView];
    }
    getButton() {
        return new ItemStack_js_1.default(Material_js_1.default.AIR);
    }
    onSelect(subviewId, index) {
        switch (subviewId) {
            case 'sections': {
                const section = this.sections[index];
                if (section)
                    return section;
                break;
            }
            default: {
                break;
            }
        }
        return null;
    }
}
exports.default = DefaultPage;
