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
  obj.displayPlayerScore = function displayPlayerScore(
    playerNumber,
    scoreToAdd,
  ) {
    // thank about splitting this function into two functions
    this.score += scoreToAdd;
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

function initialPlayerSetup(player1, player2, player3, player4) {
  // display default usernames
  player1.displayPlayerName(1);
  player2.displayPlayerName(2);
  player3.displayPlayerName(3);
  player4.displayPlayerName(4);
  // display intial (zero) player scores
  player1.displayPlayerScore(1, 0);
  player2.displayPlayerScore(2, 0);
  player3.displayPlayerScore(3, 0);
  player4.displayPlayerScore(4, 0);
  // allow players to change their displayed name
  const userName = (player) => {
    const tempName = player.name;
    player.name = prompt("Please Enter your name", "Josh Gunson");
    // prevent player name from disappearing by using previous name
    if (player.name === null) player.name = tempName;
    player.displayPlayerName(player.number);
  };
  // player names can be clicked to open the change dialogue
  document.querySelector("#player1").addEventListener("click", () => {
    userName(player1);
  });
  document.querySelector("#player2").addEventListener("click", () => {
    userName(player2);
  });
  document.querySelector("#player3").addEventListener("click", () => {
    userName(player3);
  });
  document.querySelector("#player4").addEventListener("click", () => {
    userName(player4);
  });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0IsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3BsYXllcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXIobmFtZSwgbnVtYmVyLCBzY29yZSkge1xyXG4gIC8vIGFzc2lnbiB0byBvYmogcmF0aGVyIHRoYW4gdGhpcywgc2luY2UgdGhpcyA9PT0gdW5kZWZpbmVkIGluIG1vZHVsZXNcclxuICBjb25zdCBvYmogPSB7fTtcclxuICBvYmouZGlzcGxheVBsYXllck5hbWUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyTmFtZShwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9YCxcclxuICAgICkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9OmA7XHJcbiAgfTtcclxuICBvYmouZGlzcGxheVBsYXllclNjb3JlID0gZnVuY3Rpb24gZGlzcGxheVBsYXllclNjb3JlKFxyXG4gICAgcGxheWVyTnVtYmVyLFxyXG4gICAgc2NvcmVUb0FkZCxcclxuICApIHtcclxuICAgIC8vIHRoYW5rIGFib3V0IHNwbGl0dGluZyB0aGlzIGZ1bmN0aW9uIGludG8gdHdvIGZ1bmN0aW9uc1xyXG4gICAgdGhpcy5zY29yZSArPSBzY29yZVRvQWRkO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYCkudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLnNjb3JlO1xyXG4gIH07XHJcbiAgb2JqLm5hbWUgPSBuYW1lO1xyXG4gIG9iai5zY29yZSA9IHNjb3JlO1xyXG4gIG9iai5udW1iZXIgPSBudW1iZXI7XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyc09iaihwbGF5ZXJDb3VudCkge1xyXG4gIGNvbnN0IHN0b2NrTmFtZXMgPSBbXCJDaGFzZVwiLCBcIkV0aGFuXCIsIFwiU3RhblwiLCBcIlRheWxvclwiXTtcclxuICBjb25zdCBwbGF5ZXJzID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwbGF5ZXJDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbaSAtIDFdLCBpLCAwKTtcclxuICB9XHJcbiAgcmV0dXJuIHBsYXllcnM7XHJcbn1cclxuLy8gY29uc3QgcGxheWVyMSA9IGdlbmVyYXRlUGxheWVyKFwiQ2hhc2VcIiwgMSwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjIgPSBnZW5lcmF0ZVBsYXllcihcIkV0aGFuXCIsIDIsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXIzID0gZ2VuZXJhdGVQbGF5ZXIoXCJTdGFuXCIsIDMsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXI0ID0gZ2VuZXJhdGVQbGF5ZXIoXCJUYXlsb3JcIiwgNCwgMCk7XHJcblxyXG5leHBvcnQgY29uc3QgcGxheWVyTmFtZXMgPSBbXCJ0ZXN0XCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxQbGF5ZXJTZXR1cChwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0KSB7XHJcbiAgLy8gZGlzcGxheSBkZWZhdWx0IHVzZXJuYW1lc1xyXG4gIHBsYXllcjEuZGlzcGxheVBsYXllck5hbWUoMSk7XHJcbiAgcGxheWVyMi5kaXNwbGF5UGxheWVyTmFtZSgyKTtcclxuICBwbGF5ZXIzLmRpc3BsYXlQbGF5ZXJOYW1lKDMpO1xyXG4gIHBsYXllcjQuZGlzcGxheVBsYXllck5hbWUoNCk7XHJcbiAgLy8gZGlzcGxheSBpbnRpYWwgKHplcm8pIHBsYXllciBzY29yZXNcclxuICBwbGF5ZXIxLmRpc3BsYXlQbGF5ZXJTY29yZSgxLCAwKTtcclxuICBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJTY29yZSgyLCAwKTtcclxuICBwbGF5ZXIzLmRpc3BsYXlQbGF5ZXJTY29yZSgzLCAwKTtcclxuICBwbGF5ZXI0LmRpc3BsYXlQbGF5ZXJTY29yZSg0LCAwKTtcclxuICAvLyBhbGxvdyBwbGF5ZXJzIHRvIGNoYW5nZSB0aGVpciBkaXNwbGF5ZWQgbmFtZVxyXG4gIGNvbnN0IHVzZXJOYW1lID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSBwbGF5ZXIubmFtZTtcclxuICAgIHBsYXllci5uYW1lID0gcHJvbXB0KFwiUGxlYXNlIEVudGVyIHlvdXIgbmFtZVwiLCBcIkpvc2ggR3Vuc29uXCIpO1xyXG4gICAgLy8gcHJldmVudCBwbGF5ZXIgbmFtZSBmcm9tIGRpc2FwcGVhcmluZyBieSB1c2luZyBwcmV2aW91cyBuYW1lXHJcbiAgICBpZiAocGxheWVyLm5hbWUgPT09IG51bGwpIHBsYXllci5uYW1lID0gdGVtcE5hbWU7XHJcbiAgICBwbGF5ZXIuZGlzcGxheVBsYXllck5hbWUocGxheWVyLm51bWJlcik7XHJcbiAgfTtcclxuICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB1c2VyTmFtZShwbGF5ZXIxKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHVzZXJOYW1lKHBsYXllcjIpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdXNlck5hbWUocGxheWVyMyk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXI0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB1c2VyTmFtZShwbGF5ZXI0KTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=