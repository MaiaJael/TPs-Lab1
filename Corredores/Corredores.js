let runnerA;
let runnerB;
let runnerC;
let runnerD;

function Solve() {
    let exRaceResults = false

    while (exRaceResults === false) {  //mientras que el resultado del programa no sea el mismo que el ejercicio dado
        runnerA = Math.floor(Math.random() * 4) + 1
        runnerB = Math.floor(Math.random() * 4) + 1
        runnerC = Math.floor(Math.random() * 4) + 1
        runnerD = Math.floor(Math.random() * 4) + 1

        if (runnerB < runnerC && runnerD > runnerC && runnerD < runnerA) {
            exRaceResults = true
        }
    }

    ShowResults()
}

function ShowResults() {
    document.getElementById("runnerA").innerHTML = "<h4> El corredor A llegó: " + runnerA + "</h4>";
    document.getElementById("runnerB").innerHTML = "<h4> El corredor B llegó: " + runnerB + "</h4>";
    document.getElementById("runnerC").innerHTML = "<h4> El corredor C llegó: " + runnerC + "</h4>";
    document.getElementById("runnerD").innerHTML = "<h4> El corredor D llegó: " + runnerD + "</h4>";
}