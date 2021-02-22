//This page is what takes the Employee data and creates/returns HTML.
//Uses bootstrap based CSS from last project for the most part


//----------------------------------------Get Role Specific HTML
const getRoleHTML = (role, roleSpecificData) => {
  if (role === 'Manager') {
    return `<h5 class="portfolio-item-title text-light">office number :: <span class="text-tertiary">${roleSpecificData}</span></h5>`;
  } else if (role === 'Engineer') {
    return `<h5 class="portfolio-item-title text-light">github :: <a class="text-tertiary" href="https://github.com/${roleSpecificData}" target="_blank">${roleSpecificData}</a></h5>`;

  } else if (role === 'Intern') {
    return `<h5 class="portfolio-item-title text-light">school :: <span class="text-tertiary">${roleSpecificData}</span></h5>`;
  } else
  return;
};

//-------------------------HTML generation for each employee card
const generateTeamMemberData = teamArr => {
  return `
    <section class="my-3" id="portfolio">
      
      <div class="flex-row justify-space-between">
      ${teamArr
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
            <h2 class="portfolio-item-title text-light">${name}</h2>
            <h4 class="text-uppercase text-tertiary">${role}</h4>
            <h5 class="portfolio-item-title text-light">employee id :: <span class="text-tertiary">${id}</span></h5>
            <h5 class="portfolio-item-title text-light">email :: <a class="text-tertiary" href="mailto:${email}" target="_blank">${email}</a></h5>
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
  const myName = "Roland"
  const myGithub = "rolanduwxcc";

  // //Mock data to set teamData with to get healthy generated data set.
  // //This is for just tweaking the HTML only
  // teamData = [
  //   Manager = {
  //     name: 'Nick Fury',
  //     id: '1',
  //     email: 'furious@shield.org',
  //     officeNumber: '01'
  //   },
  //   Engineer = {
  //     name: 'Tony Stank',
  //     id: '2',
  //     email: 'iamironman@shield.org',
  //     github: 'theMechanic'
  //   },
  //   Engineer = {
  //     name: 'Steve Rogers',
  //     id: '3',
  //     email: 'together@shield.org',
  //     github: 'theShield'
  //   },
  //   Engineer = {
  //     name: 'Carol Danvers',
  //     id: '4',
  //     email: 'marvelous@shield.org',
  //     github: 'marVel'
  //   },
  //   Intern = {
  //     name: 'Peter Parker',
  //     id: '9',
  //     email: 'spiderboy@shield.org',
  //     school: 'MIT'
  //   }
  // ];
  // console.log(teamData);

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
              <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${myGithub}/ch10-team-profile-generator" target="_blank">About Team Profile Generator</a>
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

