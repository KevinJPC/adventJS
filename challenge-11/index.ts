function getIndexsForPalindrome (word: string): number[] | null {
  const isPalindrome = (wordToCheck: string[]): boolean => {
    return wordToCheck.join('') === [...wordToCheck].reverse().join('')
  }
  const wordArray = Array.from(word)

  if (isPalindrome(wordArray)) return []

  for (let firstIndex = 0; firstIndex < wordArray.length; firstIndex++) {
    for (let secondIndex = 0; secondIndex < wordArray.length; secondIndex++) {
      const wordToCheck = [...wordArray]

      const firstCharacter = wordToCheck[firstIndex]
      const secondCharacter = wordToCheck[secondIndex]

      wordToCheck[secondIndex] = firstCharacter
      wordToCheck[firstIndex] = secondCharacter

      if (isPalindrome(wordToCheck)) return [firstIndex, secondIndex]
    }
  }

  return null
}
// Test:
console.log(getIndexsForPalindrome('aaababa'))

// Expected:
// [
//   1,
//   3
// ]

// Actual:
// null
