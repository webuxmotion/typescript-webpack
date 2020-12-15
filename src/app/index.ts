// Array Type
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

console.log(list, list2);

// Typle Type
let x: [string, number] = ["hello", 10];
console.log(x);

// Enum Type
enum Directions {
    Up,
    Down,
    Left,
    Right
}

console.log(Directions, Directions.Up, Directions[0]);

// Never Type
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
}

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {}
}

// Object Type
const create = (o: object | null): void => {};

create({ obj: 1 });

// Multiple types for one value
let id: number | string;

id = 10;
id = '42';
//id = true;

// Type
type Name = string;

let myId: Name;

myId = "42";
//myId = 10;


// Functions
const createPassword = (name: string, age?: number): string => `${name}${age}`
console.log(createPassword('Andrii'));

const createSkills = (name: string, ...skills: string[]): string =>
    `${name}, my skills are ${skills.join(', ')}`;

console.log(createSkills('Andrii', 'JS', 'NestJS', 'Typescript'))