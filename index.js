$(function() {

    $('button').click(function() {

        var itemamount = $("#itemAmount").val(); 	// 64.13
        var amountgiven = $("#amountGiven").val(); //  100

        var changedue = amountgiven - itemamount; // 35.87
        var dollars = Math.trunc(changedue); 	 // 35.00
        var coins = changedue - dollars;
        var quarters = Math.floor(coins / .25);
        coins = coins - quarters * .25 			// OMG, this drove me crazy!
        var dimes = Math.floor(coins / .10);
        coins = coins - dimes * .10 			// 1
        var nickels = Math.floor(coins / 0.05);
        coins = coins - nickels * 0.05 			// 0
        var pennies = Math.floor(coins / 0.01); // 2
        coins = coins - pennies * 0.01
        $("#dollar").html(dollars);
        $("#quarter").html(quarters);
        $("#dime").html(dimes);
        $("#nickel").html(nickels);
        $("#penny").html(pennies);

    });

});
