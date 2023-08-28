let currentScore = 0;

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function addClass(element, className) {
  element.classList.add(className);
}
