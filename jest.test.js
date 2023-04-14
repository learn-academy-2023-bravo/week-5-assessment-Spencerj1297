
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
  // inside the method create if else statements to change each vowel for its associated number in the test variables.
  // return the new array with .join() to turn the array of charaters back into a string.
  
  const codeCreator = (string) => {
    let array = string.split("")
  
     newArray = array.map((letter) => {
      if (letter === "a" || letter === "A" ) {
        return '4'
      } else if (letter === "e" || letter === "E") {
        return '3'
      } else if (letter === "i" || letter === "I") {
        return '1'
      } else if (letter === "o" || letter === "O") {
        return '0'
      }else {
        return letter
      }
    })
    return newArray.join('')
  }








  describe("wordChecker", () => {

    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    it('Function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter', () => {
      expect(wordChecker(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(wordChecker(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

// b) Create the function that makes the test pass.
// Create the function wordChecker to match the test.
// 

const wordChecker = (array, string) => {
    const newArray = array.filter((word) => {
        if(word.includes(string)){
            return word 
        }else if (word.includes(string.toUpperCase())){
            return word
        }else{
            return
        }
    }) 
    return newArray
}