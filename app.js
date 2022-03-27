//Array Challenges
//all done by Robera Insarmu


//Array initilisation. here  I am gonna name my array number
const numbers = [
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven"
    ]
    //array is initialised.
console.log(numbers)
    //challenge 1
    // print arrays using foreach and arrow function.

console.log("originally Numbers contain: ")
numbers.forEach(items => {
    console.log(items)
})

// challenge 2
//push elements at the last of array and display alla array elements it.
numbers.push("eight")

console.log("after push() Numbers contain: ")
numbers.forEach(items => {
    console.log(items)
})

// challenge 3
//remove last element and display it
console.log("Popped element", numbers.pop())

console.log("after pop() Numbers contain: ")
numbers.forEach(items => {
    console.log(items)
})


// challenge 4
//add element on first array and display it
numbers.unshift("one")

console.log("after unshift() Numbers contain: ")
numbers.forEach(items => {
    console.log(items)
})

// challenge 5
//remove first element from  array and display it
numbers.shift()

console.log("after shift() Numbers contain: ")
numbers.forEach(items => {
    console.log(items)
})

// challenge 7
// sort array
numbers.sort();

console.log("after sort() Numbers looks like: ")
numbers.forEach(items => {
    console.log(items)
})