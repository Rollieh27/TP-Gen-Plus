//Importing the employee parent class
const Employee = require("./employee");

//Engineer class extends the employee class
class Engineer extends Employee {
    //The constructor function takes in name, id, email, & github profile
        constructor({name, id, email, github}) {
    //The inherited properties from the parent employee class are the name, id & email
    super({name, id, email});
        
    //Access the inputed github profile for the engineer
        this.github = github;
    
    //Defines the role of the engineer
        this.role = "Engineer";
        }
    
    //The getGithub returns the inputed github profile for the engineer 
        getGithub(){
            return this.github;
        }
    
    //The getRole returns the engineer role for the engineer
        getRole(){
            return this.role;
        }
    }
    
    //Export engineer to be accessed by the index.js & generate html files
    module.exports = Engineer;