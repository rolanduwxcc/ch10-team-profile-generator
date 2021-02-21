//This page is what takes the Employee data and creates/returns HTML.
//

const { _mockConfigRegistry } = require("jest-mock");

//create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${aboutText}</p>
      </section>
    `;
  };
  
  //HTML generation for each employee card
  const generateTeamMemberData = projectsArr => {
    
    //this will be the HTML for each employee card
    return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .map(({ name, id, email}) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">${id}</h5>
            <a class="portfolio-languages" href="mailto:${email}">${email}</a>
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
  
    return `
      <!DOCTYPE html>
      <html lang="en">
    
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
    
      <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">${myName}</h1>
            <nav class="flex-row">
              <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${myGithub}">GitHub</a>
            </nav>
          </div>
        </header>
        <main class="container my-5">
          ${generateTeamMemberData(teamData)}
        </main>
        <footer class="container text-center py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${myGithub}</h3>
        </footer>
      </body>
      </html>
      `;
  };