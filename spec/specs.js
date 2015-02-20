describe("pizzaPizza", function() {

  it("A personal pizza with a diameter of 6 inches has 4 pieces", function() {
    expect(pizzaPizza("Personal")).to.equal("4");
  });

  it("A x-small with a diameter of 8 inches respectively has 6 pieces", function() {
    expect(pizzaPizza("X-Small")).to.equal("6");
  });

  it("A small pizza with a diameter of 10 inches respectively has 6 pieces", function() {
    expect(pizzaPizza("Small")).to.equal("6");
  });

  it("A medium twelve inch pizza has 8 pieces", function() {
    expect(pizzaPizza("Medium")).to.equal("8");
  });

  it("A large 14 inch pizza has 10 pieces", function() {
    expect(pizzaPizza("Large")).to.equal("10");
  });

  it("A x-large 16 inch pizza has 12 pieces", function() {
    expect(pizzaPizza("X-Large")).to.equal("12");
  });

});
