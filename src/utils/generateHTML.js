//Fs is imported
const fs = require("fs");
//The path is imported
const path = require("path");
//The template directory is imported
const templatesDir = path.resolve(__dirname, "../templates");

//Generate html function takes in the employee  array
const generateHTML = (employees) => {
//HTML is declared as an aempty array
const HTML = [];
//The objects in the employees array will be filtered by role & the corresponding function will be used to create an employee of that type.
//All of these objects are then pushed into the HTML array
  HTML.push(
    employees
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => renderManager(manager))
  );
  HTML.push(
    employees
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => renderEngineer(engineer))
  );
  HTML.push(
    employees
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => renderIntern(intern))
  );

  //console.log(HTML, "generateHTML.js");

  //The object in the html array are then joined and passed into the render full markdown function
    return renderFullMarkdown(HTML.join(""));
};

//The render manager function takes in the new instance of the manager class
const renderManager = (manager) => {
//The manager.html template file is read to create the manager HTML markdown with the user input
let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),"utf8"
);
//Changes placeholders in manager.html file with actual user-inputed values for the name, id, role, email & office number keys in the manager object
template = replaceTemplates(template, "name", manager.getName());
template = replaceTemplates(template, "id", manager.getId());
template = replaceTemplates(template, "role", manager.getRole());
template = replaceTemplates(template, "email", manager.getEmail());
template = replaceTemplates(template, "officeNumber", manager.getOfficeNumber());
//The updated template is returned
console.log();
return template;
};

//The render engineer function takes in the new instance of the engineer class
const renderEngineer = (engineer) => {
//The engineer.html template file is read to create the engineer HTML markdown with the user input
let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),"utf8"
);
//Changes placeholders in engineer.html file with actual user-inputed values for the name, id, role, email & github keys in the engineer object
template = replaceTemplates(template, "name", engineer.getName());
template = replaceTemplates(template, "id", engineer.getId());
template = replaceTemplates(template, "role", engineer.getRole());
template = replaceTemplates(template, "email", engineer.getEmail());
template = replaceTemplates(template, "github", engineer.getGithub());
//The updated template is returned
return template;
};

//The render intern function takes in the new instance of the intern class
const renderIntern = (intern) => {
//The intern.html template file is read to create the intern HTML markdown with the user input
let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),"utf8"
);
//Changes placeholders in intern.html file with actual user-inputed values for the name, id, role, email & school keys in the intern object
template = replaceTemplates(template, "name", intern.getName());
template = replaceTemplates(template, "id", intern.getId());
template = replaceTemplates(template, "role", intern.getRole());
template = replaceTemplates(template, "email", intern.getEmail());
template = replaceTemplates(template, "school", intern.getSchool());
//The updated template is returned
return template;
};

//Render full markdown function had HTML passed in
const renderFullMarkdown = (HTML) => {
    //The full markdown html file is accessed
    let template = fs.readFileSync(
        path.resolve(templatesDir, "full-markdown.html"),"utf8"
    );
    //The replace templates function is returned, taking in the template, team, & HTML to update the markdown file
    return replaceTemplates(template, "team", HTML);
};

//The replace templates function takes in the template, placeholder & value
const replaceTemplates = (template, placeholder, value) => {
    //The pattern are the values between the double curly brackets
    const pattern = new RegExp(`{{${placeholder}}}`, "gm");
    //The replace method will replace anything between the double curly bracket placeholders with the actual user-inputed values
    return template.replace(pattern, value);
};

//Generate html is exported, so it can be accessed by the index.js file
module.exports = generateHTML;