
// SECTION 1: STRING MANIPULATION FUNCTIONS


//FUNCTION 1: Reverse a String
function reverseString(str) {
    let lettersArray = str.split('');
    let reversedArray = lettersArray.reverse();
    let reversedString = reversedArray.join('');

    return reversedString;
}
// example
console.log(reverseString("hello"));  // Prints: olleh


//FUNCTION 2: Count Characters in a String

function countCharacters(str) {
    let characterCount = str.length;
    return characterCount;
}
// example
console.log(countCharacters("hello"));        // Prints: 5


//FUNCTION 3: Capitalize First Letter of Each Word

function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    let capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        
        let firstLetter = currentWord[0].toUpperCase();
        
        let restOfWord = currentWord.slice(1).toLowerCase();
        
        let capitalizedWord = firstLetter + restOfWord;
        
        capitalizedWords.push(capitalizedWord);
    }
    
    let result = capitalizedWords.join(' ');
    
    return result;
}
// example
/* console.log(capitalizeWords("hello world"));    
 Prints: Hello World */




// SECTION 2: ARRAY FUNCTIONS


//FUNCTION 4.1: Find Maximum Value in Array

function findMax(numbers) {
    
    if (numbers.length === 0) {
        return "Array is empty";
    }
    
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    return max;
}
// example 
/* let myNumbers = [5, 2, 9, 1, 7];
console.log(findMax(myNumbers)); 
print 9 */



//FUNCTION 4.2: Find Minimum Value in Array

function findMin(numbers) {
    
    if (numbers.length === 0) {
        return "Array is empty";
    }
    
    let min = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
// example 
/* let myNumbers = [5, 2, 9, 1, 7];
console.log(findMin(myNumbers)); 
 print 1 */



//FUNCTION 5: Sum of All Array Elements

function sumArray(numbers) {
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        
        total = total + numbers[i];
        
    }
    return total;
}
// example
/* let myNumbers = [1, 2, 3, 4, 5];
console.log(sumArray(myNumbers)); 
print 15 */



//FUNCTION 6: Filter Array Based on Condition

function filterArray(numbers, condition) {
    let filtered = [];
    
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
            
        if (condition(currentNumber)) {
            filtered.push(currentNumber);
        }
    }
    return filtered;
}

function isOdd(number) {
    return number % 2 !== 0; 
}
// example 
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Odd numbers only:", filterArray(myNumbers, isOdd)); // [1, 3, 5, 7, 9]



// SECTION 3: MATHEMATICAL FUNCTIONS


//FUNCTION 7: Calculate Factorial

function factorial(n) {
    
    if (n < 0) {
        return "Factorial not defined for negative numbers";
    }
    
    if (n === 0 || n === 1) {
        return 1; 
    }
    
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i; 
    }
    return result;
}




//FUNCTION 8: Check if Number is Prime

function isPrime(number) {
    
    if (number <= 1) {
        return false; 
    }
    
    if (number <= 3) {
        return true;
    }
    
    if (number % 2 === 0) {
        return false; 
    }
    
    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}




//FUNCTION 9: Fibonacci Sequence

function fibonacci(n) {
    
    if (n <= 0) {
        return []; 
    }
    
    if (n === 1) {
        return [0]; 
    }
    
    if (n === 2) {
        return [0, 1]; 
    }
    
    let sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    return sequence;
}

