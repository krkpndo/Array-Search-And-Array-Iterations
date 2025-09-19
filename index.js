/*

    ARRAY SEARCH

    indexOf()
    - returns the index position of an element

    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    let position = fruits.indexOf("Apple");
    console.log(position); // 0


    lastIndexOf()
    - returns the index of the last occurence of an element

    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    let position = fruits.lastIndexOf("Apple");
    console.log(position); // 2


    includes()
    - checks if an array contains the certain element

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.includes("Mango"); // true


    find()
    - returns the first element that satisfies the function's condition
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.find(num => num > 10);
    console.log(first);
    Note: Argument is a function


    findIndex()
    - returns the index of the first element that satisfies the function's condition


    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.findIndex(x => x > 18);
    console.log(first);
    Note: Argument is a function


    findLast()
    - returns the last element that satisfies the function's condition
    const temp = [27, 28, 30, 40, 42, 35, 30];
    let high = temp.findLast(element => element > 29);
    console.log(high);


    findLastIndex()
    -  finds the index of the last element that satisfies a condition
    const temp = [27, 28, 30, 40, 42, 35, 30];
    let pos = temp.findLastIndex(x => x > 40);
    console.log(pos);
   
*/

/*
    ARRAY ITERATIONS

    forEach()
    - method calls a function (a callback function) once for each array element.

    const numArr1 = [1, 2, 3, 4, 5];
    numArr1.forEach((num, index, arr) => {
        arr[index] = num * 2;
    });
    console.log(numArr1);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNums = [];

    numbers.forEach((num) => {

        if (num % 2 == 0) {
            evenNums.push(num)
        }
    });
    console.log(evenNums);


    map()
    - method creates a new array by performing a function on each array element.
    - method does not execute the function for array elements without values.
    - method does not change the original array.

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const doubledNum = numbers.map((num) => num * 2);

    console.log(numbers);
    console.log(doubledNum);


    flatMap()
    - method first maps all elements of an array and then creates a new array by flattening the array.
    const myArr = [1, 2, 3, 4, 5, 6];
    const newArr = myArr.flatMap(x => [x, x * 10]);
    console.log(myArr);
    console.log(newArr);


    filter()
    - method creates a new array with array elements that pass a test.
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNums = numbers.filter((num) => num % 2 == 0);

    console.log(numbers);
    console.log(evenNums);

    reduce()
    - method runs a function on each array element to produce a single value.
    - method works from left-to-right in the array
    Note: method does not reduce the original array.

    Syntax: 
    array.reduce((accumulator, current_value) => accumulator + current_value, starting_value(optional))

    const numbers = [45, 4, 9, 16, 25];

    const sum = numbers.reduce((total, num) => total + num, 1);
    console.log(sum);


    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

    const counts = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
    }, {});

    console.log(counts);


    reduceRight()
    - method runs a function on each array element to produce a single value.
    -  works from right-to-left in the array

    const numArr = [45, 4, 9, 16, 25];

    const difference1 = numArr.reduce((total, num) => total - num);
    console.log(difference1); // -9

    const difference2 = numArr.reduceRight((total, num) => total - num);
    console.log(difference2); // -49


    every()
    - method checks if all array values pass a test.

    const numbers = [45, 4, 9, 19, 25];
    let allOver18 = numbers.every((num) => num > 2);

    console.log(allOver18);

    function passwordChecker(password) {

        let modPassword = password.split('');


        let isValidPassword = modPassword.every((letter) => /[A-Za-z0-9]/.test(letter));
        let didLengthPassed = password.length >= 8;
        
        return isValidPassword && didLengthPassed ? 'Strong Password' : 'Weak Password';
    }

    console.log(passwordChecker('Kirk05'));


    some()
    - method checks if some array values pass a test.

    const numbers = [45, 4, 9, 16, 25];
    let someOver18 = numbers.some((num) => num <= 4);
    console.log(someOver18);


    from()
    - method returns an Array object from any iterable object and any object with length property
    let text = "ABCDEFG";
    const stringArr = Array.from(text);
    console.log(stringArr);

    with()
    - method as a safe way to update elements in an array without altering the original array.
    const months = ["Januar", "Februar", "Mar", "April"];
    const myMonths1 = months.with(2, "March");
    const myMonths2 = months.with(0, "January");

    console.log(myMonths1);
    console.log(myMonths2);

    spread operator (...)
    
    // Combine arrays with spread operator
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const arr5 = [10, 11, 12, 13];
    const arr4 = [...arr1, ...arr2, ...arr3, ...arr5];
    console.log(arr4);

    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "Des"];

    // Reassigning using spread operator
    const year = [...q1];
    console.log(year);


    // Finding max/min number in an array using Math function

    console.log(Math.min.apply(null, arr1)); // getting min number
    console.log(Math.max.apply(null, arr1));// getting max number


    // Finding max/min number in an array using math function and spread operator
    let minValue = Math.min(...arr1);
    let maxValue = Math.max(...arr1);

    console.log(minValue);
    console.log(maxValue);

    rest()
    let a, rest;
    const arr1 = [1,2,3,4,5];

    [a, b, ...rest] = arr1;

    console.log(a);
    console.log(b);
    console.log(rest);
*/

