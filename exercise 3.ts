//Write a function that takes two numbers as parameters and returns their sum
function addNumbers(a: number, b: number): number {
    return a + b;
  }

//Write a function that returns a fixed number
function returnFixedNumber(): number {
    return 42;
  }

//
function changeCase(str: string, uppercase?: boolean): string {
    if (uppercase) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
