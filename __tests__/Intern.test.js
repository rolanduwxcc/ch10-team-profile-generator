const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Drew', 1, 'drew@initech.com',2);

    expect(intern.name).toBe('Drew');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String) && expect.stringContaining("@"));

    expect(intern.officeNumber).toEqual(expect.any(Number));
})

test('gets intern name', () => {
    const name = 'Drew';
    const intern = new Intern(name, 1, 'drew@initech.com',2);
    
    expect(intern.getName()).toEqual(name);
})

test('gets intern id', () => {
    const id = 1;
    const intern = new Intern('Drew', id, 'drew@initech.com',2);

    expect(intern.getId()).toEqual(id);
})

test('gets intern email', () => {
    const email = 'drew@initech.com'
    const intern = new Intern('Drew', 1, email,2);

    expect(intern.getEmail()).toEqual(email);
})

test ('gets intern role of Intern', () => {
    const role = 'Intern';
    const intern = new Intern('Drew', 1, 'drew@initech.com',2);

    expect(intern.getRole()).toEqual(role);
})

test ('gets school of intern', () => {
    const school = 'MIT';
    const intern = new Intern('Drew', 1, 'drew@initech.com',school);

    expect(intern.getSchool()).toEqual(school);
})