// back-end logic



// function y () {
//     var meat= ["Chicken","Sausage" ,"Beef"]
//     var veggie= ["Tomatoes","Pineaple" , "Spinach"]
//     var crust= ["Cripsy", "Stuffed", "Giuten-free"]
//     var size= ["Medium", "Small", "Large"]
//     meat.forEach(function (meat) {
        
//     })
    
    
// };

// function totalSize(size) {
//     if(size==="small")
//     return   5
//     else if(size==="medium")
//     return  15
//     else if(size==="large");
// }
// function totalMeat(meat) {
//     if(size==="chicken")
//     return   5
//     else if(size==="sausage")
//     return  15
//     else if(size==="beef");
// }
// function totalCheese(cheese) {
//     if(size==="regular cheese")
//     return   1
//     else if(size==="no cheese")
//     return  0
//     else if(size==="extracheese");
// }
// function totalSize() {
//     if(size==="small")
//     return   5
//     else if(size==="medium")
//     return  15
//     else if(size==="large");
// }
// function totalSize(size) {
//     if(size==="small")
//     return   5
//     else if(size==="medium")
//     return  15
//     else if(size==="large");
// }
    




















































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
    var big =$("input[name=round 1]:checked").val();
    $("h3").html(big);
});




































