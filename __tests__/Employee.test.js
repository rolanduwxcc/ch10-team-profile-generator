const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Peter', 1, 'peter@finatech.com');

    expect(employee.name).toBe('Peter');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String) && expect.stringContaining("@"));
})

test('gets employee name', () => {
    const name = 'Peter';
    const employee = new Employee(name, 1, 'peter@finatech.com');
    
    expect(employee.getName()).toEqual(name);
})

test('gets employee id', () => {
    const id = 1;
    const employee = new Employee('Peter', id, 'peter@finatech.com');

    expect(employee.getId()).toEqual(id);
})

test('gets employee email', () => {
    const email = 'peter@finatech.com'
    const employee = new Employee('Peter', 1, email);

    expect(employee.getEmail()).toEqual(email);
})

test ('gets employee role returns Employee', () => {
    const role = 'Employee';
    const employee = new Employee('Peter', 1, 'peter@finatech.com');

    expect(employee.getRole()).toEqual(role);
})