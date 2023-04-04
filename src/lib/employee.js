//Employee class
class Employee {
    //The constructor function creates a blueprint for the employee class, which will have name, id and email values
        constructor({name, id, email}) {
            this.name = name;
            this.id = id;
            this.email = email;
        }
    //The get name method retrieves the inputed name for the employee
        getName() {
            return this.name;
        }
    
    //The get id method retrieves the inputed id for the employee
        getId(){
            return this.id;
        }
    
    //The get email method retrieves the inputed email for the employee
        getEmail(){
            return this.email;
        }
    }
    
    //Export employee to be accessed by the specific role classes & generate html files
    modules.exports = Employee;