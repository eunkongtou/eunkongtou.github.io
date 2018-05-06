// function getBalance()
// {
//     var address = document.getElementById("address").value;

//     $.get("/getBalance?address=" + address, function(data){

//         if(data == "Error")
//         {
//             $("#address_balance").text("An error occured.");
//         }
//         else
//         {
//             $("#address_balance").html("余额: " + data);
//         }
//     });
// }

function sendcoin()
{
    var address_a = document.getElementById("address_a").value;
    var address_b = document.getElementById("address_b").value;
    var trans_value = document.getElementById("trans_value").value;

    var tx_hash = document.getElementById("tx_hash").value;

    //转账
    $.get("/sendcoin?address_a=" + address_a + "&address_b=" + address_b + "&trans_value=" + trans_value, function(data){

        $("#tx_hash").html("交易: " + data);

    });

}