/*

    ARROW FUNCTIONS

    
        NORMAL FUNCTION
        function greet(name) {
            console.log(`Hello ${name}`);   
        }
        greet('Kirk');


        ARROW FUNCTION
        const greet = (name, age) => `I am ${name} and I am ${age} years old`;
        console.log(greet('Kirk', 26));

        const ageChecker = (age) => {
            if (age < 10) {
                return 'Child';
            } else {
                return 'Adult';
            }
        };
        console.log(ageChecker(11));
*/

/*
    // WHILE LOOP

    Syntax:
    while (condition) {
        // code to execute
    }

    function randNumGenerator() {
    return Math.floor(Math.random() * 5 + 1);
}

    let inputNum = 3;
    let randNum = randNumGenerator();

    while (inputNum != randNum) {
        randNum = randNumGenerator();
        console.log('I am inside a loop');
        
    }

    console.log('I escaped the loop');

*/

/*

    // While-Loop
    - executes the code block until a given condition is satisfied


    // WHILE-LOOP Examples

    let myNum = Math.floor(Math.random() * 10);
    let input = prompt('Guess my number: ');

    while (input != myNum) {

        let isWrong = input != myNum;
        let isRight = input == myNum;
        if (isRight) {
            break;

        } else if (isWrong) {

            alert('Wrong guess');
            input = prompt('Guess my number: ');
        }
    }

    alert('Correct!');


    // Slot Machine Game

    console.log(`****** SLOT MACHINE GAME ******`);
    console.log(' '.repeat(10));


    let options = ['*', '&', '#']
    let rollCounter = 0;

    isRunning = true;

    while (isRunning) {
        let char1 = options[Math.floor(Math.random() * 3)];
        let char2 = options[Math.floor(Math.random() * 3)];
        let char3 = options[Math.floor(Math.random() * 3)];

        if (char1 != char2 || char2 != char3 || char3 != char1) {
            rollCounter++;
            console.log(`|  ${char1}  |  ${char2}  |  ${char3}  |`);
            console.log('You lose');
            console.log('Rerolling...');
            console.log(' '.repeat(10));

        } else {
            console.log('You win');
            console.log(`|  ${char1}  |  ${char2}  |  ${char3}  |`);
            console.log(' '.repeat(10));
            console.log(`Number of rolls: ${rollCounter}`);
            isRunning = false;
        }
    }

    let num = 0;

    while (num < 10) {
        console.log(`My value is currently: ${num}`);
        num++; // 10
    }

    console.log(`I am now ${num}`);

    let evenNumArr = [];

    while (evenNumArr.length < 10) {
        let arrElem = prompt('Enter an array element: ');
        evenNumArr.push(arrElem);
    }

    console.log(`I now have ${evenNumArr.length} elements.`);
    console.log(`Array: ${evenNumArr}`);

    // DO-WHILE LOOP
    - executes the code block before checking the condition to satisfy


    let num = 1;

    do {
        num *= 2;
        console.log(num);

    } while(num < 50);

    console.log(`${num} is now greater than 50`);

*/

/*

    // var is not block-scoped
    {  var num = 10; }


    console.log(num); // scoping


    // let/const is block-scoped
    {
        let num1 = 15;
        const num2 = 16;

        console.log(num1);
        console.log(num2);
    }

*/

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// ARRAY METHODS

/*
1. Using an array method, check if the 'stars' array consists the 'Capella' star. If true, print the star's index. Otherwise, print your favorite star.
*/

    // const stars = ['Sirius', 'Betelgeuse', 'Rigel', 'Vega', 'Aldebaran', 'Polaris', 'Capella', 'Altair'];
    
    // if (stars.includes('Capella')) {
    //     console.log(stars.indexOf('Capella'));
    // } else {
    //     console.log('My favorite star is Vega!')
    // }

