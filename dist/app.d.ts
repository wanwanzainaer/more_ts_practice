declare function Logger(logString: string): (constructor: Function) => void;
declare function WithTemplate(template: string, hookId: string): <T extends new (...args: any[]) => {
    name: string;
}>(originalConstructor: T) => {
    new (..._: any[]): {
        name: string;
    };
} & T;
declare class Person {
    name: string;
    constructor();
}
declare const person: Person;
declare function Log(target: any, propertyName: string | Symbol): void;
declare function Log2(target: any, name: string, descriptor: PropertyDescriptor): void;
declare function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor): void;
declare function Log4(target: any, name: string | Symbol, position: number): void;
declare class Product {
    private _price;
    title: string;
    set price(val: number);
    constructor(title: string, _price: number);
    getPriceWithTax(tax: number): number;
}
declare function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class Printer {
    message: string;
    showMessage(): void;
}
declare const p: Printer;
declare const button: HTMLButtonElement;
interface ValidatorConfig {
    [property: string]: {
        [validateableProp: string]: string[];
    };
}
declare const registeredValidators: ValidatorConfig;
declare function Required(target: any, propName: string): void;
declare function PositiveNumber(target: any, propName: string): void;
declare function validate(obj: any): boolean;
declare class Course {
    title: string;
    price: number;
    constructor(t: string, p: number);
}
declare const courseForm: HTMLFormElement | null;
