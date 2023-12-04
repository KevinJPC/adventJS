function findNaughtyStep (original: string, modified: string): string {
  const longerChain = Math.max(original.length, modified.length)

  for (let index = 0; index < longerChain; index++) {
    const currentOriginalStep = original[index]
    const currentModifiedStep = modified[index]

    if (currentOriginalStep !== currentModifiedStep) {
      const nextModifiedStep = modified[index + 1]
      if (currentOriginalStep === nextModifiedStep) { return currentModifiedStep }
      return currentOriginalStep
    }
  }
  return ''
}
const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// console.log(findNaughtyStep(original, modified)) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified)) // ''
