// Create a Person class with name and age properties. Implement a method to return the person's name
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name =name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}

//Add a private property socialSecurityNumber to the Person class and a method to get the age
class Individual {
    private name: string;
    private age: number;
    private socialSecurityNumber: string;
  
    constructor(name: string, age: number, socialSecurityNumber: string) {
      this.name = name;
      this.age = age;
      this.socialSecurityNumber = socialSecurityNumber;
    }
  
    getName(): string {
      return this.name;
    }
  
    getAge(): number {
      return this.age;
    }
  }
    