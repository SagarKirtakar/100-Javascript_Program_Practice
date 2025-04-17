// Exercise 1:
// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100


// const isEqualTo100 = (num1,num2) => num1 === 100 || num2 === 100;

// console.log(isEqualTo100(100,100));
// console.log(isEqualTo100(10,100));
// console.log(isEqualTo100(50,50));
// console.log(isEqualTo100(50,100));

// function isEqualTo100 (a,b) {
// 	if (a===100 || (a + b) ===100) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isEqualTo100(100,0));
// console.log(isEqualTo100(10,0));
// console.log(isEqualTo100(100,100));
// console.log(isEqualTo100(50,50));
// console.log(isEqualTo100(1,90));

// Exercise 2:
// Write a JavaScript exercise to get the extension of a filename.

// const getFileExtension = (str) => str.slice
// (str.lastIndexOf('.'));

// console.log(getFileExtension('index.js'));
// console.log(getFileExtension('webpack.config.html'));

// Exercise 3:
// Write a JavaScript program to replace every character in a given string with the character
// following it in the alphabet

// const moveCharsForward = (str) => 
// 	str
// 			.split('')
// 			.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
// 			.join('');

// 			console.log(moveCharsForward('abcd'));


// Exercise 4:
// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

