

function SortNumbers() {
    var numberArray = document.getElementById("numbers").value.split(" ")

    //Esto es solo para poder ingresar los números
    for (var i = 0; i < numberArray.llength; i++)
        numberArray[i] = parseInt(numberArray)

    numberArray = numberArray.sort(function(a, b){return a-b});
    const highestNumber = numberArray[numberArray.length-1]
    document.getElementById("highestNumber").innerHTML = highestNumber
}