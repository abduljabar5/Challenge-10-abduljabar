const managers = require("../lib/Manager");

describe("managers", () => {
  describe("managercard", () => {
    it("should return keven", () => {
      const returned = {"name": "joe"};

      const result = new managers("joe");

      expect(result).toEqual(returned);
    });
  })});