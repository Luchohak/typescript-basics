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
let course = 'React - the complete guide';

//Typescript will infere the type of 'course' as a string and wont let you assign a different type
//course = 123;

//Union types: have more than 1 type for a variable
let courses: string | string[] | number = 'React - the complete guide';



//Function types, parameters
