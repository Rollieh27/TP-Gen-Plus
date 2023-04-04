const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
    const mockEngineer = {
        name: "Slash",
        id: 222,
        email: "slash@test.com",
        github: "www.github.com/jesting_around",
    };
    describe("constructor tests", () => {
        test("should construct a new instance of an engineer class", () => {
         const engineer = new Engineer(mockEngineer);
         expect(engineer).toBeInstanceOf(Engineer);
    });
        test("should construct a new instance of an engineer class with name, id, email, github profile and role", () => {
         const engineer = new Engineer(mockEngineer);
         expect(engineer).toEqual({
            name: "Slash",
            id: 222,
            email: "slash@test.com",
            github: "www.github.com/jesting_around",
            role: "Engineer",
         });
       });
     });
    describe("method tests", () => {
        test("should return id when the getId method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getId()).toEqual(222);
        });

        test("should return name when the getName method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getName()).toEqual("Slash");
        });

        test("should return name when the getEmail method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getEmail()).toEqual("slash@test.com");
        });

        test("should return github profile URL when the getGithub method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getGithub()).toEqual("www.github.com/jesting_around");
        });

        test("should return engineer role when the getRole method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});