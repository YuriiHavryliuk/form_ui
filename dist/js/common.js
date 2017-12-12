	// function plus and minus
	$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// function find total item * price

function total1(o)
{
    var price = $('.price').text();

var total1 = (o.value * price);
$('.total1').text(total1);
}

function total2(o)
{
    var price = $('.price1').text();
var total2 = (o.value * price);
$('.total2').text(total2);
}

function total3(o)
{
    var price = $('.price2').text();
var total3 = (o.value * price);
$('.total3').text(total3);
}


// function find subtotal

function subtotal()
{
    var totalPrice1 = $('.total1').text();
    var totalPrice2 = $('.total2').text();
    var totalPrice3 = $('.total3').text();

var subtotal = Number(totalPrice1) + Number(totalPrice2) + Number(totalPrice3);

$('.subtotal').text(subtotal);
}





// function check number 
function check_number(){
        if((event.keyCode < 48)||(event.keyCode > 57)) event.returnValue=false;

}



// function of the output of a dependent list
var cities = {
  usa: ["California", "Los Angeles", "Detroit", "Philadelphia", "Boston"],
  ukraine: ["Киев", "Харьков", "Полтава", "Чернигов", "Ровно"],
  germany: ["Werder", "München", "Bremen"] 
};
var country = document.getElementById("country");
var city = document.querySelector("#city");
window.onload = selectCountry;
country.onchange = selectCountry;

function selectCountry(ev){
  city.innerHTML = "";
  var c = this.value || "usa", o;
  for(let i = 0; i < cities[c].length; i++){
    o = new Option(cities[c][i],i,false,false);
    city.add(o);
  };
}

//function next input (number of card)
function nextJump(x) {
	if (x.value.length == 4) {
		
		do {
			x = x.nextSibling;
		}
		while (x && !(/text/.test(x.type)));
		if (x && /text/.test(x.type)) {
			$(x).select();
		}
	}
}

