function decode (message: string): string {
  let newMessage = ''
  let index = 0

  while (index < message.length) {
    const char = message[index]
    newMessage += char
    if (char === '(') {
      const decodedMessage = decode(message.substring(index + 1))
      newMessage += decodedMessage
      index = index + decodedMessage.length
    } else if (char === ')') {
      return newMessage.split('').reverse().join('')
    }
    index++
  }
  return newMessage.replaceAll(/\(|\)/g, '')
}

const b = decode('sa(u(cla)atn)s')
console.log(b)
