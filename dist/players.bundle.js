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
  const stockNames = [
    "Chase",
    "Ethan",
    "Stan",
    "Taylor",
    "Alexander",
    "Amari",
    "Jayce",
    "Nathan",
    "Aaron",
    "Bryce",
    "Hunter",
    "Jacob",
    "Nasir",
    "Matthew",
    "Prince",
    "Xavier",
    "Karter",
    "Tristan",
    "Jonathan",
    "Justin",
    "Tyler",
    "Kaleb",
    "Sebastian",
    "Ayden",
    "Jason",
    "Joseph",
    "Austin",
    "Jaden",
    "Nathaniel",
    "Samuel",
    "Dylan",
    "James",
    "Joel",
    "Asher",
    "Kai",
    "Caleb",
    "Gabriel",
    "Jayceon",
    "Mamadou",
    "Emmanuel",
    "Zachary",
    "Ezekiel",
    "Nicholas",
    "Zaire",
    "Adonis",
    "Benjamin",
    "Ashton",
    "Avery",
    "Kameron",
    "Legend",
    "Levi",
    "Lucas",
    "Andrew",
    "Eli",
    "Julian",
    "Omari",
    "Adam",
    "Ezra",
    "Cairo",
    "Israel",
    "Jaiden",
    "Jaxon",
    "Justice",
    "Kamari",
    "Brandon",
    "Greyson",
    "Muhammad",
    "Sincere",
    "Andre",
    "Ibrahima",
    "Jackson",
    "Jaylen",
    "Kaden",
    "Abdoulaye",
    "Caiden",
    "Chance",
    "Evan",
    "Giovanni",
    "Grayson",
    "Kevin",
    "Omar",
    "Shawn",
    "August",
    "Isaac",
    "Khalil",
    "Kyle",
    "Marcus",
    "Zane",
    "Ali",
    "Maison",
    "Princeton",
    "Robert",
    "Ace",
    "Bryan",
    "Gianni",
    "Jamel",
    "Jamir",
    "John",
    "Nolan",
    "Ousmane",
    "Alpha",
    "Amadou",
    "Jaxson",
    "Kareem",
    "Kingston",
    "Luke",
    "Mekhi",
    "Myles",
    "Stephen",
    "Aden",
    "Adrian",
    "Alex",
    "Boubacar",
    "Cayden",
    "Connor",
    "Corey",
    "Dallas",
    "Hayden",
    "Jonah",
    "Kamren",
    "Major",
    "Phoenix",
    "Sean",
    "Abdoul",
    "Carson",
    "Dominic",
    "Jasiah",
    "Julius",
    "Kenneth",
    "Landon",
    "Malik",
    "Mark",
    "Miles",
    "Mouhamed",
    "Oumar",
    "Samir",
    "Solomon",
    "Timothy",
    "William",
    "Zayden",
    "Liam",
    "Jacob",
    "Dylan",
    "Matthew",
    "Noah",
    "Sebastian",
    "Jayden",
    "Lucas",
    "Ethan",
    "Aaron",
    "Angel",
    "Daniel",
    "Logan",
    "Alexander",
    "Mason",
    "Aiden",
    "Mateo",
    "Joshua",
    "David",
    "Adrian",
    "Anthony",
    "Michael",
    "Joseph",
    "Ian",
    "Christopher",
    "Elias",
    "Gabriel",
    "Ryan",
    "Isaac",
    "Jose",
    "Thiago",
    "Elijah",
    "James",
    "Oliver",
    "Josiah",
    "Nathan",
    "Julian",
    "Justin",
    "Carlos",
    "Gael",
    "Luis",
    "Alan",
    "Jeremy",
    "Jonathan",
    "Leonardo",
    "Kevin",
    "Samuel",
    "Jeremiah",
    "Benjamin",
    "Nicholas",
    "Christian",
    "John",
    "Santiago",
    "Axel",
    "Erick",
    "Brandon",
    "Joel",
    "Juan",
    "Matias",
    "William",
    "Andrew",
    "Diego",
    "Isaiah",
    "Nicolas",
    "Xavier",
    "Ayden",
    "Austin",
    "Jason",
    "Emmanuel",
    "Kayden",
    "Jayce",
    "Caleb",
    "Bryan",
    "Jordan",
    "Nathaniel",
    "Alejandro",
    "Damian",
    "Derek",
    "Jadiel",
    "Eli",
    "Matteo",
    "Adam",
    "Alex",
    "Jace",
    "Henry",
    "Josue",
    "Miguel",
    "Evan",
    "Grayson",
  ];
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

