function drawGift (size: number, symbol: string): string {
  if (size === 1) return '#\n'

  const pound = '#'
  const space = ' '
  const breakLine = '\n'

  const faceWidth = size - 2

  const edgeLine = pound.repeat(size)
  const faceLine = symbol.repeat(faceWidth)

  const topLine = `${space.repeat(faceWidth + 1)}${edgeLine}${breakLine}`
  const bottomLine = `${edgeLine}${breakLine}`
  const middleLine = `${edgeLine}${faceLine}${pound}${breakLine}`

  const lines = []
  const frontFaceLine = `${pound}${faceLine}${pound}`

  for (const index of new Array(faceWidth).keys()) { // just for lower complexity
    const spaceBefore = space.repeat(faceWidth - index)
    const sideFaceLine = `${symbol.repeat(index)}${pound}`
    const faces = `${frontFaceLine}${sideFaceLine}`
    lines.push(`${spaceBefore}${faces}${breakLine}`)
  }

  const gift = [
    topLine,
    ...lines,
    middleLine,
    ...lines.map((line) => line.trimStart()).reverse(),
    bottomLine
  ].join('')

  return gift
}

console.log(drawGift(10, '%'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
