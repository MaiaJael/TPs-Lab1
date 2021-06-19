function Calculate() {
    const firstMidTerm = parseInt(document.getElementById("firstMidTerm").value);
    const secondMidTerm = parseInt(document.getElementById("secondMidTerm").value);
    const thirdMidTerm = parseInt(document.getElementById("thirdMidTerm").value);

    const averageMidTerms = ((firstMidTerm + secondMidTerm + thirdMidTerm) / 3) * 0.55;
    const finalExam = parseInt(document.getElementById("finalExam").value) * 0.30;
    const finalWork = parseInt(document.getElementById("finalWork").value) * 0.15;

    document.getElementById("finalMark").innerHTML = averageMidTerms + finalExam + finalWork;
}