function initialPlayerSetup(playerObject) {
  const playerCount = Object.keys(playerObject).length;

  for (let i = 0; i < playerCount; i += 1) {
    // players index at 1
    // display default usernames and inital scores
    playerObject[i + 1].displayPlayerName(i + 1);
    playerObject[i + 1].displayPlayerScore(i + 1);

    // player names can be clicked to open the change dialogue
    document.getElementById(`player${i + 1}`).addEventListener("click", () => {
      playerObject[i + 1].changePlayerName();
    });
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcGxheWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBsYXllcihuYW1lLCBudW1iZXIsIHNjb3JlKSB7XHJcbiAgLy8gYXNzaWduIHRvIG9iaiByYXRoZXIgdGhhbiB0aGlzLCBzaW5jZSB0aGlzID09PSB1bmRlZmluZWQgaW4gbW9kdWxlc1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyTmFtZSA9IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJOYW1lKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCNwbGF5ZXIke3BsYXllck51bWJlcn1gLFxyXG4gICAgKS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX06YDtcclxuICB9O1xyXG4gIG9iai5jaGFuZ2VQbGF5ZXJOYW1lID0gZnVuY3Rpb24gY2hhbmdlUGxheWVyTmFtZSgpIHtcclxuICAgIGNvbnN0IHRlbXBOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgdGhpcy5uYW1lID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiLCBcIkpvc2ggR3Vuc29uXCIpO1xyXG4gICAgLy8gcHJldmVudCBwbGF5ZXIgbmFtZSBmcm9tIGRpc2FwcGVhcmluZyBieSB1c2luZyBwcmV2aW91cyBuYW1lXHJcbiAgICBpZiAodGhpcy5uYW1lID09PSBudWxsKSB0aGlzLm5hbWUgPSB0ZW1wTmFtZTtcclxuICAgIHRoaXMuZGlzcGxheVBsYXllck5hbWUodGhpcy5udW1iZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgfTtcclxuICBvYmouaW5jcmVtZW50UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBpbmNyZW1lbnRQbGF5ZXJTY29yZShzY29yZVRvQWRkKSB7XHJcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlVG9BZGQ7XHJcbiAgfTtcclxuICBvYmouZGlzcGxheVBsYXllclNjb3JlID0gZnVuY3Rpb24gZGlzcGxheVBsYXllclNjb3JlKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYCkudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLnNjb3JlO1xyXG4gIH07XHJcbiAgb2JqLm5hbWUgPSBuYW1lO1xyXG4gIG9iai5zY29yZSA9IHNjb3JlO1xyXG4gIG9iai5udW1iZXIgPSBudW1iZXI7XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyc09iaihwbGF5ZXJDb3VudCkge1xyXG4gIGNvbnN0IHN0b2NrTmFtZXMgPSBbXHJcbiAgICBcIkNoYXNlXCIsXHJcbiAgICBcIkV0aGFuXCIsXHJcbiAgICBcIlN0YW5cIixcclxuICAgIFwiVGF5bG9yXCIsXHJcbiAgICBcIkFsZXhhbmRlclwiLFxyXG4gICAgXCJBbWFyaVwiLFxyXG4gICAgXCJKYXljZVwiLFxyXG4gICAgXCJOYXRoYW5cIixcclxuICAgIFwiQWFyb25cIixcclxuICAgIFwiQnJ5Y2VcIixcclxuICAgIFwiSHVudGVyXCIsXHJcbiAgICBcIkphY29iXCIsXHJcbiAgICBcIk5hc2lyXCIsXHJcbiAgICBcIk1hdHRoZXdcIixcclxuICAgIFwiUHJpbmNlXCIsXHJcbiAgICBcIlhhdmllclwiLFxyXG4gICAgXCJLYXJ0ZXJcIixcclxuICAgIFwiVHJpc3RhblwiLFxyXG4gICAgXCJKb25hdGhhblwiLFxyXG4gICAgXCJKdXN0aW5cIixcclxuICAgIFwiVHlsZXJcIixcclxuICAgIFwiS2FsZWJcIixcclxuICAgIFwiU2ViYXN0aWFuXCIsXHJcbiAgICBcIkF5ZGVuXCIsXHJcbiAgICBcIkphc29uXCIsXHJcbiAgICBcIkpvc2VwaFwiLFxyXG4gICAgXCJBdXN0aW5cIixcclxuICAgIFwiSmFkZW5cIixcclxuICAgIFwiTmF0aGFuaWVsXCIsXHJcbiAgICBcIlNhbXVlbFwiLFxyXG4gICAgXCJEeWxhblwiLFxyXG4gICAgXCJKYW1lc1wiLFxyXG4gICAgXCJKb2VsXCIsXHJcbiAgICBcIkFzaGVyXCIsXHJcbiAgICBcIkthaVwiLFxyXG4gICAgXCJDYWxlYlwiLFxyXG4gICAgXCJHYWJyaWVsXCIsXHJcbiAgICBcIkpheWNlb25cIixcclxuICAgIFwiTWFtYWRvdVwiLFxyXG4gICAgXCJFbW1hbnVlbFwiLFxyXG4gICAgXCJaYWNoYXJ5XCIsXHJcbiAgICBcIkV6ZWtpZWxcIixcclxuICAgIFwiTmljaG9sYXNcIixcclxuICAgIFwiWmFpcmVcIixcclxuICAgIFwiQWRvbmlzXCIsXHJcbiAgICBcIkJlbmphbWluXCIsXHJcbiAgICBcIkFzaHRvblwiLFxyXG4gICAgXCJBdmVyeVwiLFxyXG4gICAgXCJLYW1lcm9uXCIsXHJcbiAgICBcIkxlZ2VuZFwiLFxyXG4gICAgXCJMZXZpXCIsXHJcbiAgICBcIkx1Y2FzXCIsXHJcbiAgICBcIkFuZHJld1wiLFxyXG4gICAgXCJFbGlcIixcclxuICAgIFwiSnVsaWFuXCIsXHJcbiAgICBcIk9tYXJpXCIsXHJcbiAgICBcIkFkYW1cIixcclxuICAgIFwiRXpyYVwiLFxyXG4gICAgXCJDYWlyb1wiLFxyXG4gICAgXCJJc3JhZWxcIixcclxuICAgIFwiSmFpZGVuXCIsXHJcbiAgICBcIkpheG9uXCIsXHJcbiAgICBcIkp1c3RpY2VcIixcclxuICAgIFwiS2FtYXJpXCIsXHJcbiAgICBcIkJyYW5kb25cIixcclxuICAgIFwiR3JleXNvblwiLFxyXG4gICAgXCJNdWhhbW1hZFwiLFxyXG4gICAgXCJTaW5jZXJlXCIsXHJcbiAgICBcIkFuZHJlXCIsXHJcbiAgICBcIklicmFoaW1hXCIsXHJcbiAgICBcIkphY2tzb25cIixcclxuICAgIFwiSmF5bGVuXCIsXHJcbiAgICBcIkthZGVuXCIsXHJcbiAgICBcIkFiZG91bGF5ZVwiLFxyXG4gICAgXCJDYWlkZW5cIixcclxuICAgIFwiQ2hhbmNlXCIsXHJcbiAgICBcIkV2YW5cIixcclxuICAgIFwiR2lvdmFubmlcIixcclxuICAgIFwiR3JheXNvblwiLFxyXG4gICAgXCJLZXZpblwiLFxyXG4gICAgXCJPbWFyXCIsXHJcbiAgICBcIlNoYXduXCIsXHJcbiAgICBcIkF1Z3VzdFwiLFxyXG4gICAgXCJJc2FhY1wiLFxyXG4gICAgXCJLaGFsaWxcIixcclxuICAgIFwiS3lsZVwiLFxyXG4gICAgXCJNYXJjdXNcIixcclxuICAgIFwiWmFuZVwiLFxyXG4gICAgXCJBbGlcIixcclxuICAgIFwiTWFpc29uXCIsXHJcbiAgICBcIlByaW5jZXRvblwiLFxyXG4gICAgXCJSb2JlcnRcIixcclxuICAgIFwiQWNlXCIsXHJcbiAgICBcIkJyeWFuXCIsXHJcbiAgICBcIkdpYW5uaVwiLFxyXG4gICAgXCJKYW1lbFwiLFxyXG4gICAgXCJKYW1pclwiLFxyXG4gICAgXCJKb2huXCIsXHJcbiAgICBcIk5vbGFuXCIsXHJcbiAgICBcIk91c21hbmVcIixcclxuICAgIFwiQWxwaGFcIixcclxuICAgIFwiQW1hZG91XCIsXHJcbiAgICBcIkpheHNvblwiLFxyXG4gICAgXCJLYXJlZW1cIixcclxuICAgIFwiS2luZ3N0b25cIixcclxuICAgIFwiTHVrZVwiLFxyXG4gICAgXCJNZWtoaVwiLFxyXG4gICAgXCJNeWxlc1wiLFxyXG4gICAgXCJTdGVwaGVuXCIsXHJcbiAgICBcIkFkZW5cIixcclxuICAgIFwiQWRyaWFuXCIsXHJcbiAgICBcIkFsZXhcIixcclxuICAgIFwiQm91YmFjYXJcIixcclxuICAgIFwiQ2F5ZGVuXCIsXHJcbiAgICBcIkNvbm5vclwiLFxyXG4gICAgXCJDb3JleVwiLFxyXG4gICAgXCJEYWxsYXNcIixcclxuICAgIFwiSGF5ZGVuXCIsXHJcbiAgICBcIkpvbmFoXCIsXHJcbiAgICBcIkthbXJlblwiLFxyXG4gICAgXCJNYWpvclwiLFxyXG4gICAgXCJQaG9lbml4XCIsXHJcbiAgICBcIlNlYW5cIixcclxuICAgIFwiQWJkb3VsXCIsXHJcbiAgICBcIkNhcnNvblwiLFxyXG4gICAgXCJEb21pbmljXCIsXHJcbiAgICBcIkphc2lhaFwiLFxyXG4gICAgXCJKdWxpdXNcIixcclxuICAgIFwiS2VubmV0aFwiLFxyXG4gICAgXCJMYW5kb25cIixcclxuICAgIFwiTWFsaWtcIixcclxuICAgIFwiTWFya1wiLFxyXG4gICAgXCJNaWxlc1wiLFxyXG4gICAgXCJNb3VoYW1lZFwiLFxyXG4gICAgXCJPdW1hclwiLFxyXG4gICAgXCJTYW1pclwiLFxyXG4gICAgXCJTb2xvbW9uXCIsXHJcbiAgICBcIlRpbW90aHlcIixcclxuICAgIFwiV2lsbGlhbVwiLFxyXG4gICAgXCJaYXlkZW5cIixcclxuICAgIFwiTGlhbVwiLFxyXG4gICAgXCJKYWNvYlwiLFxyXG4gICAgXCJEeWxhblwiLFxyXG4gICAgXCJNYXR0aGV3XCIsXHJcbiAgICBcIk5vYWhcIixcclxuICAgIFwiU2ViYXN0aWFuXCIsXHJcbiAgICBcIkpheWRlblwiLFxyXG4gICAgXCJMdWNhc1wiLFxyXG4gICAgXCJFdGhhblwiLFxyXG4gICAgXCJBYXJvblwiLFxyXG4gICAgXCJBbmdlbFwiLFxyXG4gICAgXCJEYW5pZWxcIixcclxuICAgIFwiTG9nYW5cIixcclxuICAgIFwiQWxleGFuZGVyXCIsXHJcbiAgICBcIk1hc29uXCIsXHJcbiAgICBcIkFpZGVuXCIsXHJcbiAgICBcIk1hdGVvXCIsXHJcbiAgICBcIkpvc2h1YVwiLFxyXG4gICAgXCJEYXZpZFwiLFxyXG4gICAgXCJBZHJpYW5cIixcclxuICAgIFwiQW50aG9ueVwiLFxyXG4gICAgXCJNaWNoYWVsXCIsXHJcbiAgICBcIkpvc2VwaFwiLFxyXG4gICAgXCJJYW5cIixcclxuICAgIFwiQ2hyaXN0b3BoZXJcIixcclxuICAgIFwiRWxpYXNcIixcclxuICAgIFwiR2FicmllbFwiLFxyXG4gICAgXCJSeWFuXCIsXHJcbiAgICBcIklzYWFjXCIsXHJcbiAgICBcIkpvc2VcIixcclxuICAgIFwiVGhpYWdvXCIsXHJcbiAgICBcIkVsaWphaFwiLFxyXG4gICAgXCJKYW1lc1wiLFxyXG4gICAgXCJPbGl2ZXJcIixcclxuICAgIFwiSm9zaWFoXCIsXHJcbiAgICBcIk5hdGhhblwiLFxyXG4gICAgXCJKdWxpYW5cIixcclxuICAgIFwiSnVzdGluXCIsXHJcbiAgICBcIkNhcmxvc1wiLFxyXG4gICAgXCJHYWVsXCIsXHJcbiAgICBcIkx1aXNcIixcclxuICAgIFwiQWxhblwiLFxyXG4gICAgXCJKZXJlbXlcIixcclxuICAgIFwiSm9uYXRoYW5cIixcclxuICAgIFwiTGVvbmFyZG9cIixcclxuICAgIFwiS2V2aW5cIixcclxuICAgIFwiU2FtdWVsXCIsXHJcbiAgICBcIkplcmVtaWFoXCIsXHJcbiAgICBcIkJlbmphbWluXCIsXHJcbiAgICBcIk5pY2hvbGFzXCIsXHJcbiAgICBcIkNocmlzdGlhblwiLFxyXG4gICAgXCJKb2huXCIsXHJcbiAgICBcIlNhbnRpYWdvXCIsXHJcbiAgICBcIkF4ZWxcIixcclxuICAgIFwiRXJpY2tcIixcclxuICAgIFwiQnJhbmRvblwiLFxyXG4gICAgXCJKb2VsXCIsXHJcbiAgICBcIkp1YW5cIixcclxuICAgIFwiTWF0aWFzXCIsXHJcbiAgICBcIldpbGxpYW1cIixcclxuICAgIFwiQW5kcmV3XCIsXHJcbiAgICBcIkRpZWdvXCIsXHJcbiAgICBcIklzYWlhaFwiLFxyXG4gICAgXCJOaWNvbGFzXCIsXHJcbiAgICBcIlhhdmllclwiLFxyXG4gICAgXCJBeWRlblwiLFxyXG4gICAgXCJBdXN0aW5cIixcclxuICAgIFwiSmFzb25cIixcclxuICAgIFwiRW1tYW51ZWxcIixcclxuICAgIFwiS2F5ZGVuXCIsXHJcbiAgICBcIkpheWNlXCIsXHJcbiAgICBcIkNhbGViXCIsXHJcbiAgICBcIkJyeWFuXCIsXHJcbiAgICBcIkpvcmRhblwiLFxyXG4gICAgXCJOYXRoYW5pZWxcIixcclxuICAgIFwiQWxlamFuZHJvXCIsXHJcbiAgICBcIkRhbWlhblwiLFxyXG4gICAgXCJEZXJla1wiLFxyXG4gICAgXCJKYWRpZWxcIixcclxuICAgIFwiRWxpXCIsXHJcbiAgICBcIk1hdHRlb1wiLFxyXG4gICAgXCJBZGFtXCIsXHJcbiAgICBcIkFsZXhcIixcclxuICAgIFwiSmFjZVwiLFxyXG4gICAgXCJIZW5yeVwiLFxyXG4gICAgXCJKb3N1ZVwiLFxyXG4gICAgXCJNaWd1ZWxcIixcclxuICAgIFwiRXZhblwiLFxyXG4gICAgXCJHcmF5c29uXCIsXHJcbiAgXTtcclxuICBjb25zdCBwbGF5ZXJzID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwbGF5ZXJDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbaSAtIDFdLCBpLCAwKTtcclxuICB9XHJcbiAgcmV0dXJuIHBsYXllcnM7XHJcbn1cclxuLy8gY29uc3QgcGxheWVyMSA9IGdlbmVyYXRlUGxheWVyKFwiQ2hhc2VcIiwgMSwgMCk7XHJcbi8vIGNvbnN0IHBsYXllcjIgPSBnZW5lcmF0ZVBsYXllcihcIkV0aGFuXCIsIDIsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXIzID0gZ2VuZXJhdGVQbGF5ZXIoXCJTdGFuXCIsIDMsIDApO1xyXG4vLyBjb25zdCBwbGF5ZXI0ID0gZ2VuZXJhdGVQbGF5ZXIoXCJUYXlsb3JcIiwgNCwgMCk7XHJcblxyXG5leHBvcnQgY29uc3QgcGxheWVyTmFtZXMgPSBbXCJ0ZXN0XCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxQbGF5ZXJTZXR1cChwbGF5ZXJPYmplY3QpIHtcclxuICBjb25zdCBwbGF5ZXJDb3VudCA9IE9iamVjdC5rZXlzKHBsYXllck9iamVjdCkubGVuZ3RoO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckNvdW50OyBpICs9IDEpIHtcclxuICAgIC8vIHBsYXllcnMgaW5kZXggYXQgMVxyXG4gICAgLy8gZGlzcGxheSBkZWZhdWx0IHVzZXJuYW1lcyBhbmQgaW5pdGFsIHNjb3Jlc1xyXG4gICAgcGxheWVyT2JqZWN0W2kgKyAxXS5kaXNwbGF5UGxheWVyTmFtZShpICsgMSk7XHJcbiAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmRpc3BsYXlQbGF5ZXJTY29yZShpICsgMSk7XHJcblxyXG4gICAgLy8gcGxheWVyIG5hbWVzIGNhbiBiZSBjbGlja2VkIHRvIG9wZW4gdGhlIGNoYW5nZSBkaWFsb2d1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXllciR7aSArIDF9YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgcGxheWVyT2JqZWN0W2kgKyAxXS5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9