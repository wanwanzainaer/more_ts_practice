type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'werwer',
  privileges: ['werewr'],
  startDate: new Date(),
};

const paragraph = document.querySelector('p');
