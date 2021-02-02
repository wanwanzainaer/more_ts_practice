// abstract class Department {
//   protected employees: string[] = [];

//   constructor(protected readonly id: string, public name: string) {}

//   static createEmployee(name: string) {
//     return { name: name };
//   }

//   abstract describe(this: Department): void;
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   constructor(id: string, public admins: string[]) {
//     super(id, 'IT');
//   }
//   describe() {
//     console.log('IT department = ' + this.id);
//   }
// }

// class AccountDepartment extends Department {
//   private lastReport: string;
//   private static instance: AccountDepartment;
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('Not found last report');
//   }
//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please throw new value');
//     }
//     this.addReport(value);
//     this.lastReport = value;
//   }
//   static getInstance(id: string) {
//     if (!AccountDepartment.instance) {
//       this.instance = new AccountDepartment(id, []);
//       return this.instance;
//     }
//     return this.instance;
//   }
//   private constructor(id: string, private reports: string[]) {
//     super(id, 'ACC');
//     this.lastReport = reports[0];
//   }
//   describe() {
//     console.log('Accounting describe');
//   }
//   addEmployee(name: string) {
//     if (name === 'Simon') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }

// const employee1 = Department.createEmployee('SImon');
// console.log(employee1);

// const accounting = new ITDepartment('d1', ['Simon']);
// accounting.addEmployee('Simon');
// accounting.addEmployee('Toast');

// accounting.printEmployeeInformation();

// const accDepartment = AccountDepartment.getInstance('a1');
// const acc1 = AccountDepartment.getInstance('A3');
// console.log(accDepartment, acc1);
// accDepartment.mostRecentReport = 'Test for the setterr';
// console.log(accDepartment.mostRecentReport);
// accDepartment.printReports();
// // const xCopy = { name: 'ttt', describe: x.describe };
// // xCopy.describe();
