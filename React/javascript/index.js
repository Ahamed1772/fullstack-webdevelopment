// //map/reduce/filter

// //map
let number = [12,23,56,87];
const mapping = number.map( (num) => {
    return num * 2
});
console.log(mapping);
let valueOne = [];
number.forEach((num) => {
    valueOne.push(num * 2)
});
console.log(valueOne);

// //reduce 
const reducing = number.reduce((initialNum,add) => {
    return initialNum + add
});
console.log(reducing);
let valueTwo = 0;
number.forEach((num) => {
    valueTwo += num
});
console.log(valueTwo);

// //filter
const filtering = number.filter( num => {
    return num < 30
});

console.log(filtering);
let greaterNumber = [];
number.forEach((num) => {
    if (num < 30){
        greaterNumber.push(num)
    }
});
console.log(greaterNumber);

//find and findindex
var numberOne = [3,56,2,48,5];

const finding = numberOne.find( num => {
    return num > 30
});
console.log(finding);
const findindex = numberOne.findIndex( num => {
    return num > 30
});
console.log(findindex);


// //spread operator

let fruits = ["apple","orange","mango"];
let vegetables = ["brinjal","tomato",...fruits];
console.log(vegetables);

let fullname = {
    firstname: "ahamed ibrahim",
    lastname: "khan"
};

let fulldetail = {
    ...fullname,
    job: "web developer",
    city: "madurai",
};

console.log(fulldetail);

const data = [{name: "cat",sound: "meow",food: {solid: "pedigre",liquid: "water"}},{name: "dog",sound: "bark"}];

const [cat,dog] = data;
console.log(cat);
const {name,sound} = cat;
console.log(sound);
const {name:n,sound:s,food: {solid,liquid}} = cat;
console.log(solid);
console.log(n);