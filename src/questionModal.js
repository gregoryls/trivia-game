export let currentScore = 0;
export let questions = [];

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
    complete: function (results) {
      questions = results.data;
      triviaBoard.createQuestionGrid(42);
      questionModal.addModalEventListener();
      console.log(results.data);
    },
  });
}

export function addQuestionModalEventListener() {
  let questions = document.querySelectorAll(".question");
  console.log(questions);
}
