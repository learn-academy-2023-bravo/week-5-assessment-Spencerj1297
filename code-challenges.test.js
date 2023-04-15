// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeCreator", () => {
  const secretCodeWord1 = "Lackadaisical"
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook"
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric"
  // Expected output: "3cc3ntr1c"

  it('Function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
    expect(codeCreator(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeCreator(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeCreator(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

//Puesdo Code
// Create the function codeCreator to match the function name in the test.
// Give the function one parameter called 'string' to match the data type of what is going to be passed in.
// Create a variable called array and store inside the parameter string with the .split method to break up the string into an array of letters (.split = accsesor).
// expect to see [L, a, c, k, a, d, a, i, s, i, c, a, l]
// use .map to iterate throught the array (will also return an array)
// inside the method create if else statements to change each vowel for its associated number in the test variables. Include the upper case letters to handle all occasions.
// return the new array with .join() to turn the array of charaters back into a string.

const codeCreator = (string) => {
  let array = string.split("")

  newArray = array.map((letter) => {
    if (letter === "a" || letter === "A") {
      return "4"
    } else if (letter === "e" || letter === "E") {
      return "3"
    } else if (letter === "i" || letter === "I") {
      return "1"
    } else if (letter === "o" || letter === "O") {
      return "0"
    } else {
      return letter
    }
  })
  return newArray.join("")
}

// PASS  ./code-challenges.test.js
// PASS  ./jest.test.js

// Test Suites: 2 passed, 2 total
// Tests:       2 passed, 2 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordChecker", () => {
  const fruitArray = [
    "Mango",
    "Cherry",
    "Apricot",
    "Blueberry",
    "Peach",
    "Kiwi",
  ]

  const letterA = "a"
  // Expected output: ["Mango", "Apricot", "Peach"]
  const letterE = "e"
  // Expected output: ["Cherry", "Blueberry", "Peach"]

  it("Function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(wordChecker(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ])
    expect(wordChecker(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ])
  })
})

// b) Create the function that makes the test pass.

// Puesdo Code
// Create the function wordChecker to match the test.
// Create a new variable to store the updated array.
// inside the varible use .filter for the original array.
// Make the value for .fitler 'word' to help with the flow.
// inside of .filter create if else statements to see if the 'word' has the parameter string.
// This can be done by using the .includes method
// if evalutaed as true return the word.
// Check for uppercase by doing the same thing in an else if statemnet but add .toUpperCase to alter the string and check for capitals.
// Also return word for this.
// after this add on an else that returns nothing.
// return the newArray.

const wordChecker = (array, string) => {
  const newArray = array.filter((word) => {
    if (word.includes(string)) {
      return word
    } else if (word.includes(string.toUpperCase())) {
      return word
    } else {
      return
    }
  })
  return newArray
}

// PASS  ./jest.test.js
// PASS  ./code-challenges.test.js

// Test Suites: 2 passed, 2 total
// Tests:       4 passed, 4 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("winWinChickenDin", () => {
  const hand1 = [5, 5, 5, 3, 3]
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4]
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4]
  // Expected output: false
  const hand4 = [7, 2, 7, 2, 7]
  // Expected output: true
  it('Function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.', () => {
    expect(winWinChickenDin(hand1)).toEqual(true)
    expect(winWinChickenDin(hand2)).toEqual(false)
    expect(winWinChickenDin(hand3)).toEqual(false)
    expect(winWinChickenDin(hand4)).toEqual(true)
  })
})

// Expected output: true

// b) Create the function that makes the test pass.

//Puesdo Code
// Make a function called winWinChickenDin to match the test.
// Give the function a parameter of array to match the data that will be passed in.
// Inside the function create and object called count.
// Create a for loop that will iterate through the numbers in the array.
// Compare to see if the number in the array exist within count.
// If it does add 1 to the count of that number in the object. If not use the logical or to give it a value of 1.
// after the loop create a new variable called outcome that will hold the object with its .values of count
// return outcome and use .includes to check if it has a pair of 2 && and 3

const winWinChickenDin = (array) => {
  const count = {}
  for (let i = 0; i < array.length; i++) {
    count[array[i]] = count[array[i]] + 1 || 1
  }
  const values = Object.values(count)
  return values.includes(2) && values.includes(3)
}

// PASS  ./jest.test.js
// PASS  ./code-challenges.test.js

// Test Suites: 2 passed, 2 total
// Tests:       6 passed, 6 total
