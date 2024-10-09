
const str = "nikhil the great"
let words = ""
let sentence = ""
let reversedWord = ""

function reverseString(str) {

	for (let i = str.length - 1; i >= 0; i--) {
		words += str[i]
		if (str[i] === " " || i === 0) {
			for (let j = words.length - 1; j >= 0; j--) {
				reversedWord += words[j]
			}
			sentence += reversedWord
			reversedWord = ""
			words = ""
		}
	}

}
reverseString(str)
console.log(sentence, 'sentence');

