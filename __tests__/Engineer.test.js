const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Samir', 1, 'bolton@initech.com','superman3');

    expect(engineer.name).toBe('Samir');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String) && expect.stringContaining("@"));

    expect(engineer.github).toEqual(expect.any(String));
})

test('gets engineer name', () => {
    const name = 'Samir';
    const engineer = new Engineer(name, 1, 'bolton@initech.com','superman3');
    
    expect(engineer.getName()).toEqual(name);
})

test('gets engineer id', () => {
    const id = 1;
    const engineer = new Engineer('Samir', id, 'bolton@initech.com','superman3');

    expect(engineer.getId()).toEqual(id);
})

test('gets engineer email', () => {
    const email = 'bolton@initech.com'
    const engineer = new Engineer('Samir', 1, email,'superman3');

    expect(engineer.getEmail()).toEqual(email);
})

test ('gets engineer role of Engineer', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Samir', 1, 'bolton@initech.com','superman3');

    expect(engineer.getRole()).toEqual(role);
})

test ('gets gihub username of engineer', () => {
    const username = 'superman3';
    const engineer = new Engineer('Samir', 1, 'bolton@initech.com',username);

    expect(engineer.getGithub()).toEqual(username);
})