
function CheckText() {
    var words = document.getElementById("text").value.toLowerCase().split(" ")
    var MRW = {                 //MRW == mostRepeatedWord
        amountOfRepetitions: 0,
        wordRepeated: ""
    }

    for (var i = 0; i < words.length; i++) {

        var repetitions = 0;

        for (var n = 0; n < words.length; n++) {
            repetitions++;

            if (repetitions > MRW.amountOfRepetitions) {
                MRW.amountOfRepetitions = repetitions
                MRW.wordRepeated = words[i]
            }
        }
    }

    document.getElementById("MRW").innerHTML = MRW.wordRepeated;
}