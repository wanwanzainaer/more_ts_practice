declare abstract class Department {
    protected readonly id: string;
    name: string;
    protected employees: string[];
    constructor(id: string, name: string);
    static createEmployee(name: string): {
        name: string;
    };
    abstract describe(this: Department): void;
    addEmployee(employee: string): void;
    printEmployeeInformation(): void;
}
declare class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]);
    describe(): void;
}
declare class AccountDepartment extends Department {
    private reports;
    private lastReport;
    private static instance;
    get mostRecentReport(): string;
    set mostRecentReport(value: string);
    static getInstance(id: string): AccountDepartment;
    private constructor();
    describe(): void;
    addEmployee(name: string): void;
    addReport(text: string): void;
    printReports(): void;
}
declare const employee1: {
    name: string;
};
declare const accounting: ITDepartment;
declare const accDepartment: AccountDepartment;
declare const acc1: AccountDepartment;
