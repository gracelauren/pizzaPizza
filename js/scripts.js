var pizzaPizza = function(pizzaSize) {
  var result = "";

  if (pizzaSize === "Personal") {
    result = "4";
  } else if (pizzaSize === "X-Small" || pizzaSize === "Small"  ) {
    result = "6";
  } else if (pizzaSize === "Medium" ) {
    result = "8";
  } else if (pizzaSize === "Large" ) {
    result = "10";
  } else {
    result = "12";
  }
  return result;
};
