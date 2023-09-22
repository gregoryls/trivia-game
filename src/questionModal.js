import Papa from "papaparse";
import * as board from "./board";
import * as players from "./players";

let questionData = [];

// convert this to a function in players module
export const playerObj = players.generatePlayersObj(4);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function generateQuestionObjectFromCSV() {
  const questionObj = {};

  for (let i = 0; i < questionData.length / 2; i += 1) {
    questionObj[`category${i}`] = {
      topic: questionData[2 * i][0],
    };
    for (let j = 0; j < questionData[0].length; j += 1) {
      // console.log(questionData[2 * i].length);
      questionObj[`category${i}`][`question${j}`] = {
        question: questionData[2 * i][j],
        answer: questionData[2 * i + 1][j],
      };
      // questionObj[i][`question${j}`] = questionData[2 * i][j];
      // questionObj[i][`answer${j}`] = questionData[2 * i + 1][j];
    }
  }
  return questionObj;
}

export function addQuestionModalEventListener(questionObject) {
  const questionTiles = document.querySelectorAll(".question");
  console.log(questionTiles);
  for (let i = 0; i < questionTiles.length; i += 1) {
    let currentScore = 0;
    questionTiles[i].addEventListener("click", () => {
      if (questionTiles[i].classList.contains("taken")) return;
      if (i < 6)
        modal.innerHTML = questionObject[`category${i}`].question1.question;
      if (i < 12 && i > 5)
        modal.innerHTML = questionObject[`category${i - 6}`].question2.question;
      if (i < 18 && i > 11)
        modal.innerHTML =
          questionObject[`category${i - 12}`].question3.question;
      if (i < 24 && i > 17)
        modal.innerHTML =
          questionObject[`category${i - 18}`].question4.question;
      if (i < 30 && i > 23)
        modal.innerHTML =
          questionObject[`category${i - 24}`].question5.question;
      if (i < 36 && i > 29)
        modal.innerHTML =
          questionObject[`category${i - 30}`].question6.question;

      currentScore = parseInt(questionTiles[i].textContent, 10);
      console.log(currentScore);

      const btn = document.createElement("button");
      btn.textContent = "Answer";

      btn.addEventListener("click", () => {
        if (btn.classList.contains("buttonDisabled")) return;
        btn.classList.add("buttonDisabled");

        const playerNames = [
          playerObj[1].name,
          playerObj[2].name,
          playerObj[3].name,
          playerObj[4].name,
        ];

        if (i < 6)
          modal.innerHTML = questionObject[`category${i}`].question1.answer;
        if (i < 12 && i > 5)
          modal.innerHTML = questionObject[`category${i - 6}`].question2.answer;
        if (i < 18 && i > 11)
          modal.innerHTML =
            questionObject[`category${i - 12}`].question3.answer;
        if (i < 24 && i > 17)
          modal.innerHTML =
            questionObject[`category${i - 18}`].question4.answer;
        if (i < 30 && i > 23)
          modal.innerHTML =
            questionObject[`category${i - 24}`].question5.answer;
        if (i < 36 && i > 29)
          modal.innerHTML =
            questionObject[`category${i - 30}`].question6.answer;

        const div = document.createElement("div");
        div.classList.add("scoreButtons");

        for (let j = 0; j < playerNames.length; j += 0) {
          const scoreButton = document.createElement("button");
          scoreButton.textContent = playerNames[j];
        }
      });
    });
  }
}

export function addQuestionModalEventListenerBackup() {
  const questionTiles = document.querySelectorAll(".question");
  // console.log(questionTiles);
  // console.log(playerNames);

  for (let i = 0; i < questionTiles.length; i += 1) {
    let currentScore = 0;
    questionTiles[i].addEventListener("click", () => {
      // modal.innerHTML = "";
      // prevent tile from being opened twice
      if (questionTiles[i].classList.contains("taken")) return;
      // associated array numbers are due to the format of question csv input
      if (i < 6) modal.innerHTML = questionData[2 * i][1];
      if (i < 12 && i > 5) modal.innerHTML = questionData[2 * i - 12][2];
      if (i < 18 && i > 11) modal.innerHTML = questionData[2 * i - 24][3];
      if (i < 24 && i > 17) modal.innerHTML = questionData[2 * i - 36][4];
      if (i < 30 && i > 23) modal.innerHTML = questionData[2 * i - 48][5];
      if (i < 36 && i > 29) modal.innerHTML = questionData[2 * i - 60][6];

      currentScore = parseInt(questionTiles[i].textContent, 10);
      console.log(currentScore);

      // add an answer button to the modal that reveals the answer when clicked, button
      // adds before the user buttons, answer adds to bottom of modal
      const btn = document.createElement("button");
      btn.textContent = "Answer";

      btn.addEventListener("click", () => {
        btn.classList.add("buttonDisabled");
        const playerNames = [
          playerObj[1].name,
          playerObj[2].name,
          playerObj[3].name,
          playerObj[4].name,
        ];
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
          btn.textContent = playerNames[j];
          btn.addEventListener("click", () => {
            // checks for clicked class added later to prevent awarding points more than once
            if (btn.classList.contains("buttonDisabled")) return;
            // get question value from the clicked tile
            // currentScore = parseInt(questionTiles[i].textContent, 10);
            // add current score to the appropriate player when clicked
            j === 0
              ? playerObj[1].displayPlayerScore(1, currentScore)
              : j === 1
              ? playerObj[2].displayPlayerScore(2, currentScore)
              : j === 2
              ? playerObj[3].displayPlayerScore(3, currentScore)
              : playerObj[4].displayPlayerScore(4, currentScore);
            btn.classList.add("buttonDisabled");
          });
          div.appendChild(btn);
        }
        modal.appendChild(div);
      });

      modal.appendChild(btn);

      addClass(questionTiles[i], "taken");

      removeClass(modal, "hidden");
      removeClass(overlay, "hidden");
    });
  }
}

export function getQuestionData(csvFile) {
  // "../src/questions/Trivia - Questions.csv" local filename
  Papa.parse(csvFile.files[0], {
    download: true,
    complete(results) {
      questionData = results.data;
      console.log(questionData);
      board.createQuestionGrid(42, results.data);
      console.log(generateQuestionObjectFromCSV());
      addQuestionModalEventListener(generateQuestionObjectFromCSV());
      // addQuestionModalEventListenerBackup();
      // console.log(results.data);
    },
  });
}
