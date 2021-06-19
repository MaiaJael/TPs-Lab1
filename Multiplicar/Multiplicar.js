function Multiply() {
    var multiplicand = Number(document.getElementById("multiplicand").value);
    var multiplier = Number(document.getElementById("multiplier").value);
    var product = 0;

    for (var i = 0; i < multiplier; i++) {
        product = product + multiplicand;
    }
    document.getElementById("product").innerHTML = product;
}