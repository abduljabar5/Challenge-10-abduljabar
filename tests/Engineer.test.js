const employee = require("../lib/Engineer");

describe("engineer", () => {
  describe("engineercard", () => {
    it("should return github name", () => {
      const returned = {"github": "abduljabar5"};

      const result = new employee("abduljabar5");

      expect(result).toEqual(returned);
    });
  })});