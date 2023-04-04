const Employee = require("../lib/employee");

describe("Employee", () => {
    const mockEmployee = {
        name: "Rollie",
        id: 111,
        email: "Rollie@test.com",
    };
    describe("constructor tests", () => {
        Test("should construct a new instance of an employee class", () => {
         const employee = new Employee(mockEmployee);
         expect(employee).toBeInstanceOf(Employee);
    });
        test("should construct a new instance of an employee class with name, id, email", () => {
         const employee = new Employee(mockEmployee);
         expect(employee).toEqual({
            name: "Rollie",
            id: 111,
            email: "rollie@test.com",
            role: "Employee"
         });
       });
     });
    describe("method tests", () => {
        test("should return id when the getId method is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual(111);
        });

        test("should return name when the getName method is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getName()).toEqual("Rollie");
        });

        test("should return name when the getEmail method is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getEmail()).toEqual("rollie@test.com");
        });

        test("should return employee role when the getRole method is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});