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

    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((num, index, arr) => {
        arr[index] = num * 2;
    });
    console.log(numbers);

    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((num, index, arr) => {
        console.log(num * 2);
    });

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











