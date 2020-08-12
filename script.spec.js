//Tests for Task 1 - forEach

describe('forEach', () => {
    it('should give the same result as forEach method', () => {
        expect(forEachLike(logging, numbers)).to.equal(numbers.forEach(logging));
    });
    
    it('should iterate on the array and log it', () => {
        expect(forEachLike(logging, numbers)).to.equal(console.log(1,2,3,4));
    });
});

//Tests for Task 2 - map

describe('map', () => {
    it('should give the same result as map method', () => {
        expect(mapLike(incrementing, numbers)).to.deep.equal(numbers.map(incrementing));
    });
    
    it('should increment all elements in array', () => {
        expect(mapLike(incrementing, numbers)).to.deep.equal([2,3,4,5]);
    });

    it('should myltiply all elements in array', () => {
        expect(mapLike(multiplying, oddNumbers)).to.deep.equal([70,90,130,210]);
    });

    it('should not change the original array', () => {
        expect(mapLike(incrementing, numbers)).to.not.deep.equal([1,2,3,4]);
    });
});

//Tests for Task 3 - filter

describe('filter', () => {
    it('should give the same result as filter method', () => {
        expect(filterLike(evenNumbersSearch, evenOddNumbers)).to.deep.equal(evenOddNumbers.filter(evenNumbersSearch));
    });
    
    it('should return an array of even numbers', () => {
        expect(filterLike(evenNumbersSearch, evenOddNumbers)).to.deep.equal([10,14,20]);
        expect(filterLike(evenNumbersSearch, numbers)).to.deep.equal([2,4]);
    });

    it('should return an empty array', () => {
        expect(filterLike(evenNumbersSearch, emptyArr)).to.deep.equal([]);
        expect(filterLike(evenNumbersSearch, oddNumbers)).to.deep.equal([]);
    });

    it('should not change the original array', () => {
        expect(filterLike(evenNumbersSearch, evenOddNumbers)).to.not.deep.equal(evenOddNumbers);
    });
});

//Tests for Task 4 - find

describe('find', () => {
    it('should give the same result as find method', () => {
        expect(findLike(evenNumbersSearch,evenOddNumbers)).to.deep.equal(evenOddNumbers.find(evenNumbersSearch));
    });

    it('should return the first truthy element', () => {
        expect(findLike(evenNumbersSearch, evenOddNumbers)).to.equal(10);
        expect(findLike(evenNumbersSearch, evenNumbers)).to.equal(4);
    });

    it('should return undefined if there is no truthy element', () => {
        expect(findLike(evenNumbersSearch, oddNumbers)).to.equal(undefined);
        expect(findLike(evenNumbersSearch, emptyArr)).to.equal(undefined);
    });
});

//Tests for Task 5 - some

describe('some', () => {
    it('should give the same result as some method', () => {
        expect(someLike(evenNumbersSearch, evenOddNumbers)).to.deep.equal(evenOddNumbers.some(evenNumbersSearch));
    });

    it('should return true if there is at least one truthy element', () => {
        expect(someLike(evenNumbersSearch, evenOddNumbers)).to.equal(true);
        expect(someLike(evenNumbersSearch, numbers)).to.equal(true);
    });

    it('should return false if there is no truthy element', () => {
        expect(someLike(evenNumbersSearch, oddNumbers)).to.equal(false);
    });

    it('should return false if the array is empty', () => {
        expect(someLike(evenNumbersSearch, emptyArr)).to.equal(false);
    });
});

//Tests for Task 6 - every

describe('every', () => {
    it('should give the same result as every method', () => {
        expect(everyLike(evenNumbersSearch, evenOddNumbers)).to.deep.equal(evenOddNumbers.every(evenNumbersSearch));
    });

    it('should return false if there is at least one falsy element', () => {
        expect(everyLike(evenNumbersSearch, evenOddNumbers)).to.equal(false);
        expect(everyLike(evenNumbersSearch, numbers)).to.equal(false);
    });

    it('should return true if all elements are true', () => {
        expect(everyLike(evenNumbersSearch, evenNumbers)).to.equal(true);
    });

    it('should return true if the array is empty', () => {
        expect(everyLike(evenNumbersSearch, emptyArr)).to.equal(true);
    });
});

//Tests for Task 7 - reduce

describe('reduce', () => {
    it('should give the same result as reduce method', () => {
        expect(reduceLike(adding, numbers)).to.deep.equal(numbers.reduce(adding));
    });

    it('should add all elements in array', () => {
        expect(reduceLike(adding, numbers)).to.equal(10);
        expect(reduceLike(adding, oddNumbers)).to.equal(50);
        expect(reduceLike(adding, emptyArr)).to.equal(0);
    });
});