var Pizza = {
  topping: "",
  diameter: "",

  init: function() {
    topping: "";
    diameter: "";
  },

   pizzaSlices: function() {
    var pizzaSize = this.diameter;
    var pizzaTopping = this.topping;
    var result = "";

    if (pizzaSize === "Personal" && pizzaTopping !== "Pepperoni")  {
      result = "4";
    } else if (pizzaSize === "X-Small" || pizzaSize === "Small" || pizzaTopping === "Pepperoni") {
      result = "6";
    } else if (pizzaSize === "Medium" && pizzaTopping !== "Pepperoni") {
      result = "8";
    } else if (pizzaSize === "Large" && pizzaTopping !== "Pepperoni") {
      result = "10";
    } else if (pizzaSize === "X-Large" && pizzaTopping !== "Pepperoni") {
      result = "12";
    }
    return result;
  }

};


$(function() {
  $('.styleMe [type="text"]').blur(function(){
    if($(this).val().length > 0){
      $(this).next().children().css('color', "transparent");
    } else {
      $(this).next().children().css('color', "#000");
    }
  });

  $(".styleMe-radio input[type=radio]").click(function() {
  $('label.radio').removeClass('selected');
    var inputID = $(this).attr('id');
    if ($(this).is(':checked')) {
      $('.' + inputID).addClass('selected');
    } else {
      $('.' + inputID).removeClass('selected');
    }
  });


  $("#pizzaType").submit(function(event) {
    event.preventDefault();
    var newPizza = Object.create(Pizza);
    newPizza.init();

    var customerPizzaSize = $( "#pizzaSize" ).val();
    newPizza.diameter = customerPizzaSize;
    var customerToppings = $('input[name="toppings"]:checked', '#pizzaType').val();
    newPizza.topping = customerToppings;

    var pizzaOrderSlices =  newPizza.pizzaSlices();
    var pizzaOrder =  customerPizzaSize +  " "  + customerToppings;
    $(".customerOrder").text(pizzaOrder);
    $(".slicesInOrder").text(pizzaOrderSlices);

    $("#order").show();

    // $("form")[0].reset();
    // $("input:radio").attr("checked", false);
  });
});


// add and remove class for toppings display svg pizza size
