function cyberReindeer (road: string, time: number): string[] {
  let roadWithoutReinder = road.replace('S', '.')
  const movements = [road]

  for (let index = 0; index < time - 1; index++) {
    if (index + 1 === 5) {
      roadWithoutReinder = roadWithoutReinder.replaceAll('|', '*')
    }

    const currentRoadState = movements[index]
    const reindeerPosition = currentRoadState.indexOf('S')
    let newRoadState = currentRoadState

    if (roadWithoutReinder[reindeerPosition + 1] !== '|') {
      newRoadState = [
        roadWithoutReinder.substring(0, reindeerPosition + 1),
        'S',
        roadWithoutReinder.substring(reindeerPosition + 2)
      ].join('')
    }

    movements.push(newRoadState)
  }

  return movements
}

const road = 'S..|...|..'
const time = 10
const result = cyberReindeer(road, time)
console.log(result)