/*
2. Using an array method, check if the 'greekGods' array consists 'Hypnos'. If true, print the index of the the element. If there are two occuring elements on the array, print both indices. Print your favorite greek God otherwise.
*/

    // const greekGods = ['Zeus', 'Hypnos', 'Poseidon', 'Hades', 'Athena', 'Ares', 'Hera', 'Hermes', 'Hypnos', 'Aphrodite'];

    // let found = false;
    // let elementsFound = 0;

    // for (let i = 0; i < greekGods.length; i++) {
    //     if (greekGods[i] == 'Hypnos') {
    //         found = true;
    //         elementsFound++;
    //     }
    // }

    // if (elementsFound > 1) {
    //     let firstIndex = greekGods.findIndex(element => element == 'Hypnos');
    //     console.log('Hypnos is at index',firstIndex);

    //     let lastIndex = greekGods.findLastIndex( element => element == 'Hypnos');
    //     console.log('Hypnos is at index',lastIndex);
        
    // }

    // // Alternative

    // if (elementsFound > 1) {
    //     let firstIndex = greekGods.indexOf('Hypnos');
    //     console.log('Hypnos is at index',firstIndex);

    //     let lastIndex = greekGods.lastIndexOf('Hypnos');
    //     console.log('Hypnos is at index',lastIndex);
        
    // }

    // if (found == false) {
    //     console.log('My favorite Greek Goddess is Athena');
    // }

/*
3. Using an array method, find the first element that is both divisible by 3 and 5 then return its index.
*/

    // const numbers = [1, 3, 4, 6, 8, 10, 11, 13, 15, 17, 20, 21, 23];

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
    //         console.log(i);
    //     }
    // }

    // let num1 = numbers.find(element => element % 3 == 0 && element % 5 == 0);
    // let num1Index = numbers.findIndex(element => element % 3 == 0 && element % 5 == 0);

    // console.log(num1);
    // console.log(num1Index);

/*
4. Using the same array, find the last element that is divisible by 2.
*/

    // const numbers = [1, 3, 4, 6, 8, 10, 11, 13, 15, 17, 20, 21, 23];

    // let lastEven = 0;

    // for (let i = numbers.length; i >= 0; i--) {
    
    //     if (numbers[i] % 2 == 0) {
    //     lastEven = numbers[i];
    //     break;

    // }
    // }

    // console.log("Last even number is", lastEven);

    // let lastEven = numbers.findLast(element => element % 2 == 0);
    // console.log(lastEven);

/*
5. Using the 'dogs' array, use an array method to find:
    - the element written in uppercase
    - the element written in lowercase
    - the element written in combination of uppercase and lowercase
    Clue #1: Gagamit ng string method :)
    Clue #2: Need mo ng regex para ma-filter kung sino yung written in uppercase and lowercase. Pwede mag-search :)
*/
// NOTE: Remember pag array iteration method ang gagamitin, mag-iiterate siya sa bawat elements. Oki?

    // const dogs = ['DaLmAtIaN', 'pomeranian', 'BULLDOG', ]

    // lowercase regex - /^[a-z]+$/
    // combination of uppercase and lowercase - /^[a-zA-Z]+$/

    // let isInUppercase = dogs.find(element => /^[A-Z]+$/.test(element));
    // let isInLowercase = dogs.find(element => /^[a-z]+$/.test(element));
    // let isInBoth = dogs.find(element => /^[a-zA-Z]+$/.test(element)); 

    // console.log(isInUppercase);
    // console.log(isInLowercase);
    // console.log(isInBoth);
    

/*
6. Using the 'names' array. Print every elements in uppercase.
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];
    // const newArr = [];

    // names.forEach(function(name) {

    //     newArr.push(name.toUpperCase());

    // });

    // console.log(newArr);

/*
7. Using the 'names' array. Print every name in reverse.
Note: Ganto ahhh => ['nahtE', 'sucraM', 'nailuJ', 'haoN', 'leumaS'] :P
Clue: Gagamit ng array method then sa loob, for-loop or baka may maisip ka pa na mas madali :)
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];
    // const newArr = [];

    // names.forEach(function(name) {

    //     let reversed = name.split('').reverse().join('');

    //     newArr.push(reversed);
    // });

    // console.log(newArr);

/*
8. Using the same array, print the elements' length.
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];
    // const lengthOfEach = [];

    // names.forEach(function (name) {
    //     lengthOfEach.push(name.length);
    // })

    // console.log(lengthOfEach);

/*
9. Using the 'names' array, replace the original elements with the same elements spelt in lowercase.
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];

    // names.forEach((element, index) => {
    //     names[index] = element.toLowerCase();
    // })

    // console.log(names);

/*
10. Using the 'names' array, create a new array with the same elements spelt in reverse.
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];

    // const newArr = names.map(element => element.split('').reverse().join(''));

    // console.log(newArr);

/*
11. Using the 'names' array, create a new array with the length of each element.
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];

    // const newArr = names.map(element => element.length);
    // console.log(newArr);

/*
12. Using the 'names' array, return an array with elements less than 5 characters.
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];

    // let shortNames = names.filter(element => element.length < 5);

    // console.log(shortNames);

/*
13. Using an array method, find the largest and smallest value in array 'numbers1'.
*/

    // const numbers1 = [10, 32, 8, 29, 56, 92, 45];

    // let smallestNum = Math.min(...numbers1);
    // let largestNum = Math.max(...numbers1);

    // console.log(`The smallest num is ${smallestNum} and the largest num is ${largestNum}`);

