function createChristmasTree (ornaments: string, height: number): string {
  const SPACE = ' '
  const BREAK_LINE = '\n'
  const TRUNK = '|'

  const getNextLine = (fromIndex: number, num: number): { line: string, nextIndex: number } => {
    const line = []
    while (num !== 0) {
      line.push(ornaments[fromIndex % ornaments.length])
      fromIndex++
      num--
    }

    return { line: line.join(SPACE), nextIndex: fromIndex }
  }

  let three = ''
  let nextCharacterIndex = 0

  // do not do at home
  for (const index of new Array(height).keys()) {
    const spaceBefore = SPACE.repeat(height - index - 1)

    const { nextIndex, line } = getNextLine(nextCharacterIndex, index + 1)

    three += `${spaceBefore}${line}${BREAK_LINE}`

    nextCharacterIndex = nextIndex
  }

  const spaceBeforeTrunk = SPACE.repeat(height - 1)
  const trunk = `${spaceBeforeTrunk}${TRUNK}${BREAK_LINE}`

  return three.concat(trunk)
}

console.log(createChristmasTree('kevin', 15))
