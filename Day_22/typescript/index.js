//strong typing
// var test:string = "hello world";
// console.log(test);
// var myBoolean:boolean = true;
// var myNumber:number = 3;
// console.log(myNumber);
//infrared typing
// var myNumber = 1;
// var myString = "hello world";
// console.log(myNumber,myString);
//array
// var myArray:number[] = [1,2,3,4];
//any
// var item:any = {id:1,name:"ahamed"};
// item = {id:2};
//enums
// enum  Direction {
//     up,
//     down,
//     left,
//     right
// }
// function move(direction) {
//     console.log(Direction[direction].toLowerCase());
// }
// move(Direction.left);
//function
// function addNumber(a:number,b:number){
//     return a + b;
// }
// console.log(addNumber(2,3));
//optional argument [ ? ]
// let concatString = (a:string,b:string,c?:string) => {
//     console.log(a+b+c);
// }
// concatString("a","b","c");
// concatString("a","b");
//default parameters
// var concatString = (a:string,b:string,c:string = "cat") => {
//     console.log(a+b+c);
// }
// concatString("a","b","c");
// concatString("a","b");
//------------------------------------------------------------------------------------------------------------------------------------->
//interfaces
// interface User{
//     firstName: string,
//     middleName: string,
//     lastName: string,
//     age: number
// }
// function greetUser(user: User){
//     return (`hello ${user.firstName}  ${user.lastName}`)
// };
// function logUser(user: User){
//     console.log(`User name is ${user.firstName} ${user.middleName} ${user.lastName} and age is ${user.age}`)
// }
// let user1 = {firstName: "ahamed",middleName:"ibrahim",lastName: "khan",age:23}
// console.log(greetUser(user1));
// logUser(user1);
//-------------------------------------------------------------------------------------------------------------------------------------------->
//class
//-->without class
// let user1 = {firstName: "ahamed", lastName:"ibrahim",age:23};
// let user2 = {firstName: "mari", lastName:"yesudas", age:23};
// const greetUser = (user: {firstName:string,lastName:string}) => {
//     return `Hello ${user.firstName} ${user.lastName}`
// }
// const tellAge = (user: {age:number}) => {
//     return `Age is ${user.age}`
// }
// console.log(greetUser(user1));
// console.log(tellAge(user1));
// console.log(greetUser(user2));
// console.log(tellAge(user2));
//--> with class
// class User {
//     firstName:string;
//     lastName:string;
//     age:number;
//     constructor(firstName:string,lastName:string,age:number) {
//         this.firstName = firstName;
//         this.lastName =lastName;
//         this.age = age;
//     }
//     greet(){
//         return `Hello ${this.firstName} ${this.lastName}`
//     }
//     yourAge(){
//         return  `Your Age is ${this.age}`
//     }
// }
// let user1 = new User("ahamed","ibrahim",23);
// let user2 = new User("mari","yesudas",22);
// console.log(user1.greet());
// console.log(user1.yourAge());
// console.log(user1.age);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user2.greet());
// console.log(user2.yourAge());
// console.log(user2.age);
// console.log(user2.firstName);
// console.log(user2.lastName);
//--------------------------------------------------------------------------------------------------------------------------------------------->
//inheritance in class
// class Person {
//     firstName:string;
//     lastName:string;
//     age:number;
//     constructor(firstName:string,lastName:string,age:number) {
//         this.firstName = firstName;
//         this.lastName =lastName;
//         this.age = age;
//     }
//     greet(){
//         return `Hello ${this.firstName} ${this.lastName}`
//     }
//     yourAge(){
//         return  `Your Age is ${this.age}`
//     }
// }
// class User extends Person {
//     constructor(firstName:string,lastName:string,age:number) {
//         super(firstName,lastName,age);
//     }
// }
// class Admin extends Person {
//     role:string
//     constructor(firstName:string,lastName:string,age:number,role:string) {
//         super(firstName,lastName,age);
//         this.role = role;
//     }
//     ManageAdmin(){
//         return `Your role is ${this.role}`
//     }
// }
// let user1 = new Admin("ahamed","ibrahim",23,"Administor");
// let user2 = new User("mari","yesudas",22);
// console.log(user1.greet());
// console.log(user1.yourAge());
// console.log(user1.age);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user2.greet());
// console.log(user2.yourAge());
// console.log(user2.age);
// console.log(user2.firstName);
// console.log(user2.lastName);
// console.log(user1.ManageAdmin());
//------------------------------------------------------------------------------------------------------------------------------------------->
//closure
// function Counter(){
//     let initialCouner = 0;
//     return {
//         increment: function increment(){
//             initialCouner++;
//         },
//         getIncrement: function getIncrement(){
//             return initialCouner;
//         }
//         getDecrement: function getDecrement(){
//             return initialCounter--;
//         }
//     }
// }
// const One = Counter();
//const Two = Counter();
// console.log(One.getIncrement());
// for (let i = 0;i < 10;i++){
//     One.increment();
// }
// console.log(One.getIncrement());
//console.log(One.getIncrement());
//------------------------------------------------------------------------------------------------------------------------------------------>
// class modifier
// class User {
//     private name:string;   //by using private modifier we can't access the name outside the class
//     private age:number;
//     constructor(name:string,age:number) {
//         this.name = name;
//         this.age = age
//     }
//     public getName(){   //by using the public you can access the name outside the class even if you won't mention public modifier the default is public
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
//     public setName(name:string){
//         this.name = name;
//     }
//     public setAge(age:number){
//         if(age > 0){
//             this.age = age;
//         }
//     }
// }
// const user1 = new User("ahamed",23);
// console.log(user1.getAge());
// console.log(user1.getName());
// user1.setName("ahamed");
// user1.setAge(23);
// console.log(user1.getAge());
// console.log(user1.getName());
//user1.setAge(-10);
//console.log(user1.getAge());
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//static-function
// class User {
//     name:string;
//     age:number;
//     constructor(name:string,age:number) {
//         this.name = name;
//         this.age = age;
//     }
//     static isAdult(age:number){
//         return age >= 18;
//     }
// }
// console.log(User.isAdult(32));
// console.log(User.isAdult(17));
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//static property
// class User {
//     name: string
//     static totalUser: number = 0;
//     constructor(name:string) {
//         this.name = name;
//         User.totalUser++;        
//     }
//     getName(){
//         return `My name is ${this.name}`
//     }
//     static getTotalUser(){
//         return `Total User is ${User.totalUser}`;
//     }
// }
//console.log(User.getTotaluser());
// const user1 = new User("ironman");
// const User2 = new User("spider-man");
// const user3 = new User("batman");
// console.log(User.getTotalUser());
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//Generics <T>
// class Stack<T> {
//     private items:T[] = [];
//     push(item){
//         this.items.push(item);
//     }
//     pop(){
//         return this.items.pop();
//     }
// }
// const NumberStack = new Stack<number>();
// NumberStack.push(1);
// NumberStack.push(2);
// console.log(NumberStack.pop());
// const StringStack = new Stack<string>();
// StringStack.push("hello");
// StringStack.push("world");
// console.log(StringStack.pop());
//------------------------------------------------------------------------------------------------------------------------------------------------------------------>
//Type-casting
// interface User {
//     name:string;
//     age:number;
// }
// const jsonData = '{"name":"Ironman","age":45}';
// const data = JSON.parse(jsonData)
// console.log(`My name is ${data.name} and age is ${data.age} and email is ${data.email}`);
// //now use typecasting so that undefined can't be validated
// const data2 = JSON.parse(jsonData) as User;
// console.log(`My name is ${data2.name} and age is ${data2.age}`);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//Type-assertion
// const element = document.getElementById("#element") as HTMLInputElement;
// const element1 = document.getElementById("#element2") as HTMLSelectElement;
// element.value = "hello world";
// element.name = "ironman";
// element1.name = "batman";
//-------------------------------------------------------------------------------------------------------------------------------------------------------------->
//intersection-type
// interface User {
//     id:number;
//     name:string;
// }
// interface Admin {
//     isAdmin:boolean;
//     accessValid:boolean;
// }
// type AdminManager = User & Admin;
// let employeeOne: AdminManager = {
//     id:12334,
//     name:"ironman",
//     isAdmin:true,
//     accessValid:true
// }
// console.log(employeeOne);
// console.log(employeeOne.name);
//------------------------------------------------------------------------------------------------------------------------------------------->
//decorator
// function Logger(targer: Function){
//     console.log("Logging............");
// }
// @Logger
// class User {
//     name:string;
//     age:number;
//     constructor(name:string,age:number) {
//         this.name = name;
//         this.age = age;
//     }
//     getDetails(){
//         console.log(this.name,this.age);
//     }
// }
// const user1 = new User("batman",45);
// console.log(user1.getDetails());
//example -2 [decorator]
// function logMethod(target:any,propertyKey:string,descriptor:PropertyDescriptor){
//     const originalMethod = descriptor.value;
//     descriptor.value = function(...args:any[]){
//         console.log(`calling ${propertyKey} method with arguments ${args.join(',')}`);
//         const result = originalMethod.apply(this,args);
//         console.log(`Result:${result}`);
//         return result;
//     }
// }
// class Calcultor{
//     @logMethod
//     add(a:number,b:number){
//         const result = a + b;
//         return result;
//     }
//     sub(a:number,b:number){
//         const result = a - b;
//         return result
//     }
// }
// const firstsum = new Calcultor();
// // firstsum.add(2,3);
// firstsum.sub(10,2);
//--------------------------------------------------------------------------------------------------------------------------------------------->
//cmd prompt --> first -->tsc index.ts
//           --> second --> node index.js
//for decorators --> first --> tsc index.ts -experimentalDecorators --target es5
//               -->second --> node index.js
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
