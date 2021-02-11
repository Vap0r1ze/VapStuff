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
