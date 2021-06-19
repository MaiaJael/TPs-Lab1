function Process() {
    const departure = {
        hour: parseInt(document.getElementById("departureHour").value),
        minute: parseInt(document.getElementById("departureMinute").value),
        second: parseInt(document.getElementById("departureSecond").value)
    }
    const tripSeconds = parseInt(document.getElementById("tripSeconds").value);

    const totalSeconds = departure.hour * 3600 + departure.minute * 60 + departure.second + tripSeconds;
    let arrivalHour = Math.floor(totalSeconds / 3600);
    const arrivalMinute = Math.floor(totalSeconds / 60) - arrivalHour * 60;
    const arrivalSecond = totalSeconds - arrivalHour * 3600 - arrivalMinute * 60;

    while (arrivalHour > 24) {
        arrivalHour -= 24;
    }

    document.getElementById("timeOfArrival").innerHTML =
        arrivalHour + " : " + arrivalMinute + " : " + arrivalSecond;
}