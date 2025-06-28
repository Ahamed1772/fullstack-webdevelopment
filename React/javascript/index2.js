
//O(n)
// const db = ["batman","superman","ironman","spiderman"];

// const findheros = (heros,heroname) => {
//     for (let i = 0;i < db.length;i++){
//         if (heroname === heros[i]){
//             console.log(`found ${heroname}`);
//         }
//     }
    
// }

// findheros(db,"ironman");

//o(1)

// const numbers  = [1,23,45,65];

// const find = (arr,index) => {
//     console.log(arr[index]);
// }

// find(numbers,2);

//O(n ^ 2)

// const number = [1,2,3,4,5];
// for (let i = 0; i < number.length; i++){
//     for (let j = i + 1; j < number.length; j++){
//         console.log(`i is ${i} j is ${j}`);
//     }
// }


// //array

// class MyArray {
//     constructor(){
//         this.length = 0;
//         this.data = {};
//     }

//     push(items){
//         this.data[this.length] = items;
//         this.length++;
//     }

//     get(index){
//         return this.data[index];
//     }

//     pop(){
//         delete this.data[this.length - 1];
//         this.length --;
//         return this.data;
//     }

//     shift(){
//         for (let i = 0; i < this.length; i++){
//             this.data[i] = this.data[i + 1];
//         }

//         delete this.data[this.length - 1];
//         this.length --;
//         return this.data;
//     }

//     deleteByIndex(index){
//         delete this.data[index];
//         this.length --;
        
//     }
// }

// let first = new MyArray();
// first.push("apple");
// first.push("banana");
// first.push("orange");
// first.push("pineapple");
// first.push("lemon");
// // console.log(first.get(0));
// // console.log(first);
// // console.log(typeof(first));
// // console.log(first.pop());
// // console.log(first.shift());
// // console.log(first);
// console.log(first);
// first.deleteByIndex(1);
// console.log(first);


// const reverseString = (value) => value.split("").reverse().join("") === value;
// console.log(reverseString("cddc"));
// // let answer = "cddc";
// // (reverseString(answer) == answer) ? console.log("success") : console.log("failed"); 


// const reverseint = (value) => value.toString().split("").reverse().join("");
// console.log(reverseint(1234));

//capitalize


// const capitalize = (answer) => {
//     return answer.toLowerCase().split(" ").map( (letter) => letter[0].toUpperCase() + letter.slice(1)).join("");
// }
// console.log(capitalize("Hello world"));


//fizz buzz

// const fizzbuzz = (number) => {
//     for (let i = 0; i <= number; i++){
//         if ( i % 3 == 0 && i % 5 == 0){
//             console.log("fizzbuzz")
//         }else if (i % 3 == 0){
//             console.log("buzz")
//         }else if (i % 5 == 0 ){
//             console.log("fizz")
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzbuzz(25);


//maxprofit

let stocks = [1,3,5,6,8,10];

// const maxprice = (price) => {
//     let value;

//     for (let i = 0;i < stocks.length -1; i++){
//         if (price[i] > price[i + 1]){
//             value = price[i]
//         }else{
//             value = price [i + 1]
//         }
//     }
//     console.log(value)
// }


//  maxprice(stocks);


//slice
// let number = [1,2,3,4,5]
// const num = number.slice(0,3);
// console.log(num);


//chunked data
// const chunk = (array,size) => {
//     let number = [];
//     let index = 0;
//     while (index < array.length){
//         console.log(index + size,size)
//         const result = array.slice(index,index + size);
//         console.log(result);
//         number.push(result);
//         index += size;
//     }
//     return number;
// }

// console.log(chunk([1,2,3,4,5,6,7,8],2));

//checking target with two sum


// const number = (array,total) => {
//     for (let i = 0;i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === total){
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(number([1,2,5,7],12));

//--linked list --//

// class Node {
//     constructor (value){
//         this.head = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value){
//         this.head = new Node(value);
//         this.tail = this.head;
//         this.length = 1;
//     }

//     push(value){
//         let newnode = new Node(value);
//         if(!this.head){
//             this.head = newnode;
//             this.tail = newnode;
//         }
//         this.head.next = newnode;
//         this.tail = newnode;
//         this.length++;
//     }

//     pop(){
//         let temp  = this.head;
//         let prev = this.tail;
//         while (temp.next){
//             prev = temp;
//             temp = prev.next;

//             this.tail = prev
//             this.tail.next = null
//             this.length--;
//         }
//     }

// }

// const one = new LinkedList(1);
// one.push(2);
// one.pop();
// console.log(one);


//fibonacci numbers 

// function fibonacciGenerator(n){
//     if(n === 0){
//         return []
//     }else if (n === 1){
//         return [0]
//     }
//     const array = [0,1];
//     for (let i = 2; i < n;i++ ){
//         array.push(array[i - 2] + array[i - 1])
//     }
//     return array;
// }

// const arraybuck = fibonacciGenerator(10);
// console.log(arraybuck);


//minimum value in array

// let number = [2,6,9,10,24,13];
// let minvalue = number[0];
// for (let i = 0;i < number.length;i++){
//     if (minvalue > number[i]){
//         minvalue = number[i]
//     }
// }

// console.log(minvalue);

// -----> Leetcode problems
//sleep
// function sleep(milis){
//     setTimeout(() => {
//         console.log("Time limit is " + milis)
//     },milis)
// }

// sleep(200);

//sleep
// async function sleep(millis) {
//         await setTimeout(() => {
//             console.log(millis)
//         },millis)   
// }


// sleep(2000);


//counter function
// let array = [];
// const counter = (n) => {
//     array.push(n,n + 1,n +2);
//     console.log(array);
// }

// counter(10);


// let array = [];
// const counter = (n) => {
//     // array.push(n,n+1,n+2,n+3,n+4)
//     // console.log(array);
//     for(let i = 0;i < 5;i++){
//         array.push(n);
//         n++
//     }
//     console.log(array)
// }

// counter(-2);

//Arrray prototype last
// const lastDigitFinder = (array) => {
//     let length = array.length;
//     (length < 1) ? console.log(-1) : console.log(array[length - 1]);
// }

// lastDigitFinder([null,{},3]);


//Array reduce Transformation

// const addition = (array) => {
//     let init = 0;
//     for (let i = 0; i < array.length; i++){
//         init += array[i]
//     }
//     console.log(init);
// }

// addition([1,2,3,4])

// const multiplication = (array) => {
//     let init = 100;
//     if (array.length < 1) {console.log(25)}
//     else{
//     for (let i = 0; i < array.length; i++){
//         init += array[i] * array[i] 
//     }
//     console.log(init);
//     }
// }

// multiplication([1,2,3,4]);

