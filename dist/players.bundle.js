/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePlayer: () => (/* binding */ generatePlayer),
/* harmony export */   generatePlayersObj: () => (/* binding */ generatePlayersObj),
/* harmony export */   initialPlayerSetup: () => (/* binding */ initialPlayerSetup),
/* harmony export */   playerNames: () => (/* binding */ playerNames)
/* harmony export */ });
function generatePlayer(name, number, score) {
  // assign to obj rather than this, since this === undefined in modules
  const obj = {};
  obj.displayPlayerName = function displayPlayerName(playerNumber) {
    document.querySelector(
      `#player${playerNumber}`,
    ).textContent = `${this.name}:`;
  };
  obj.changePlayerName = function changePlayerName() {
    const tempName = this.name;
    this.name = prompt("Please enter your name", "Josh Gunson");
    // prevent player name from disappearing by using previous name
    if (this.name === null) this.name = tempName;
    this.displayPlayerName(this.number);
    // console.log(this);
  };
  obj.incrementPlayerScore = function incrementPlayerScore(scoreToAdd) {
    this.score += scoreToAdd;
  };
  obj.displayPlayerScore = function displayPlayerScore(playerNumber) {
    document.querySelector(`#player${playerNumber}Score`).textContent =
      this.score;
  };
  obj.name = name;
  obj.score = score;
  obj.number = number;
  return obj;
}

function generatePlayersObj(playerCount) {
  const stockNames = ["Chase", "Ethan", "Stan", "Taylor"];
  const players = {};
  for (let i = 1; i < playerCount + 1; i += 1) {
    players[i] = generatePlayer(stockNames[i - 1], i, 0);
  }
  return players;
}
// const player1 = generatePlayer("Chase", 1, 0);
// const player2 = generatePlayer("Ethan", 2, 0);
// const player3 = generatePlayer("Stan", 3, 0);
// const player4 = generatePlayer("Taylor", 4, 0);

const playerNames = ["test"];

