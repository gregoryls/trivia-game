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

export function getQuestionCount(questionObject) {}

export function addQuestionModalEventListener(questionObject) {
  const questionTiles = document.querySelectorAll(".question");
  console.log(questionTiles);
  for (let i = 0; i < questionTiles.length; i += 1) {
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
        const playerCount = playerNames.length;

        if (i < 6)
          modal.innerHTML += questionObject[`category${i}`].question1.answer;
        if (i < 12 && i > 5)
          modal.innerHTML +=
            questionObject[`category${i - 6}`].question2.answer;
        if (i < 18 && i > 11)
          modal.innerHTML +=
            questionObject[`category${i - 12}`].question3.answer;
        if (i < 24 && i > 17)
          modal.innerHTML +=
            questionObject[`category${i - 18}`].question4.answer;
        if (i < 30 && i > 23)
          modal.innerHTML +=
            questionObject[`category${i - 24}`].question5.answer;
        if (i < 36 && i > 29)
          modal.innerHTML +=
            questionObject[`category${i - 30}`].question6.answer;

        const div = document.createElement("div");
        div.classList.add("scoreButtons");

        for (let j = 0; j < playerCount; j += 1) {
          const currentScore = parseInt(questionTiles[i].textContent, 10);

          const scoreButton = document.createElement("button");
          scoreButton.textContent = playerNames[j];
          scoreButton.addEventListener("click", () => {
            if (scoreButton.classList.contains("buttonDisabled")) return;
            playerObj[j + 1].displayPlayerScore(j + 1, currentScore);
            scoreButton.classList.add("buttonDisabled");
          });
          div.append(scoreButton);
        }
        modal.append(div);
      });
      modal.append(btn);

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
      const questionObj = generateQuestionObjectFromCSV();
      console.log(questionData);
      board.createQuestionGrid(42, questionObj);
      console.log(questionObj);
      addQuestionModalEventListener(questionObj);
      // console.log(results.data);
    },
  });
}
