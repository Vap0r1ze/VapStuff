export function Array2D(w = 0, h = 0) {
  const arr2d = new Array(h)
  for (let i = 0; i < h; i += 1) {
    arr2d[i] = new Array(w)
  }
  return arr2d
}

export function hexChatColor(hex: string): string {
  return `\xA7x${[...hex].map(c => `\xA7${c}`).join('')}`
}

export function colorText(text: string): string {
  return text
    .replace(/&([0-9a-fklmnor])/g, '\xA7$1')
    .replace(/&#([0-9a-f]{6})/gi, (match, hex) => hexChatColor(hex))
    .replace(/&&/g, '&')
}

export function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1)
}

export function capitalizeWords(words: string): string {
  return words.split(' ').map(w => capitalize(w)).join(' ')
}
