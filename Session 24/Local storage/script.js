if (!localStorage.getItem("score")) localStorage.setItem("score", "0");

document.querySelector("h2").innerText = localStorage.getItem("score");

document.querySelector("button").addEventListener("click", () => {
    let currentScore = Number(localStorage.getItem("score"));
    currentScore += 1;
    document.querySelector("h2").innerText = currentScore;
    localStorage.setItem("score", currentScore);
})