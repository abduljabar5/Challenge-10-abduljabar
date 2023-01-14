const managers = require("../lib/Manager");

describe("managers", () => {
  describe("managercard", () => {
    it("should return keven", () => {
      const str = "joe";
      const returned = {"name": "joe"};

      const result = new managers("joe");

      expect(result).toEqual(returned);
    });
  })});