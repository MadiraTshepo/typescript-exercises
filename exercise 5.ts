// A class calculator
class Calculator {
    // Methods for addition, subtraction, multiplication, and division

    add(a: number, b: number): number {
        this.validateInput(a, b);
        return a + b;
    }

    minus(a: number, b: number): number {
        this.validateInput(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validateInput(a, b);
        return a * b;
    }

    divide(a: number, b: number): number {
        this.validateInput(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Helper method for input validation
    private validateInput(a: number, b: number): void {
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input. Please provide numbers.");
        }
    }
}