/*
14. Using an array method, print an array that consists of the elements in the second index to the last index.
*/

    // const names = ['Ethan', 'Marcus', 'Kirk', 'Julian', 'Noah', 'Samuel'];

    // [a, b, ...rest] = names;

    // console.log(rest);


/*
15. Using the 'new_numbers' array, use an array method to get all numbers between 1 and 9.
*/

    // const new_numbers = [3, 8, 12, 5, 18, 7, 25, 14, 30, 9, 22, 1];

    // let between = new_numbers.filter(element => element > 1 && element < 9);

    // console.log(between);

/*
16. Using the 'words' array, use an array method to get all words that begin with vowels.
Clue: Combination of array method and string method :)
*/

    // const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'guitar', 'house', 'ice', 'jungle'];

    // const vowels = ['a', 'e', 'i', 'o', 'u'];

    // let startsWithVowel = words.filter((word) => {

    //     let firstLetter = word.charAt(0).toLowerCase();

    //     return vowels.includes(firstLetter);
    // });

    // console.log(startsWithVowel);

/*
17. Using the 'words' array, use an array method to get all words that begin with 'e'.
Clue: Combination of array method and string method :)
*/

    // const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'guitar', 'house', 'ice', 'jungle'];

    // const startsWithE = words.filter((word) => {
    //     return /^e/.test(word);
    // });

    // console.log(startsWithE);

/*
18. Using the 'words' array, use an array method to check if all elements have 4 characters.
*/

    // const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'guitar', 'house', 'ice', 'jungle'];

    // const allFourChars = words.every((word) => {
    //     return word.length == 4;
    // });

    // console.log(allFourChars);

/*
19. Using an array method, check if elements of 'cosmic1' are all in uppercase.
*/
    
    // const cosmic1 = ['SUN', 'MOON', 'STAR'];

    // function allUppercase(arr) {
    //     return arr.every(function(word) {
    //         test = /[a-z]/.test(word)
            
    //         if (test == true) {
    //             return false;
    //         } else {
    //             return true;
    //         };
    //     });
    // }

    // let isInUpperCase = cosmic1.every((element) => /^[A-Z]+$/.test(element));

    // console.log("cosmic1:", isInUpperCase);


/*
20. Using an array method, check if elements of 'cosmic2' are all in lowercase.
*/

    // const cosmic2 = ['planet', 'galaxy', 'universe'];

    // function allLowercase(arr) {
    //     return arr.every(function(word) {
    //         test = /^[a-z]+$/.test(word)
            
    //         if (test == false) {
    //             return false;
    //         } else {
    //             return true;
    //         };
    //     });
    // }

    // console.log(allLowercase(cosmic2));
/*
21. Using an array method, check if at least one of the elements 'cosmic3' have a vowel.
*/

    // const cosmic3 = ['lght', 'drk', 'strdst'];

    // function hasVowel(arr) {
    // return arr.some(function(word) {
    //     test = /[a,e,i,o,u]/.test(word)
        
    //     if (test == false) {
    //         return false;
    //     } else {
    //         return true;
    //     };
    // });
    // }

    // console.log(hasVowel(cosmic3));

/*
22. Using an array method, concatenate all the elements of 'words1'.
Clue: Gagamit ng reduce() method
*/

    // const words1 = ['hello', 'world', 'javascript', 'is', 'awesome'];

    // let allElements = words1.reduce((acc, curr) => {
    //     return acc + (" ") + curr
    // })

    // console.log(allElements);
    

