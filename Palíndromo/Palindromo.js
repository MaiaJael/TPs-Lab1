function CheckPalindrome(word) {
    const wordArray = word.split("");
    const reverseWordArray = wordArray.reverse();
    const reverseWord = reverseWordArray.join("");

    if (word === reverseWord) {
        document.getElementById("results").innerHTML = "Es un palíndromo.";
    }
    else {
        document.getElementById("results").innerHTML = "No es un palíndromo.";
    }
}

function Process() {
 var word = document.getElementById("word").value.toLowerCase();
 word = word.replace(/ /g, "");
 console.log(word)
 CheckPalindrome(word);
}