const Intern = require("../lib/intern");

describe("Intern", () => {
    const mockIntern = {
        name: "Jeff",
        id: 333,
        email: "jeff@test.com",
        github: "www.github.com/my_name_jeff",
    };
    describe("constructor tests", () => {
        Test("should construct a new instance of an intern class", () => {
         const intern = new Intern(mockIntern);
         expect(intern).toBeInstanceOf(Intern);
    });
        test("should construct a new instance of an intern class with name, id, email, school name and role", () => {
         const intern = new Intern(mockIntern);
         expect(intern).toEqual({
            name: "Jeff",
            id: 333,
            email: "jeff@test.com",
            school: "Univeristy of Miami",
            role: "Intern",
         });
       });
     });
    describe("method tests", () => {
        test("should return id when the getId method is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getId()).toEqual(333);
        });

        test("should return name when the getName method is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getName()).toEqual("Jeff");
        });

        test("should return name when the getEmail method is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getEmail()).toEqual("jeff@test.com");
        });

        test("should return github profile URL when the getSchool method is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getGithub()).toEqual("University of Miami");
        });

        test("should return intern role when the getRole method is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});