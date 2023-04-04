//Importing the employee parent class
const Employee = require("./employee");

//Manager class extends the employee class
class Manager extends Employee {
    //The constructor function takes in name, id, email & office number
        constructor({name, id, email, officeNumber}) {
    //The inherited properties from the parent employee class are the name, id & email
    super({name, id, email});
        
    //Access the inputed office number for the manager
        this.officeNumber = officeNumber;
    
    //Defines the role of the manager
        this.role = "Manager";
        }
    
    //The getOfficeNumber returns the inputed office number for the manager
        getOfficeNumber(){
            return this.officeNumber;
        }
    
    //The getRole returns the intern role for the manager
        getRole(){
            return this.role;
        }
    }
    
    //Exporting intern to be accessed by the index.js & generate html files
    module.exports = Manager;