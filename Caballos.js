var slow = []
var old = []
var light = []
var rounds = 0;

function SaveData(){
    var horse1 = document.getElementById("horse1").value;
    var attribute = document.getElementById("attribute").value.split(" ");

    switch (attribute[0]) {
        case "slow":
            switch (horse1) {
                case "mack":
                    slow.push("Mack");
                    break;
                case "jack":
                    slow.push("Jack");
                    break;
                case "smith":
                    slow.push("Smith");
                    break;
                case "willy":
                    slow.push("Willy");
                    break;
            }
            break;
        case "old":
            switch (horse1) {
                case "mack":
                    old.push("Mack");
                    break;
                case "jack":
                    old.push("Jack");
                    break;
                case "smith":
                    old.push("Smith");
                    break;
                case "willy":
                    old.push("Willy");
                    break;
            }
            break;
        case "light":
            switch (horse1) {
                case "mack":
                    light.push("Mack");
                    break;
                case "jack":
                    light.push("Jack");
                    break;
                case "smith":
                    light.push("Smith");
                    break;
                case "willy":
                    light.push("Willy");
                    break;
            }
            break;
    }
    console.log("Saved");
}

function CheckAttributes(attribute) {
    var points = {
        mostPoints: 0,
        horse: ""
    }

    for (var i = 0; i < attribute.length; i++) {

        var repetitions = 0;

        for (var n = 0; n < attribute.length; n++) {
            repetitions++;

            if (repetitions > points.mostPoints) {
                points.mostPoints = repetitions;
                points.horse = attribute[i];
            }
        }
    }

    switch (rounds) {
        case 0:
            old.push(points.horse);
            break;
        case 1:
            slow.push(points.horse);
            break;
        case 2:
            light.push(points.horse);
            break;
    }
    rounds++;
}

function Reset() {
    for (var i = 0; i < old.length; i++) {
        old[i] = "";
    }
    for (var i = 0; i < slow.length; i++) {
        slow[i] = "";
    }
    for (var i = 0; i < light.length; i++) {
        light[i] = "";
    }
    document.getElementById("slowestHorse").innerHTML = "";
    document.getElementById("lightestHorse").innerHTML = "";
    document.getElementById("oldestHorse").innerHTML = "";
}

function Process() {
    CheckAttributes(old);
    console.log(rounds);
    CheckAttributes(slow);
    CheckAttributes(light);

    document.getElementById("slowestHorse").innerHTML = slow[slow.length-1];
    document.getElementById("lightestHorse").innerHTML = light[light.length-1];
    document.getElementById("oldestHorse").innerHTML = old[old.length-1];
}