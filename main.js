// follow_up:
//  class Car{
//     //     constructor(model,make,year){
//     //         this.model=model,
//     //         this.make=make,
//     //         this.age=this.carAge(year),
            
//     //     }
    
//     //     getCarInfo(){
//     //         return `A ${this.model} ,made by ${this.make} at ${this.age}`
//     //     }
//     //     carAge(year){
//     //         return 2023-this.year;
//     //     }
//     // }
//     // const car1= new Car("camry", "toyota", 2010);
//     // console.log(car1.getCarInfo());


// ------------------------------Tasks-5/2/2023 -----------------------------
// *Classes:

// Task1:
// class Car{
//     constructor(make,model,year,min,max){
//         this.make=make,
//         this.model=model,
//         this.cost=this.carCost(min,max),
//         this.year=year

//     }
//     getDescription(){
//         return `A ${this.model} ,made by ${this.make} at ${this.year} and ${this.cost}`

//     }

//     carCost(min,max){

//         return Math.floor(Math.random() * (max - min + 1) + min);

//     }
// }

//     const car1=new Car("camry", "toyota", '2010','6000','10000');
//     console.log(car1.getDescription());

// -----------------------------------------------------------------------------------

// // Task2
// class Person{
//     constructor(firstName,lastName,age ){
//         this.firstName=firstName,
//         this.lastName=lastName,
//         this.age=age
//     }
//     getGreeting(){
//         return `Hi, I'm ${this.firstName} ${this.lastName} my age is ${this.age}`

//     }
// }

// person1=new Person("Noorelhuda","Alshebailat",25);
// console.log(person1.getGreeting());
// ************************************************************************************
// *Arrow Function:

// Task1:
// let counterFunc = (counter) =>counter > 100 ? 0 :counter++;
// console.log(counterFunc(105))
// -------------------------------------------------------------------------

// Task2:
// let nameAge = (name, age)=>{
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }
//   console.log("Hello " +"Noorelhuda");
//   console.log("You are " + 25 + " years old");
// -------------------------------------------------------------------------

// Task3:

// const createFullName = (firstName, lastName) => firstName + " " + lastName;
 
// const doubleNumber = number => number * 2;
 
// const getEvenNumbers = array => {
//   let evenNumbers = [];
//   for (let i of array) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }
// -------------------------------------------------------------------------

// Task4:**

// if (1<2){ 
//     for (let index = 0; index < 5; index++) 
//     {
//      console.log("hi");
//      }
//      } else{ 
//     console.log("bye"); 
//     }
    
  
// ************************************************************************************
// *Array Method:

// Task1:
// -1st way :in one line(using reduce method):
// let nums = [2, 4, 5];
// const average = nums.map(num => num * num).reduce((a, b) => a + b) / nums.length;
// console.log(average)
// ===========================
// -2nd way :in one line(using reduce method):
// let nums = [2, 4, 5];
// const sum = nums.reduce((acc,cur) => acc + cur**2,0) / nums.length;
// console.log(sum)

// ===========================

// -in another manner:
// let nums = [2, 4, 5];
//  sum = 0;
//   nums.forEach(nums=>{sum += Math.pow(nums , 2)})
 
//   let ava = sum/nums.length;
//  console.log(ava);
// ------------------------------------------------------------------------------------

// Task2:
// let list=[1,2,3,4,5,6,7,8];
// let modifiedArr = list.map(function(element){
//     return element *10;
// });

// console.log(modifiedArr);
// ------------------------------------------------------------------------------------

// Task3:
// let arr = [
//     {name: "Angelina Jolie",age: 80 },
//     {name: "Eric Jones",age: 2},
//     {name: "Paris Hilton",age: 5},
//     {name: "Kayne West",age: 16},
//     {name: "Bob Ziroll",age: 100}]

  // let makeStrings= arr.map(function(arr){
  //   if(arr.age>=50){
  //       return(arr=arr.name+"can go to The Matrix");}
  //   else{
  //       return(arr=arr.name+"is under age!!");}
  //   });
  //   console.log(makeStrings)
  // ------------------------------------------------------------------------------------

// Task4:
//  persons = [
//     { name: { first: 'John', last: 'Hob' }, age: 35 },
//     { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
//     { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
//     { name: { first: 'Zues', last: 'Odin' }, age: 55 },
//     { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
//   ];

//   const avgAge = persons.reduce((acc, person) => acc + person.age,0) / persons.length;
//   console.log(avgAge);
// ------------------------------------------------------------------------------------

// Task5:
// let arr=[1,8,6,4]
// const evenOnly=arr.filter(e=>e%2==0)
// console.log(evenOnly);

// ------------------------------------------------------------------------------------

// Task6:
// let arr=[1,8,6,4];
// const multiFour=arr.filter(e=>e%4==0)
// console.log(multiFour);

