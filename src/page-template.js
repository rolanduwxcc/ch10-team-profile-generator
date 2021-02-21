//This page is what takes the Employee data and creates/returns HTML.
//Uses bootstrap based CSS from last project for the most part


//----------------------------------------Get Role Specific HTML
const getRoleHTML = (role, roleSpecificData) => {
  if (role === 'Manager') {
    return `<h4 class="portfolio-item-title text-light">office number :: <span class="text-tertiary">${roleSpecificData}</span></h4>`;
  } else if (role === 'Engineer') {
    return `<h4 class="portfolio-item-title text-light">github :: <a class="text-tertiary" href="https://github.com/${roleSpecificData}" target="_blank">${roleSpecificData}</a></h4>`;

  } else if (role === 'Intern') {
    return `<h4 class="portfolio-item-title text-light">school :: <span class="text-tertiary">${roleSpecificData}</span></h4>`;
  } else
  return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${aboutText}</p>
      </section>
    `;
};

//-------------------------HTML generation for each employee card
const generateTeamMemberData = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      
      <div class="flex-row justify-space-between">
      ${projectsArr
      .map(({ name, id, email, officeNumber="", github="", school="" }) => {
        let role = "";
        let roleHTML = "";

        if (officeNumber) {
          role = "Manager";
          roleHTML = getRoleHTML(role, officeNumber);
        } else if (github) {
          role = "Engineer";
          roleHTML = getRoleHTML(role, github);
        } else if (school) {
          role = "Intern"
          roleHTML = getRoleHTML(role, school);
        }
        else {role = ""}
        return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h4 class="text-uppercase text-light">${role}</h4>
            <h4 class="portfolio-item-title text-light">employee id :: <span class="text-tertiary">${id}</span></h4>
            <h4 class="portfolio-item-title text-light">email :: <a class="text-tertiary" href="mailto:${email}">${email}</a></h4>
            ${roleHTML}
          </div>
        `;
      })
      .join('')}
      </div>
    </section>
  `;
};

module.exports = teamData => {
  //destructure projects and about from templateData based on property key names
  const myName = "Roland"
  const myGithub = "rolanduwxcc";
  teamData = [
    Manager = {
      name: 'Nick Fury',
      id: '1',
      email: 'furious@shield.org',
      officeNumber: '01'
    },
    Engineer = {
      name: 'Tony Stank',
      id: '2',
      email: 'iamironman@shield.org',
      github: 'theMechanic'
    },
    Engineer = {
      name: 'Steve Rogers',
      id: '3',
      email: 'together@shield.org',
      github: 'theShield'
    },
    Engineer = {
      name: 'Carol Danvers',
      id: '4',
      email: 'marvelous@shield.org',
      github: 'marVel'
    },
    Intern = {
      name: 'Peter Parker',
      id: '9',
      email: 'spiderboy@shield.org',
      school: 'MIT'
    }
  ];
  console.log(teamData);

  return `
      <!DOCTYPE html>
      <html lang="en">
    
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
    
      <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            <nav class="flex-row">
              <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${myGithub}/ch10-team-profile-generator" target="_blank">Team Profile Generator</a>
            </nav>
          </div>
        </header>
        <main class="container my-5">
          ${generateTeamMemberData(teamData)}
        </main>
        <footer class="container text-center py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()} Made with a 🖤 by ${myGithub}</h3>
        </footer>
      </body>
      </html>
      `;
};

