declare type Admin = {
    name: string;
    privileges: string[];
};
declare type Employee = {
    name: string;
    startDate: Date;
};
declare type ElevatedEmployee = Admin & Employee;
declare const el: ElevatedEmployee;
declare const paragraph: HTMLParagraphElement | null;
