import Papa from "papaparse";
import board from "./board";

let currentScore = 0;
let questionData = [];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function addQuestionModalEventListener(playerNamesArray) {
  const questions = document.querySelectorAll(".question");
  console.log(questions);

  for (let i = 0; i < questions.length; i += 1) {
    questions[i].addEventListener("click", () => {
      // prevent tile from being opened twice
      if (questions[i].classList.contains("taken")) return;
      // associated array numbers are due to the format of question csv input
      if (i < 6) modal.innerHTML = questionData[2 * i][1];
      if (i < 12 && i > 5) modal.innerHTML = questionData[2 * i - 12][2];
      if (i < 18 && i > 11) modal.innerHTML = questionData[2 * i - 24][3];
      if (i < 24 && i > 17) modal.innerHTML = questionData[2 * i - 36][4];
      if (i < 30 && i > 23) modal.innerHTML = questionData[2 * i - 48][5];
      if (i < 36 && i > 29) modal.innerHTML = questionData[2 * i - 60][6];

      currentScore = parseInt(questions[i].textContent, 10);
      console.log(currentScore);

      // add an answer button to the modal that reveals the answer when clicked, button
      // adds before the user buttons, answer adds to bottom of modal
      const btn = document.createElement("button");
      btn.textContent = "Answer";
      btn.addEventListener("click", () => {
        // associated array numbers are due to the format of question csv input
        if (i < 6) modal.innerHTML += questionData[2 * i + 1][1];
        if (i < 12 && i > 5) modal.innerHTML += questionData[2 * i - 11][2];
        if (i < 18 && i > 11) modal.innerHTML += questionData[2 * i - 23][3];
        if (i < 24 && i > 17) modal.innerHTML += questionData[2 * i - 35][4];
        if (i < 30 && i > 23) modal.innerHTML += questionData[2 * i - 47][5];
        if (i < 36 && i > 29) modal.innerHTML += questionData[2 * i - 59][6];

        const div = document.createElement("div");
        div.classList.add("scoreButtons");
        for (let j = 0; j < 4; j++) {
          // set loop length to number of players
          // add buttons to the modal that will award points to the correct player(s)
          const btn = document.createElement("button");
          btn.textContent = playerNamesArray[j];
          btn.addEventListener("click", () => {
            // checks for clicked class added later to prevent awarding points more than once
            if (btn.classList.contains("clicked")) return;
            // get question value from the clicked tile
            currentScore = parseInt(questions[i].textContent, 10);
            // add current score to the appropriate player when clicked
            j === 0
              ? player1.displayPlayerScore(1, currentScore)
              : j === 1
              ? player2.displayPlayerScore(2, currentScore)
              : j === 2
              ? player3.displayPlayerScore(3, currentScore)
              : player4.displayPlayerScore(4, currentScore);
            btn.classList.add("clicked");
          });
          div.appendChild(btn);
        }
        modal.appendChild(div);
      });

      modal.appendChild(btn);

      addClass(questions[i], "taken");

      removeClass(modal, "hidden");
      removeClass(overlay, "hidden");
    });
  }
}

export function getQuestionData() {
  Papa.parse("../src/questions/Trivia - Questions.csv", {
    download: true,
    complete(results) {
      questionData = results.data;
      // console.log(questionData);
      board(42, results.data);
      addQuestionModalEventListener();
      // console.log(results.data);
    },
  });
}
