const Manager = require("../lib/manager.js");

describe("Manager", () => {
    const mockManager = {
        name: "Karen",
        id: 555,
        email: "talk2karen@test.com",
        officeNumber: 666,
    };
    describe("constructor tests", () => {
        test("should construct a new instance of an manager class", () => {
         const manager = new Manager(mockManager);
         expect(manager).toBeInstanceOf(Manager);
    });
        test("should construct a new instance of an manager class with name, id, email, office number and role", () => {
         const manager = new Manager(mockManager);
         expect(manager).toEqual({
            name: "Karen",
            id: 555,
            email: "talk2karen@test.com",
            officeNumber: 666,
            role: "Manager",
         });
       });
     });
    describe("method tests", () => {
        test("should return id when the getId method is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getId()).toEqual(555);
        });

        test("should return name when the getName method is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getName()).toEqual("Karen");
        });

        test("should return name when the getEmail method is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getEmail()).toEqual("talk2karen@test.com");
        });

        test("should return the office number when the getOfficeNumber method is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getOfficeNumber()).toEqual(666);
        });

        test("should return engineer rolee when the getRole method is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});