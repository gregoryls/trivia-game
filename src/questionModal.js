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

export function getQuestionData() {
  Papa.parse("../src/questions/Trivia - Questions.csv", {
    download: true,
    complete(results) {
      questionData = results.data;
      triviaBoard.createQuestionGrid(42);
      questionModal.addModalEventListener();
      console.log(results.data);
    },
  });
}

export function addQuestionModalEventListener() {
  const questions = document.querySelectorAll(".question");
  console.log(questions);
}
