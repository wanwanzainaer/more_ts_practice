// const names: Array<string> = [];

// // const promise: Promise<string> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve('This is done');
// //   }, 2000);
// // });
// // promise.then((data) => {
// //   data.split('');
// // });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const mergeObj = merge({ name: 'Max' }, { age: 30 });

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no value';
//   if (element.length === 1) {
//     descriptionText = 'Got 1 element';
//   } else if (element.length > 1) {
//     descriptionText = 'Got ' + element.length + 'elements';
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe('Hi There'));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key];
// }

// extractAndConvert({ name: 234 }, 'name');

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }
//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.slice(this.data.indexOf(item), 1);
//   }
//   getItems() {
//     return [...this.data];
//   }
// }
// const textStorage = new DataStorage<string>();

// const objStorage = new DataStorage();

// textStorage.addItem('123');

// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUtil: Date;
// }

// function createCourseGoal(title: string, description: string, date: Date) {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUtil = date;
//   return courseGoal;
// }

// const names: Readonly<string[]> = ['Max', 'Sports'];
// names.push('Manu');
