function organizeGifts (gifts: string): string {
  const giftsToOrganize = gifts.matchAll(/([0-9]+)([a-z])/g)

  const GIFTS_PER_PALES = 50
  const GIFTS_PER_BOXES = 10

  let organizedGifts = ''
  for (const [, quantity, type] of giftsToOrganize) { // just for lower complexity
    let restQuantity = Number(quantity)

    const pales = Math.floor((restQuantity / GIFTS_PER_PALES))
    restQuantity -= pales * GIFTS_PER_PALES
    const boxes = Math.floor((restQuantity / GIFTS_PER_BOXES))
    restQuantity -= boxes * GIFTS_PER_BOXES

    const palesString = `[${type}]`.repeat(pales)
    const boxesString = `{${type}}`.repeat(boxes)
    const bagsString = `(${type.repeat(restQuantity)})`.replace('()', '')

    organizedGifts += `${palesString}${boxesString}${bagsString}`
  }

  return organizedGifts
}
const result1 = organizeGifts('76a11b')
console.log(result1)

// '[a]{a}{a}(aaaaaa){b}(b)'
