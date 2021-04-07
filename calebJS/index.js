document.querySelector("#button").onclick = function(){
    document.querySelector("#confirm").innerHTML = "Order placed, Check email for confirmation";
    // make the button disappear
    document.querySelector("#button").style.display = "none";

}