function initialPlayerSetup(
  player1,
  player2,
  player3,
  player4,
  playerObject,
) {
  const playerCount = Object.keys(playerObject).length;

  for (let i = 0; i < playerCount; i += 1) {
    // players index at 1
    // display default usernames and inital scores
    playerObject[i + 1].displayPlayerName(i + 1);
    playerObject[i + 1].displayPlayerScore(i + 1);
  }

  // // display default usernames
  // player1.displayPlayerName(1);
  // player2.displayPlayerName(2);
  // player3.displayPlayerName(3);
  // player4.displayPlayerName(4);
  // display intial player scores
  // player1.displayPlayerScore(1);
  // player2.displayPlayerScore(2);
  // player3.displayPlayerScore(3);
  // player4.displayPlayerScore(4);

  // player names can be clicked to open the change dialogue
  document.querySelector("#player1").addEventListener("click", () => {
    player1.changePlayerName();
  });
  document.querySelector("#player2").addEventListener("click", () => {
    player2.changePlayerName();
  });
  document.querySelector("#player3").addEventListener("click", () => {
    player3.changePlayerName();
  });
  document.querySelector("#player4").addEventListener("click", () => {
    player4.changePlayerName();
  });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0IsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9wbGF5ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKG5hbWUsIG51bWJlciwgc2NvcmUpIHtcclxuICAvLyBhc3NpZ24gdG8gb2JqIHJhdGhlciB0aGFuIHRoaXMsIHNpbmNlIHRoaXMgPT09IHVuZGVmaW5lZCBpbiBtb2R1bGVzXHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gZGlzcGxheVBsYXllck5hbWUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3BsYXllciR7cGxheWVyTnVtYmVyfWAsXHJcbiAgICApLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfTpgO1xyXG4gIH07XHJcbiAgb2JqLmNoYW5nZVBsYXllck5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXJOYW1lKCkge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwiSm9zaCBHdW5zb25cIik7XHJcbiAgICAvLyBwcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG51bGwpIHRoaXMubmFtZSA9IHRlbXBOYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5UGxheWVyTmFtZSh0aGlzLm51bWJlcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9O1xyXG4gIG9iai5pbmNyZW1lbnRQbGF5ZXJTY29yZSA9IGZ1bmN0aW9uIGluY3JlbWVudFBsYXllclNjb3JlKHNjb3JlVG9BZGQpIHtcclxuICAgIHRoaXMuc2NvcmUgKz0gc2NvcmVUb0FkZDtcclxuICB9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2NvcmUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuc2NvcmU7XHJcbiAgfTtcclxuICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgb2JqLnNjb3JlID0gc2NvcmU7XHJcbiAgb2JqLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJzT2JqKHBsYXllckNvdW50KSB7XHJcbiAgY29uc3Qgc3RvY2tOYW1lcyA9IFtcIkNoYXNlXCIsIFwiRXRoYW5cIiwgXCJTdGFuXCIsIFwiVGF5bG9yXCJdO1xyXG4gIGNvbnN0IHBsYXllcnMgPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tpIC0gMV0sIGksIDApO1xyXG4gIH1cclxuICByZXR1cm4gcGxheWVycztcclxufVxyXG4vLyBjb25zdCBwbGF5ZXIxID0gZ2VuZXJhdGVQbGF5ZXIoXCJDaGFzZVwiLCAxLCAwKTtcclxuLy8gY29uc3QgcGxheWVyMiA9IGdlbmVyYXRlUGxheWVyKFwiRXRoYW5cIiwgMiwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjMgPSBnZW5lcmF0ZVBsYXllcihcIlN0YW5cIiwgMywgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjQgPSBnZW5lcmF0ZVBsYXllcihcIlRheWxvclwiLCA0LCAwKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcInRlc3RcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBsYXllclNldHVwKFxyXG4gIHBsYXllcjEsXHJcbiAgcGxheWVyMixcclxuICBwbGF5ZXIzLFxyXG4gIHBsYXllcjQsXHJcbiAgcGxheWVyT2JqZWN0LFxyXG4pIHtcclxuICBjb25zdCBwbGF5ZXJDb3VudCA9IE9iamVjdC5rZXlzKHBsYXllck9iamVjdCkubGVuZ3RoO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckNvdW50OyBpICs9IDEpIHtcclxuICAgIC8vIHBsYXllcnMgaW5kZXggYXQgMVxyXG4gICAgLy8gZGlzcGxheSBkZWZhdWx0IHVzZXJuYW1lcyBhbmQgaW5pdGFsIHNjb3Jlc1xyXG4gICAgcGxheWVyT2JqZWN0W2kgKyAxXS5kaXNwbGF5UGxheWVyTmFtZShpICsgMSk7XHJcbiAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmRpc3BsYXlQbGF5ZXJTY29yZShpICsgMSk7XHJcbiAgfVxyXG5cclxuICAvLyAvLyBkaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzXHJcbiAgLy8gcGxheWVyMS5kaXNwbGF5UGxheWVyTmFtZSgxKTtcclxuICAvLyBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJOYW1lKDIpO1xyXG4gIC8vIHBsYXllcjMuZGlzcGxheVBsYXllck5hbWUoMyk7XHJcbiAgLy8gcGxheWVyNC5kaXNwbGF5UGxheWVyTmFtZSg0KTtcclxuICAvLyBkaXNwbGF5IGludGlhbCBwbGF5ZXIgc2NvcmVzXHJcbiAgLy8gcGxheWVyMS5kaXNwbGF5UGxheWVyU2NvcmUoMSk7XHJcbiAgLy8gcGxheWVyMi5kaXNwbGF5UGxheWVyU2NvcmUoMik7XHJcbiAgLy8gcGxheWVyMy5kaXNwbGF5UGxheWVyU2NvcmUoMyk7XHJcbiAgLy8gcGxheWVyNC5kaXNwbGF5UGxheWVyU2NvcmUoNCk7XHJcblxyXG4gIC8vIHBsYXllciBuYW1lcyBjYW4gYmUgY2xpY2tlZCB0byBvcGVuIHRoZSBjaGFuZ2UgZGlhbG9ndWVcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllcjEuY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyMi5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIzLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllcjQuY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==