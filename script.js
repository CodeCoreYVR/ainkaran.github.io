/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Project from "./Project.js";

const projectPackage = new Project(
  "Projects in progress",
  "Website Development",  
  1001,
  "June 5, 2021 04:00:00 EST",
  "June 15, 2021 16:00:00 EST",
  "in development",
  "June 05, 2021 04:00:00 EST", //May 26, 2021 12:00:00 EST
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="project" id="project">
    <figure class="project__image">
      <img src=${projectPackage.image} alt="" />
    </figure>
    <h1 class="project__projectInfo">${projectPackage.projectInfo}</h1>
    <ul class="project__features">
      <li class="packprop project__projectName">Project Name:<span> ${projectPackage.projectName}</span></li>
      <li class="packprop project__projectNum">Project Number:<span> ${projectPackage.projectNum}</span></li>
      <li class="packprop project__projectLength">Start date:<span> ${projectPackage.projectLength.start} inches</span></li>
      <li class="packprop project__projectLength">End date:<span> ${projectPackage.projectLength.end}</span></li>
      <li class="packprop project__lid">Status:<span> ${projectPackage.status}</span></li>
      <li class="packprop project__dateAcquired">Date acquired:<span> ${projectPackage.dateAcquired} inches</span></li>
      <li class="project__ProjectAge">Length:<span> ${projectPackage.projectAge()} hours completed</span></li>      
    </ul>
  </article>
`;

main.innerHTML = content;
