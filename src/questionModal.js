import board from "./board";

export const currentScore = 0;
export let questionData = [];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function addQuestionModalEventListener() {
  const questions = document.querySelectorAll(".question");
  console.log(questions);
}

export function getQuestionData() {
  Papa.parse("../src/questions/Trivia - Questions.csv", {
    download: true,
    complete(results) {
      questionData = results.data;
      board(42);
      addQuestionModalEventListener();
      console.log(results.data);
    },
  });
}
