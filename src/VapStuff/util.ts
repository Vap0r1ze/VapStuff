import Location from '../lib/org/bukkit/Location.js'
import Server from '../lib/org/bukkit/Server.js'

// Data Structure
export function Array2D(w = 0, h = 0) {
  const arr2d = new Array(h)
  for (let i = 0; i < h; i += 1) {
    arr2d[i] = new Array(w)
  }
  return arr2d
}

// Text
export function hexChatColor(hex: string): string {
  return `\xA7x${[...hex].map(c => `\xA7${c}`).join('')}`
}
export function colorText(text: string): string {
  return text
    .replace(/&([0-9a-fklmnor])/g, '\xA7$1')
    .replace(/&#([0-9a-f]{6})/gi, (match, hex) => hexChatColor(hex))
    .replace(/&&/g, '&')
}
export function colorStrip(text: string): string {
  return text
    .replace(/\xA7{2}/g, '\x00')
    .replace(/\xA7x(\xA7[0-9a-f]){6}/gi, '')
    .replace(/\xA7([0-9a-fklmnor])/gi, '')
    // eslint-disable-next-line no-control-regex
    .replace(/\x00/g, '\xA7')
}
export function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1)
}
export function capitalizeWords(words: string): string {
  return words.split(' ').map(w => capitalize(w)).join(' ')
}
export function serializeLocation(where: Location) {
  return `${where.getWorld().getName()},${where.getBlockX()},${where.getBlockY()},${where.getBlockZ()}`
}
export function deserializeLocation(whereStr: string, server: Server) {
  const [worldName, x, y, z] = whereStr.split(',')
  const world = server.getWorld(worldName)
  return new Location(world, +x, +y, +z)
}
export function getDeltasFromTaxicabRadius(radius: number) {
  const deltas: [number, number, number][] = []
  for (let dy = -radius; dy <= radius; dy += 1) {
    const layerRadius = radius - Math.abs(dy)
    for (let dz = -layerRadius; dz <= layerRadius; dz += 1) {
      for (let dx = Math.abs(dz) - layerRadius; dx <= layerRadius - Math.abs(dz); dx += 1) {
        deltas.push([dx, dy, dz])
      }
    }
  }
  return deltas
}
