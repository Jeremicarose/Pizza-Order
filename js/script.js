
















 















// front-end logic 




$(document).ready(function () {
    $("#deliver").click(function () { 
        alert("Delivery charges: $ 10 ")
        prompt("Enter you name ")
        prompt("Enter your location")
        prompt("Enter your address")
        alert("Your order will be deliver to your location")
        
    });
    $("#submit").click(function () {
        $("#receipt").slideToggle();
        $(".all").hide();
    });

    $("#order").click(function () {
        $(".all").slideToggle();
        $("#receipt").hide();
    });
});




































