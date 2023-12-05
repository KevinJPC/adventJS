function decode (message: string): string {
  type NestedArray<T> = T | Array<NestedArray<T>>

  function format (m: string): [Array<NestedArray<string>>, number] {
    const arr: Array<NestedArray<string>> = []
    let index = 0

    while (index < m.length) {
      if (m[index] === '(') {
        const [newArr, newIndex] = format(m.substring(index + 1))
        arr.push(newArr)
        index = index + newIndex + 1
      } else if (m[index] === ')') {
        return [arr.flat().reverse(), index]
      } else {
        arr.push(m[index])
      }
      index++
    }
    return [arr.flat(), index]
  }
  const messageToArray = format(message)[0].join('')
  return messageToArray
}

const b = decode('sa(u(cla)atn)s')
console.log(b)
