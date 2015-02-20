var pizzaPizza = function(pizzaSize) {
  var result = "";

  if (pizzaSize === "Personal") {
    result = "4";
  } else if (pizzaSize === "X-Small" || pizzaSize === "Small"  ) {
    result = "6";
  }
  return result;
};
