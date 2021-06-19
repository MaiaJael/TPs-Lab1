function ConvertToDollars() {
    const oneEuro = parseInt(document.getElementById("oneEuro").value);
    const twoEuros = parseInt(document.getElementById("twoEuros").value) * 2;
    const fiftyCents = parseInt(document.getElementById("fiftyCents").value) * 0.5;
    const twentyCents = parseInt(document.getElementById("twentyCents").value) * 0.2;
    const tenCents = parseInt(document.getElementById("tenCents").value) * 0.1;

    const totalEuros =
        oneEuro + twoEuros + fiftyCents + twentyCents + tenCents;

    const totalDollars = totalEuros * 1.19;

    document.getElementById("usdMoney").innerHTML = totalDollars.toFixed(2) + "U$D"
}