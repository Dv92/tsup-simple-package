// A simple class to represent a person
export class Person {
  constructor(public name: string, public age: number) {}

  // A method to greet the person
  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// A function to calculate the sum of two numbers
export function add(a: number, b: number): number {
  return a + b;
}

// A function to calculate the difference between two numbers
export function subtract(a: number, b: number): number {
  return a - b;
}

// A function to calculate the product of two numbers
export function multiply(a: number, b: number): number {
  return a * b;
}

// A function to calculate the quotient of two numbers
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}
