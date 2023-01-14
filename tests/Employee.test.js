const employee = require("../lib/Employee");

describe("employee", () => {
  describe("employeecard", () => {
    it("should return name,email,id", () => {
      const str = "joe";
      const returned = {"name": "joe","email": "abdul@gmail.com","id": 221};

      const result = new employee("joe","abdul@gmail.com",221);

      expect(result).toEqual(returned);
    });
  })});