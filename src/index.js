import "./style.css";
import Papa from "papaparse";
import * as question from "./questionModal";
import * as players from "./players";
import * as board from "./board";

// https://stackoverflow.com/questions/56427009/how-to-return-papa-parsed-csv-via-promise-async-await
// https://stackoverflow.com/questions/62905933/iterating-over-results-of-papa-parse-object
// review these for persuing await/promises with papaparse
// TODO remove text instead of setting it to body color

// TODO remove the various console.log debugging lines

// TODO change file from source document to user uploaded via button
// expand player creation to support any number of players
// players module remove prompt for better custom solution
// one option for images, if (question data === img file name) set img
// expand stock names

// Initialize the player objects
const player1 = players.generatePlayer("Chase", 1, 0);
const player2 = players.generatePlayer("Ethan", 2, 0);
const player3 = players.generatePlayer("Stan", 3, 0);
const player4 = players.generatePlayer("Taylor", 4, 0);

console.log(players.generatePlayersObj(4));

const playerNames = [player1.name, player2.name, player3.name, player4.name];

players.initialPlayerSetup(player1, player2, player3, player4);

// const fileInput = document.getElementById("fileInput");
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
  // getQuestionData.csvParse();
  question.getQuestionData();
  document.getElementById("uploadWrapper").classList.add("hidden");
});

const getQuestionData = (() => {
  // rename this to something else, final build step
  const questions = [];
  // TODO wrap parse into it's own function

  const csvParse = () => {
    Papa.parse("../src/questions/Trivia - Questions.csv", {
      download: true,
      complete(results) {
        getQuestionData.questions = results.data;
        board.createQuestionGrid(42, results.data);
        questionModal.addModalEventListener();
        // console.log(results.data);
      },
    });
  };

  return { questions, csvParse };
})();

function importAll(r) {
  const images = {};
  // enclosing bracket around return to avoid ambiguous assignment in a return
  r.keys().forEach((key) => {
    // remove leading ./ from file names
    const temp = key.replace("./", "");
    // or option fix case where lastIndexOf === -1
    // remove trailing file extensions from file names (e.g. .png)
    const temp2 = temp.substr(0, temp.lastIndexOf(".")) || temp;
    // console.log(temp2);
    images[temp2] = r(key);
  });
  // alternate map method
  // r.keys().map((item, index) => {
  //   images[item.replace("./", "")] = r(item);
  // });
  return images;
}

const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));
// console.log(images);
