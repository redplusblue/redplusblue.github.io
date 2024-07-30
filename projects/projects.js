const projectsTable = document.querySelector(".projects-table");
// Fields: S.No, Name, Description, Lang/Fram/Tool, Source, Live

// BadgeMap
const badgeMap = {
  HTML: "https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white",
  JavaScript:
    "https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black",
  React:
    "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black",
  Express:
    "https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white",
  NodeJS:
    "https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=Node.js&logoColor=white",
  Python:
    "https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white",
  Flask:
    "https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=Flask&logoColor=white",
  SQLAlchemy:
    "https://img.shields.io/badge/SQLAlchemy-333.svg?style=for-the-badge&logo=SQLAlchemy&logoColor=white",
  Java: "https://img.shields.io/badge/Java-007396.svg?style=for-the-badge&logo=Java&logoColor=white",
  JavaFX:
    "https://img.shields.io/badge/JavaFX-007396.svg?style=for-the-badge&logo=JavaFX&logoColor=white",
  JSP: "https://img.shields.io/badge/JSP-007396.svg?style=for-the-badge&logo=JSP&logoColor=white",
  "Android Studio":
    "https://img.shields.io/badge/Android Studio-3DDC84.svg?style=for-the-badge&logo=Android Studio&logoColor=white",
  MySQL:
    "https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white",
  JDBC: "https://img.shields.io/badge/JDBC-007396.svg?style=for-the-badge&logo=JDBC&logoColor=white",
  Django:
    "https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=Django&logoColor=white",
  Heroku:
    "https://img.shields.io/badge/Heroku-430098.svg?style=for-the-badge&logo=Heroku&logoColor=white",
  PostgreSQL:
    "https://img.shields.io/badge/PostgreSQL-336791.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-232F3E.svg?style=for-the-badge&logo=AWS&logoColor=white",
};

// Projects
class Project {
  constructor(name, description, langs, source, live) {
    this.name = name;
    this.description = description;
    this.langs = langs;
    this.source = source;
    this.live = live;
  }
}

// Add a project to the table element
function addProjectToTable(project) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${projectsTable.rows.length}</td>
        <td>${project.name}</td>
        <td>${project.description}</td>
        <td>${project.langs
          .map((lang) => `<img src="${badgeMap[lang]}" alt="${lang}" />`)
          .join("")}
        </td>
        ${
          project.source
            ? `<td><a href="${project.source}"><code>Source</code></a></td>`
            : "<td><code>-</code></td>"
        }
        ${
          project.live
            ? `<td><a href="${project.live}"><code>Live</code></a></td>`
            : "<td><code>-</code></td>"
        }
    `;

  projectsTable.appendChild(row);
}

const projects = [
  new Project(
    "Website",
    "My portfolio website, showcasing my projects and skills.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/portfolio",
    "https://samirkabra.me"
  ),
  new Project(
    "Phantom Portfolio",
    "A simple stock sandbox portfolio app.",
    ["React", "Flask", "Python", "SQLAlchemy"],
    "https://github.com/redplusblue/phantom-portfolio",
    ""
  ),
  new Project(
    "Dashboard",
    "A simple dashboard page for my Home Server",
    ["React", "Express", "NodeJS"],
    "https://github.com/redplusblue/dashboard",
    ""
  ),
  new Project(
    "RU Cafe",
    "A simple coffee shop ordering system.(Multiplatform)",
    ["Java", "JavaFX", "Android Studio"],
    "",
    ""
  ),
  new Project(
    "Leetlog",
    "A simple Leetcode tracker and logger.",
    ["Flask", "Python"],
    "",
    "https://leetlog.samirkabra.com"
  ),

  new Project(
    "Ebay Clone",
    "An E-commerce website like Ebay with bidding and buying features.",
    ["Java", "JSP", "MySQL", "JDBC"],
    "",
    ""
  ),

  new Project(
    "Blog",
    "A simple blog website.",
    ["Django", "Python", "Heroku", "PostgreSQL", "AWS"],
    "https://github.com/redplusblue/sk.blog",
    ""
  ),

  new Project(
    "Py-Game",
    "A gaming platform comprising of multiple games made in python.",
    ["Python"],
    "https://github.com/redplusblue/py-game",
    ""
  ),

  new Project(
    "Weather App",
    "A simple weather app.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/weather-app",
    "https://redplusblue.github.io/weather-app/"
  ),

  new Project(
    "To Do List",
    "A simple To-Do List app.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/to-do",
    "https://redplusblue.github.io/to-do/"
  ),

  new Project(
    "Restaurant-Page",
    "A simple restaurant page.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/Restaurant-Page",
    "https://redplusblue.github.io/Restaurant-Page/"
  ),

  new Project(
    "Knights-Travails",
    "A simple visualization of the Knight's Travails problem.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/knights-travails",
    "https://redplusblue.github.io/knights-travails/"
  ),

  new Project(
    "Tic Tac Toe",
    "A simple Tic Tac Toe game.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/tictactoe",
    "https://redplusblue.github.io/tictactoe/"
  ),

  new Project(
    "Calculator",
    "A simple calculator.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/calculator",
    "https://redplusblue.github.io/calculator/"
  ),

  new Project(
    "Library",
    "A simple library app.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/library",
    "https://redplusblue.github.io/library/"
  ),

  new Project(
    "Etch-a-sketch",
    "A simple Etch-a-sketch app.",
    ["HTML", "CSS", "JavaScript"],
    "https://github.com/redplusblue/Etch-A-Sketch",
    "https://redplusblue.github.io/Etch-A-Sketch/"
  ),

  new Project(
    "Automation Scripts",
    "A collection of automation scripts.",
    ["Python"],
    "https://github.com/redplusblue/Scripts/tree/main/Python",
    ""
  ),
];

projects.forEach((project) => addProjectToTable(project));
