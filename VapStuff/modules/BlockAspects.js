"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventListener_js_1 = require("../services/EventListener.js");
const Module_js_1 = require("../types/Module.js");
const util_js_1 = require("../util.js");
let BlockAspects = class BlockAspects extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.aspects = {};
    }
    get name() { return 'Block Aspects'; }
    onEnable() {
        this.db = this.plugin.dbFactory.open('block-aspects');
    }
    onBlockPlace(listener, event) {
        const item = event.getItemInHand();
        const player = event.getPlayer();
        for (const [aspectId, aspect] of Object.entries(this.aspects)) {
            const aspectData = aspect.serializeItem(item, player);
            if (aspectData instanceof Error) {
                event.setCancelled(true);
                this.tellPlayer(player, aspectData.message);
            }
            else if (aspectData) {
                const where = event.getBlockPlaced().getLocation();
                this.db.data[util_js_1.serializeLocation(where)] = {
                    aspectId,
                    data: aspectData,
                };
                this.db.save();
                if (aspect.onPlace)
                    aspect.onPlace(aspectData, event);
                break;
            }
        }
    }
    onBlockBreak(listener, event) {
        const block = event.getBlock();
        const where = block.getLocation();
        const whereStr = util_js_1.serializeLocation(where);
        const aspectData = this.db.data[whereStr];
        if (aspectData) {
            const { aspectId } = aspectData;
            delete this.db.data[whereStr];
            this.db.save();
            const aspect = this.aspects[aspectId];
            event.setDropItems(false);
            event.setExpToDrop(0);
            const drop = aspect.createDrop(aspectData.data, event.getPlayer());
            if (drop) {
                where.getWorld().dropItemNaturally(where, drop);
            }
        }
    }
    onBlockPistonRetract(listener, event) {
        this.onBlockPistonRetractOrExtend(event);
    }
    onBlockPistonExtend(listener, event) {
        this.onBlockPistonRetractOrExtend(event);
    }
    onBlockPistonRetractOrExtend(event) {
        const newData = {};
        for (const block of Array.from(event.getBlocks())) {
            const where = block.getLocation();
            const aspectData = this.plugin.blockAspects.getBlockAspect(where);
            if (!aspectData)
                continue;
            const newWhere = block.getRelative(event.getDirection()).getLocation();
            const whereStr = util_js_1.serializeLocation(where);
            const newWhereStr = util_js_1.serializeLocation(newWhere);
            newData[newWhereStr] = this.db.data[whereStr];
            delete this.db.data[whereStr];
        }
        if (Object.keys(newData).length > 0) {
            Object.assign(this.db.data, newData);
            this.db.save();
        }
    }
    onEntityExplode(listener, event) {
        const blocks = Array.from(event.blockList());
        let stopYield = false;
        for (const block of blocks) {
            const where = block.getLocation();
            const whereStr = util_js_1.serializeLocation(where);
            const aspectData = this.db.data[whereStr];
            if (aspectData) {
                const aspect = this.aspects[aspectData.aspectId];
                if (aspect) {
                    const drop = aspect.createDrop(aspectData.data);
                    if (drop)
                        where.getWorld().dropItemNaturally(where, drop);
                    stopYield = true;
                }
                delete this.db.data[whereStr];
                this.db.save();
            }
        }
        if (stopYield)
            event.setYield(0);
    }
    // API
    getBlockAspect(where) {
        const blockWhere = where.getBlock().getLocation();
        return this.db.data[util_js_1.serializeLocation(blockWhere)] || null;
    }
    getMap() {
        const map = new Map();
        for (const [whereStr, aspectData] of Object.entries(this.db.data)) {
            const where = util_js_1.deserializeLocation(whereStr, this.plugin.server);
            map.set(where, aspectData);
        }
        return map;
    }
    filterMapById(aspectId) {
        const filteredMap = new Map();
        for (const [whereStr, aspectData] of Object.entries(this.db.data)) {
            if (aspectData.aspectId === aspectId) {
                const where = util_js_1.deserializeLocation(whereStr, this.plugin.server);
                filteredMap.set(where, aspectData);
            }
        }
        return filteredMap;
    }
    addAspect(aspectId, aspect) {
        this.aspects[aspectId] = aspect;
    }
    removeAspect(aspectId) {
        delete this.aspects[aspectId];
    }
};
BlockAspects = __decorate([
    EventListener_js_1.Subscribe
], BlockAspects);
exports.default = BlockAspects;
