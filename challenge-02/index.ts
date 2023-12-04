function manufacture (gifts: string[], materials: string): string[] {
  const charactersMaterials = new Set(materials)
  const giftCanBeMade = gifts.filter(gift => {
    const charactersGifts = new Set(gift)
    for (const characterGift of charactersGifts) {
      if (!charactersMaterials.has(characterGift)) return false
    }
    return true
  })
  return giftCanBeMade
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const giftCanBeMade = manufacture(gifts, materials) // ["tren", "oso"]
console.log(giftCanBeMade)

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// manufacture(gifts, materials) // []