/*
23. Using an array method, find the total characters of the elements of 'words1'.
Clue: Gagamit ng reduce() method
*/

    // const words1 = ['hello', 'world', 'javascript', 'is', 'awesome'];

    // let totalChars = words1.reduce(function (acc, curr) {
    //     return acc + curr.length;
    // }, 0);

    // console.log(totalChars);

/*
24. Using an array method, concatenate all the elements of 'words1' starting from the last index.
*/

    // const words1 = ['hello', 'world', 'javascript', 'is', 'awesome'];

    // let totalChars = words1.reduceRight(function (acc, curr) {
    //     return acc + (' ') + curr;
    // });

    // console.log(totalChars);

/*
25. Create an array using the characters of this string => 'STRING'.
*/

    // let string = 'STRING';

    // let toArray = Array.from(string);

    // console.log(toArray);

/*
26. Using the fruits array, use an array method to replace the first and last element with 'pear' and 'kiwi', respectively.
*/

    // const fruits = ['apple', 'banana', 'pineapple'];

    // const fruit1 = fruits.with(0, "pear").with(2, "kiwi");
    // const fruit3 = fruits.with(2, "kiwi");

    // console.log(fruit1);


/*
27. Given an array of numbers, check if all numbers are positive.
*/

    // const scores = [85, 92, 78, 96, 88];

    // let areAllPositive = scores.every((element) => Math.sign(element) == 1);
    // console.log(areAllPositive);

/*
28. Given an array of strings, check if any string has more than 5 characters.
*/

    // const words = ['cat', 'dog', 'elephant', 'fox', 'dolphin', ' giraffe'];

    // let hasFiveChars = words.some(elements => elements.length > 5);
    // console.log(hasFiveChars);

    // if (hasFiveChars) {
    //     const wordsWithFiveChars = words.filter((word) => word.length > 5);
    //     console.log(wordsWithFiveChars);
    // } else {
    //     console.log('No words has more than 5 characters');
    // }


/*
29. Given an array of numbers, double each number and then keep only those greater than 10.
*/

    // const numbers = [2, 5, 8, 1, 9];

    // let newNum = numbers.map( elements => (elements * 2)).filter(elements => elements > 10);
    // console.log(newNum);    

/*
30. Given an array of strings, return an array showing how many vowels each string contains.
*/

    // const words1 = ['hello', 'world', 'javascript'];
    // const vowels = ['a', 'e', 'i', 'o', 'u'];

    // const words1Length = [];

    // words1.forEach((word) => {
    //     let filteredWord = word.split('').filter((letter) => vowels.includes(letter)).join('');

    //     words1Length.push(filteredWord.length);
    // });

    // // Long method

    // words1.forEach((word) => {
    //     let splitWord = word.split('');

    //     let filteredWord = splitWord.filter((letter) => vowels.includes(letter));

    //     let joinedWords = filteredWord.join('');

    //     words1Length.push(joinedWords.length);
    // });
    // console.log(words1Length);

/*
31. Given an array with duplicate values, return a new array with only unique values.
*/

    // const numbers1 = [1, 2, 2, 3, 4, 4, 5, 1];

    // const unique = [];

    // numbers1.forEach(elements => {
    //     if (!unique.includes(elements)) {
    //         unique.push(elements);
    //     }
    // });

    // console.log(unique);
    
/*
32. Given an array containing nested arrays, flatten it into a single array.
*/

    // const nested = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];

    // let modified = nested.flat();

    // console.log(modified);
    

/*
33. Given an array of numbers, keep only numbers divisible by 3, then square them.
*/

    // const numbers2 = [1, 3, 4, 6, 7, 9, 12, 15];

    // let newNum = numbers2.filter(number => number % 3 == 0).map(number => number**2);

    // console.log(newNum);

/*
34. Given an array of numbers, multiply each by 2, keep only those > 10, then sum them up.
*/

const numbers = [2, 8, 1, 6, 4, 9];

    let newNumbers = numbers.map(num => num * 2).filter(num => num > 10).reduce((acc, curr) => acc + curr, 0);

    console.log(newNumbers);
    
/*
35. Given an array of sentences, return an object with the total word count and average words per sentence.
*/

const sentences = [
    "Hello world",
    "JavaScript is awesome",
    "I love coding very much",
    "Arrays are useful"
];

    sentences.forEach((sentence) => {
        let sentenceArr = sentence.split(' '); // ['Hello', 'World].length()
    });

/*
36 Given an array of full names, create an array of initials.
*/

const names = ['John Smith', 'Mary Jane Watson', 'Peter Parker'];