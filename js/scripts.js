var pizzaSlices = function(pizzaSize) {
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

    var customerPizzaSize = $( "#pizzaSize" ).val();
    // var customerToppings = $("#toppings").val();

     var customerToppings = $('input[name="toppings"]:checked', '#pizzaType').val();

    var pizzaOrderSlices =  pizzaSlices(customerPizzaSize);
    var pizzaOrder =  customerPizzaSize +  " "  + customerToppings;
    $(".customerOrder").text(pizzaOrder);
    $(".slicesInOrder").text(pizzaOrderSlices);

    $("#order").show();

    $("form")[0].reset();
  });
});


// add and remove class for toppings display svg pizza size
