const intern = require("../lib/Intern");



describe("intern", () => {
  describe("interncard", () => {
    it("should return school name", () => {
      const returned = {"school": "UOM"};

      const result = new intern("UOM");

      expect(result).toEqual(returned);
    });
  })});