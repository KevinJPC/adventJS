function decode (message: string): string {
  let newM = ''
  let index = 0

  while (index < message.length) {
    const char = message[index]
    newM += char
    if (char === '(') {
      const mes = decode(message.substring(index + 1))
      newM += mes
      index = index + mes.length
    } else if (char === ')') {
      // arr.push(m[index])
      return newM.split('').reverse().join('')
    }
    index++
  }
  return newM.replaceAll(/\(|\)/g, '')
}

const b = decode('sa(u(cla)atn)s')
console.log(b)
