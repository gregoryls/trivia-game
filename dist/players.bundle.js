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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0IsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcGxheWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBsYXllcihuYW1lLCBudW1iZXIsIHNjb3JlKSB7XHJcbiAgLy8gYXNzaWduIHRvIG9iaiByYXRoZXIgdGhhbiB0aGlzLCBzaW5jZSB0aGlzID09PSB1bmRlZmluZWQgaW4gbW9kdWxlc1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyTmFtZSA9IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJOYW1lKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCNwbGF5ZXIke3BsYXllck51bWJlcn1gLFxyXG4gICAgKS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX06YDtcclxuICB9O1xyXG4gIG9iai5jaGFuZ2VQbGF5ZXJOYW1lID0gZnVuY3Rpb24gY2hhbmdlUGxheWVyTmFtZSgpIHtcclxuICAgIGNvbnN0IHRlbXBOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgdGhpcy5uYW1lID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiLCBcIkpvc2ggR3Vuc29uXCIpO1xyXG4gICAgLy8gcHJldmVudCBwbGF5ZXIgbmFtZSBmcm9tIGRpc2FwcGVhcmluZyBieSB1c2luZyBwcmV2aW91cyBuYW1lXHJcbiAgICBpZiAodGhpcy5uYW1lID09PSBudWxsKSB0aGlzLm5hbWUgPSB0ZW1wTmFtZTtcclxuICAgIHRoaXMuZGlzcGxheVBsYXllck5hbWUodGhpcy5udW1iZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgfTtcclxuICBvYmouZGlzcGxheVBsYXllclNjb3JlID0gZnVuY3Rpb24gZGlzcGxheVBsYXllclNjb3JlKFxyXG4gICAgcGxheWVyTnVtYmVyLFxyXG4gICAgc2NvcmVUb0FkZCxcclxuICApIHtcclxuICAgIC8vIHRoYW5rIGFib3V0IHNwbGl0dGluZyB0aGlzIGZ1bmN0aW9uIGludG8gdHdvIGZ1bmN0aW9uc1xyXG4gICAgdGhpcy5zY29yZSArPSBzY29yZVRvQWRkO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYCkudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLnNjb3JlO1xyXG4gIH07XHJcbiAgb2JqLm5hbWUgPSBuYW1lO1xyXG4gIG9iai5zY29yZSA9IHNjb3JlO1xyXG4gIG9iai5udW1iZXIgPSBudW1iZXI7XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyc09iaihwbGF5ZXJDb3VudCkge1xyXG4gIGNvbnN0IHN0b2NrTmFtZXMgPSBbXCJDaGFzZVwiLCBcIkV0aGFuXCIsIFwiU3RhblwiLCBcIlRheWxvclwiXTtcclxuICBjb25zdCBwbGF5ZXJzID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwbGF5ZXJDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbaSAtIDFdLCBpLCAwKTtcclxuICB9XHJcbiAgcmV0dXJuIHBsYXllcnM7XHJcbn1cclxuLy8gY29uc3QgcGxheWVyMSA9IGdlbmVyYXRlUGxheWVyKFwiQ2hhc2VcIiwgMSwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjIgPSBnZW5lcmF0ZVBsYXllcihcIkV0aGFuXCIsIDIsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXIzID0gZ2VuZXJhdGVQbGF5ZXIoXCJTdGFuXCIsIDMsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXI0ID0gZ2VuZXJhdGVQbGF5ZXIoXCJUYXlsb3JcIiwgNCwgMCk7XHJcblxyXG5leHBvcnQgY29uc3QgcGxheWVyTmFtZXMgPSBbXCJ0ZXN0XCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxQbGF5ZXJTZXR1cChwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzLCBwbGF5ZXI0KSB7XHJcbiAgLy8gZGlzcGxheSBkZWZhdWx0IHVzZXJuYW1lc1xyXG4gIHBsYXllcjEuZGlzcGxheVBsYXllck5hbWUoMSk7XHJcbiAgcGxheWVyMi5kaXNwbGF5UGxheWVyTmFtZSgyKTtcclxuICBwbGF5ZXIzLmRpc3BsYXlQbGF5ZXJOYW1lKDMpO1xyXG4gIHBsYXllcjQuZGlzcGxheVBsYXllck5hbWUoNCk7XHJcbiAgLy8gZGlzcGxheSBpbnRpYWwgKHplcm8pIHBsYXllciBzY29yZXNcclxuICBwbGF5ZXIxLmRpc3BsYXlQbGF5ZXJTY29yZSgxLCAwKTtcclxuICBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJTY29yZSgyLCAwKTtcclxuICBwbGF5ZXIzLmRpc3BsYXlQbGF5ZXJTY29yZSgzLCAwKTtcclxuICBwbGF5ZXI0LmRpc3BsYXlQbGF5ZXJTY29yZSg0LCAwKTtcclxuXHJcbiAgLy8gcGxheWVyIG5hbWVzIGNhbiBiZSBjbGlja2VkIHRvIG9wZW4gdGhlIGNoYW5nZSBkaWFsb2d1ZVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyMS5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIyLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllcjMuY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyNC5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9