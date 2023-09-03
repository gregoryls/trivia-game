import "./style.css";
import Papa from "papaparse";
import * as question from "./questionModal";
import * as players from "./players";
import board from "./board";

// https://stackoverflow.com/questions/56427009/how-to-return-papa-parsed-csv-via-promise-async-await
// https://stackoverflow.com/questions/62905933/iterating-over-results-of-papa-parse-object
// review these for persuing await/promises with papaparse
// TODO remove text instead of setting it to body color

// TODO remove the various console.log debugging lines

// TODO change file from source document to user uploaded via button
// expand player creation to support any number of players
// players module remove prompt for better custom solution

// Initialize the player objects
const player1 = players.generatePlayer("Chase", 1, 0);
const player2 = players.generatePlayer("Ethan", 2, 0);
const player3 = players.generatePlayer("Stan", 3, 0);
const player4 = players.generatePlayer("Taylor", 4, 0);

const playerNames = [player1.name, player2.name, player3.name, player4.name];

players.initialPlayerSetup(player1, player2, player3, player4);

const fileInput = document.getElementById("fileInput");
const upload = document.getElementById("upload");
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
// overlay provides a semi-transparent blur behind the modal to help focus attention on modal
// when the overlay background is clicked anywhere, the modal regains the hidden class and disappears
overlay.addEventListener("click", () => {
  question.addClass(modal, "hidden");
  question.addClass(overlay, "hidden");
});

upload.addEventListener("click", () => {
  // getQuestionData.csvParse(fileInput);
  getQuestionData.csvParse();
  question.getQuestionData();
  document.getElementById("uploadWrapper").remove();
});
const questionModal = (() => {
  // create a modal that contains a question based on the clicked question tile
  // TODO convert button to question square div
  // const openModalButton = document.querySelector('#helpModal');
  let currentScore = 0;
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  const removeClass = (element, className) => {
    element.classList.remove(className);
  };

  const addClass = (element, className) => {
    element.classList.add(className);
  };

  // overlay provides a semi-transparent blur behind the modal to help focus attention on modal
  // when the overlay background is clicked anywhere, the modal regains the hidden class and disappears
  overlay.addEventListener("click", () => {
    addClass(modal, "hidden");
    addClass(overlay, "hidden");
  });

  // TODO convert this into working when a question square is clicked
  const addModalEventListener = () => {
    const questions = document.querySelectorAll(".question");
    console.log(questions);

    for (let i = 0; i < questions.length; i++) {
      questions[i].addEventListener("click", () => {
        // prevent tile from being opened twice
        if (questions[i].classList.contains("taken")) return;
        // associated array numbers are due to the format of question csv input
        if (i < 6) modal.innerHTML = getQuestionData.questions[2 * i][1];
        if (i < 12 && i > 5)
          modal.innerHTML = getQuestionData.questions[2 * i - 12][2];
        if (i < 18 && i > 11)
          modal.innerHTML = getQuestionData.questions[2 * i - 24][3];
        if (i < 24 && i > 17)
          modal.innerHTML = getQuestionData.questions[2 * i - 36][4];
        if (i < 30 && i > 23)
          modal.innerHTML = getQuestionData.questions[2 * i - 48][5];
        if (i < 36 && i > 29)
          modal.innerHTML = getQuestionData.questions[2 * i - 60][6];

        currentScore = parseInt(questions[i].textContent, 10);
        console.log(currentScore);

        // add an answer button to the modal that reveals the answer when clicked, button
        // adds before the user buttons, answer adds to bottom of modal
        const btn = document.createElement("button");
        btn.textContent = "Answer";
        btn.addEventListener("click", () => {
          // associated array numbers are due to the format of question csv input
          if (i < 6) modal.innerHTML += getQuestionData.questions[2 * i + 1][1];
          if (i < 12 && i > 5)
            modal.innerHTML += getQuestionData.questions[2 * i - 11][2];
          if (i < 18 && i > 11)
            modal.innerHTML += getQuestionData.questions[2 * i - 23][3];
          if (i < 24 && i > 17)
            modal.innerHTML += getQuestionData.questions[2 * i - 35][4];
          if (i < 30 && i > 23)
            modal.innerHTML += getQuestionData.questions[2 * i - 47][5];
          if (i < 36 && i > 29)
            modal.innerHTML += getQuestionData.questions[2 * i - 59][6];

          const div = document.createElement("div");
          div.classList.add("scoreButtons");
          for (let j = 0; j < 4; j++) {
            // set loop length to number of players
            // add buttons to the modal that will award points to the correct player(s)
            const btn = document.createElement("button");
            btn.textContent = playerNames[j];
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
  };
  return { addModalEventListener, currentScore };
})();
const getQuestionData = (() => {
  // rename this to something else, final build step
  const questions = [];
  // TODO wrap parse into it's own function

  const csvParse = (csvFile) => {
    Papa.parse("../src/questions/Trivia - Questions.csv", {
      download: true,
      complete(results) {
        getQuestionData.questions = results.data;
        board(42, results.data);
        questionModal.addModalEventListener();
        // console.log(results.data);
      },
    });
  };

  return { questions, csvParse };
})();

// triviaBoard.createQuestionGrid(36);

// document.querySelector('h1').innerHTML = '<img src=\'/img/Lunar-Eclipse-Leona.webp\'>';

function importAll(x) {
  const images = {};
  x.keys().map((item, index) => {
    images[item.replace("./", "")] = x(item);
  });
  return images;
}
const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));
console.log(images);
