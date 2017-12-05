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


