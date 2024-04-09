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
