function maxDistance (movements: string): number {
  const initialValue = { '<': 0, '>': 0, '*': 0 }
  const charactersCount = Array.from(movements).reduce((acc, char) => {
    return { ...acc, [char]: acc[char as keyof typeof acc] + 1 }
  }, initialValue)

  const max = Math.max(charactersCount['<'], charactersCount['>'])
  const min = Math.min(charactersCount['<'], charactersCount['>'])
  const distance = max - min + charactersCount['*']

  return distance
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// console.log(result3) // -> 5
