arr = [11,12,13,14,15,16,17,18];

const myFun = (value, index) => {
    if (value===5) console.log("5 exists");
}
arr.find(myFun); // Notice the pattern below. Make a funtion saparatley and then pass, or pass it directly -> same thing


// find method returns a single value.
const val = arr.find((value, index)=>{
    if (value > 5) return value;
})
console.log("This is find method ->", val);


// filter method returns an array which satisfies the given conditon.
const arrVal = arr.filter((value, index)=>{
    if (value > 4) return value;
})
console.log("This is filter method ->",arrVal);


// every method returns a boolean. Kind of AND operation.
const isEvery = arr.every((value, index)=>{
    return value<7; 
});
console.log("This is every method ->", isEvery);


// some method returns a boolean as well. Kind of OR operation.
const isSome = arr.some((value, index)=>{
    return value<7;
})
console.log("This is some method ->", isSome);


/* forEach method is used to iterate over elements in an 
array or other iterable, but it does not return a new 
array or any other value. Instead, it's primarily used 
for performing an action or side effect (such as logging, updating a variable, or modifying the original array) 
for each element in the array */
let totSum=0;
arr.forEach((value, index)=>{
    totSum += value;
    return index; // Here return didn't work, as forEach doesn't return anything
})
console.log("This is forEach ->", totSum)

for (let value of arr) {
    totSum += value;
}
console.log("This is for of ->", totSum);


// map method is like forEach, but it returns an array once the given condition/data-manipulation is met. 
const mapArr = arr.map((value, index)=>{
    // [1,2,3,4,5,6,7,8]
    let temp = value*2;
    return temp+5;
})
console.log("This is map ->", mapArr);


// reduce method returns a value not array.
const result = arr.reduce((previousVal, currentValue, currentIndex)=>{
    // At start previousVal will the first element of the array.
    // currentValue is the subsequent values in the array w.r.t index
    console.log(currentIndex, ":", currentValue);
    return previousVal += currentValue;
})
console.log("This is reduce ->", result);
