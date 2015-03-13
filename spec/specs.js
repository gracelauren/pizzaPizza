describe('Pizza', function() {

  describe('init', function() {
    it('will give an instance of Pizza its own toppings', function() {
      var test = Object.create(Pizza);
      test.init();
      expect(test.toppings).to.eql("");
    });

    it('will give an instance of Pizza its own diameter', function() {
      var test1 = Object.create(Pizza);
      test1.init();
      expect(test1.diameter).to.eql("");
    });
  });

  describe("pizzaSlices", function() {
    it("A personal pizza with a diameter of 6 inches and cheese topping has 4 pieces", function() {
      var test2 = Object.create(Pizza);
      test2.init();
      test2.diameter = "Personal";
      test2.toppings = "Cheese";
      expect(test2.pizzaSlices()).to.equal("4");
    });

    it("A x-small with a diameter of 8 inches and cheese topping respectively has 6 pieces", function() {
      var test3 = Object.create(Pizza);
      test3.init();
      test3.diameter = "X-Small";
      test3.toppings = "Cheese";
      expect(test3.pizzaSlices()).to.equal("6");
    });

    it("A small pizza with a diameter of 10 inches and cheese topping respectively has 6 pieces", function() {
      var test4 = Object.create(Pizza);
      test4.init();
      test4.diameter = "Small";
      test4.toppings = "Cheese";
      expect(test4.pizzaSlices()).to.equal("6");
    });

    it("A medium twelve inch pizza has 8 and cheese topping pieces", function() {
      var test5 = Object.create(Pizza);
      test5.init();
      test5.diameter = "Medium";
      test5.toppings = "Cheese";
      expect(test5.pizzaSlices()).to.equal("8");
    });

    it("A large 14 inch pizza has 10 and cheese topping pieces", function() {
      var test6 = Object.create(Pizza);
      test6.init();
      test6.diameter = "Large";
      test6.toppings = "Cheese";
      expect(test6.pizzaSlices()).to.equal("10");
    });

    it("A x-large 16 inch pizza has 12 and cheese topping pieces", function() {
      var test7 = Object.create(Pizza);
      test7.init();
      test7.diameter = "X-Large";
      test7.toppings = "Cheese";
      expect(test7.pizzaSlices()).to.equal("12");
    });

    it("A pepperonni pizza always has 6 pieces", function() {
      var test6 = Object.create(Pizza);
      test6.init();
      test6.diameter = "Large";
      test6.toppings = "Pepperoni";
      expect(test6.pizzaSlices()).to.equal("6");
    });
  });
});
