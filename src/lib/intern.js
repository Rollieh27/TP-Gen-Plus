//Importing the employee parent class
const Employee = require("./employee");

//Intern class extends the employee class
class Intern extends Employee {
    //The constructor function takes in name, id, email & school name
        constructor({name, id, email, school}) {
    //The inherited properties from the parent employee class are the name, id & email
    super({name, id, email});
        
    //Access the inputed school name for the intern
        this.school = school;
    
    //Defines the role of the intern
        this.role = "Intern";
        }
    
    //The getSchool returns the inputed school name for the intern 
        getSchool(){
            return this.school;
        }
    
    //The getRole returns the intern role for the intern 
        getRole(){
            return this.role;
        }
    }
    
    //Exporting intern to be accessed by the index.js & generate html files
    modules.exports = Intern;