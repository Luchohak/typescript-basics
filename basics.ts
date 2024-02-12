//Primitives: number, string, boolean
let age: number = 24;
let userName: string = "Max";
let isInstructor: boolean = true;

//More complex types: arrays, objects
let hobbies: string[];
hobbies = ["Sports", "Coocking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

//An array of people
let people: Person[];

//Type Inference
let course = "React - the complete guide";

//Typescript will infere the type of 'course' as a string and wont let you assign a different type
//course = 123;

//Union types: have more than 1 type for a variable
let courses: string | string[] | number = "React - the complete guide";

//Function & types, parameters
function add(a: number, b: number): number {
  return a + b;
}

//if a function never returns, the function type will be void
function printOutput(value: any) {
  console.log(value);
}


//Generics: using <T> will tell typeescript that all values with that type should be of the same type, although it is not initially defined
//Typesafe yet flexible
function insertAtBeginning<T>(array: T[], value: T) {
     const newArray = [value, ...array];
     return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);