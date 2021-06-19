var participants = {
    height: [0],
    age: [0],
    gender: ["a"]
}

var numberOfParticipant = 0;
var averageMaleHeight = 0;
var averageFemaleHeight = 0;
var averageAge = 0;
var amountOfWomen = 0;
var amountOfMen = 0;

function SaveData(){
    if (numberOfParticipant !== 10) {
        numberOfParticipant++
        participants.height[numberOfParticipant] = parseInt(document.getElementById("height").value);
        participants.age[numberOfParticipant] = parseInt(document.getElementById("age").value);
        participants.gender[numberOfParticipant] = document.getElementById("gender").value;
        document.getElementById("notice").innerHTML = "";

        if (participants.height[numberOfParticipant] === 0 || participants.age[numberOfParticipant] === 0 || participants.height[numberOfParticipant] == null) {
            document.getElementById("notice").innerHTML = "Falta ingresar datos.";
            numberOfParticipant--;
        }
    }
    else {
        document.getElementById("notice").innerHTML = "Cantidad máxima de participantes alcanzada.";
    }
}

function CalculateAverages(){
    if (numberOfParticipant === 10) {
        for (var i = 1; i < 11; i++) {
            if (participants.gender[i] === "female") {
                averageFemaleHeight += participants.height[i];
                amountOfWomen++
                console.log(averageFemaleHeight)
            }
            else {
                averageMaleHeight += participants.height[i];
                amountOfMen++
            }
            averageAge += participants.age[i];
        }
        averageAge = averageAge / 10;
        averageFemaleHeight = averageFemaleHeight / amountOfWomen;
        averageMaleHeight = averageMaleHeight / amountOfMen;

    }
}

function UpdateData() {
    document.getElementById("ageData").innerHTML = averageAge;
    document.getElementById("femaleHeightData").innerHTML = averageFemaleHeight;
    document.getElementById("maleHeightData").innerHTML = averageMaleHeight;
}

function CalculateAndUpdate() {
    if (numberOfParticipant !== 10) {
        document.getElementById("notice").innerHTML = "No hay suficientes participantes para calcular el promedio.";
    }
    else{
        document.getElementById("notice").innerHTML = "";
        CalculateAverages();
        UpdateData();
    }
}