# TypeScript

## TYPES

* TypeScript is a superset of JavaScript that adds types.

* The type system refers to TypeScript’s understanding of how your code is meant to function: mainly what data types should be stored under your variables.
TypeScript expects the data type of the variable to match the type of the value initially assigned to it at its declaration—this is known as type inference.

* An object’s shape describes, among other things, what properties and methods it does or doesn’t contain. TypeScript knows not only what type something is but also what shape that type has.

* When it isn’t able to infer a type, TypeScript will consider a variable to be of type any.
Type annotations are little pieces of code that indicate what type a variable is meant to be.

```ts
let youAreAwesome: boolean;
youAreAwesome = true;
```

## tsconfig.json

* **"compilerOptions"**, which is a nested object that contains the rules for the TypeScript compiler to enforce.

  * **"target"**, the value "es2020" means the project will be using the 2020 version of EcmaScript standards for JavaScript.

  * **"module"**, this project will be using "ESModule" syntax to import and export modules.

  * **"strictNullChecks"**, variables can only have null or undefined values if they are explicitly assigned those values.

  * **"include"** that determines what files the compiler applies the rules to. In this case ["**/*.ts"] means the compiler should check every single file that has a .ts extension.

## Functions

### TypeScript Parameter Type Annotations

```ts
function greet(noun: string) {
  console.log(`Hello, ${noun}!`);
}

greet('World'); // Prints: Hello, World  

greet(2020); // Argument of type 'number' is not assignable to parameter of type 'string'.
```

### TypeScript Optional Parameter

```ts
function greet(name?: string) {
  console.log(`Hello, ${ name || 'stranger' }!`);
}

greet(); // Prints: Hello, stranger!
```

### TypeScript Default Parameters

```ts

function exponentiation(power = 1) {
  console.log(4 ** power);
}

exponentiation(); // Prints: 4

exponentiation(4); // Prints: 256

exponentiation(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number | undefined'.
```

### TypeScript Inferring Return Types

```ts
function factOrFiction() {
  return Math.random() >= .5 ? 'true' : 'false';
}

const myAnswer : boolean = factOrFiction(); // Type 'string' is not assignable to type 'boolean'
```

### TypeScript Void Return Type

```ts
function sayHello(): void { 
    console.log('Hello!')
} 
```

### TypeScript Explicit Return Types

```ts
function trueOrFalse(value: boolean): boolean {
  if (value) {
    return true;
  }

  return 'false'; // Typescript Error: Type 'string' is not assignable to type 'boolean'.
}
```
