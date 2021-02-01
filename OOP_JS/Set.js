//Methods
//add()
//delete(item)
//has(item)
//clear()
//iterating forEach, for let of

let jack={name:'Jake'}
let max={name:'Max'}
let leo={name:'Leo'}
let users = new Set();
users
    .add(jack)
    .add(max)
    .add(leo)
    .add(leo)

console.log(users)
users.forEach(user=>console.log(user))
console.log(users.has(leo))




// Examples
let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])
console.log(intersection(setA, setC) )
console.log(union(setA, setC))
console.log(isSuperset(setA, setB))
console.log(symmetricDifference(setA, setC) )
console.log(difference(setA, setC)  )


//relations with Array objects
let myArray = ['value1', 'value2', 'value3']

// Use the regular Set constructor to transform an Array into a Set
let mySet = new Set(myArray)

mySet.has('value1')     // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]) // Will show you exactly the same Array as myArray


// Use to remove duplicate elements from the array

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]


function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference
}

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}
