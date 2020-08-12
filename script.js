// Arrays and callbacks I will use

const numbers = [1, 2, 3, 4];
const oddNumbers = [7, 9, 13, 21];
const evenNumbers = [4, 6, 8, 12];
const evenOddNumbers = [10, 13, 14, 19, 20];
const emptyArr = [];

const logging = (elem) => console.log(elem);
const incrementing = (elem) => elem + 1;
const multiplying = (elem) => elem * 10;
const evenNumbersSearch = (elem) => !(elem % 2) ? true : false;
const adding = (accum, elem) => accum + elem;


// Task 1 - forEach

function forEachLike(cb, arr) {
    for (let index = 0; index < arr.length; index++) {
        cb(arr[index]);
    }
}

forEachLike(logging, numbers);
numbers.forEach(logging);


// Task 2 - map

function mapLike(cb, arr) {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(cb(arr[index]));
    }
    return newArr;
};

console.log(mapLike(incrementing, numbers));
console.log(numbers.map(incrementing));


//Task 3 - filter

function filterLike(cb, arr) {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (cb(arr[index])) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

console.log(filterLike(evenNumbersSearch, evenOddNumbers));
console.log(evenOddNumbers.filter(evenNumbersSearch));


//Task 4 - find

function findLike(cb, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (cb(arr[index])) {
            return arr[index];
        } else {
            return undefined;
        };
    };
}

console.log(findLike(evenNumbersSearch, evenOddNumbers));
console.log(evenOddNumbers.find(evenNumbersSearch));

console.log(findLike(evenNumbersSearch, oddNumbers));
console.log(oddNumbers.find(evenNumbersSearch));


//Task 5 - some

function someLike(cb, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (cb(arr[index])) {
            return true;
        }
    };
    return false;
}

console.log(someLike(evenNumbersSearch, evenOddNumbers));
console.log(evenOddNumbers.some(evenNumbersSearch));

console.log(someLike(evenNumbersSearch, oddNumbers));
console.log(oddNumbers.some(evenNumbersSearch));

console.log(someLike(evenNumbersSearch, emptyArr));
console.log(emptyArr.some(evenNumbersSearch));


//Task 6 - every

function everyLike(cb, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (!cb(arr[index])) {
            return false;
        }
    };
    return true;
}

console.log(everyLike(evenNumbersSearch, evenOddNumbers));
console.log(evenOddNumbers.every(evenNumbersSearch));

console.log(everyLike(evenNumbersSearch, evenNumbers));
console.log(evenNumbers.every(evenNumbersSearch));

console.log(everyLike(evenNumbersSearch, emptyArr));
console.log(emptyArr.every(evenNumbersSearch));


//Task 7 - reduce

function reduceLike(cb, arr, firstValue = 0) {
    let accumulator = firstValue;
    for (let index = 0; index < arr.length; index++) {
        accumulator = cb(accumulator, arr[index]);
    }
    return accumulator;
}

console.log(reduceLike(adding, numbers));
console.log(numbers.reduce(adding, 0));

console.log(reduceLike(adding, emptyArr));
console.log(emptyArr.reduce(adding, 0));