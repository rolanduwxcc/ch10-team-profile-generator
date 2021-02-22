const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager('Lumbergh', 1, 'bill@initech.com',2);

    expect(manager.name).toBe('Lumbergh');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String) && expect.stringContaining("@"));

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets manager name', () => {
    const name = 'Lumbergh';
    const manager = new Manager(name, 1, 'bill@initech.com',2);
    
    expect(manager.getName()).toEqual(name);
})

test('gets manager id', () => {
    const id = 1;
    const manager = new Manager('Lumbergh', id, 'bill@initech.com',2);

    expect(manager.getId()).toEqual(id);
})

test('gets manager email', () => {
    const email = 'bill@initech.com'
    const manager = new Manager('Lumbergh', 1, email,2);

    expect(manager.getEmail()).toEqual(email);
})

test ('gets manager role of Manager', () => {
    const role = 'Manager';
    const manager = new Manager('Lumbergh', 1, 'bill@initech.com',2);

    expect(manager.getRole()).toEqual(role);
})

test ('gets office number', () => {
    const officeNumber = 2;
    const manager = new Manager('Lumbergh', 1, 'bill@initech.com',officeNumber);

    expect(manager.getOfficeNumber()).toEqual(officeNumber);
})
