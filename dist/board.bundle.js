/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayerUI: () => (/* binding */ createPlayerUI),
/* harmony export */   generatePlayer: () => (/* binding */ generatePlayer),
/* harmony export */   generatePlayersObj: () => (/* binding */ generatePlayersObj),
/* harmony export */   getPlayerCountInput: () => (/* binding */ getPlayerCountInput),
/* harmony export */   getRandomIntInRange: () => (/* binding */ getRandomIntInRange),
/* harmony export */   initialPlayerSetup: () => (/* binding */ initialPlayerSetup),
/* harmony export */   playerNames: () => (/* binding */ playerNames)
/* harmony export */ });
/* harmony import */ var _stockNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockNames */ "./src/stockNames.js");


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

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// explore: rng stockname list, apply to player gen loop, add to used array
// rng on new loop, check if rng used, if so, reroll, stockname is 229 long
// have a little toggle random character name box,
// flip between static and random name generation

function generatePlayersObj(playerCount, randomNames) {
  console.log(_stockNames__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const takenNames = [];
  const players = {};
  for (let i = 1; i < playerCount + 1; i += 1) {
    // console.log(getRandomIntInRange(5, 10));
    if (randomNames) {
      let rng;
      let taken = true;
      // generate random number, check if it's been used, if not, log as used
      while (taken === true) {
        rng = getRandomIntInRange(0, 228);
        if (!takenNames.includes(rng)) {
          takenNames.push(rng);
          console.log(takenNames);
          taken = false;
        }
      }
      players[i] = generatePlayer(_stockNames__WEBPACK_IMPORTED_MODULE_0__["default"][rng], i, 0);
      // const max = playerCount;
      // const min = playerCount - 4;
    }
    if (!randomNames) {
      players[i] = generatePlayer(_stockNames__WEBPACK_IMPORTED_MODULE_0__["default"][i - 1], i, 0);
    }
  }
  return players;
}

const playerNames = ["test"];

function initialPlayerSetup(playerObject) {
  const playerCount = Object.keys(playerObject).length;

  for (let i = 0; i < playerCount; i += 1) {
    // players index at 1
    // display default usernames and inital scores
    playerObject[i + 1].displayPlayerName(i + 1);

    // player names can be clicked to open the change dialogue
    document.getElementById(`player${i + 1}`).addEventListener("click", () => {
      playerObject[i + 1].changePlayerName();
    });
  }
}

function getPlayerCountInput() {
  return Number(document.getElementById("playerCount").value);
}
function createPlayerUI(playerNumber) {
  const div = document.createElement("div");
  const name = document.createElement("p");
  const score = document.createElement("p");

  div.classList.add("player");

  name.id = `player${playerNumber}`;

  score.classList.add("score");
  score.id = `player${playerNumber}Score`;

  div.append(name, score);

  return div;
}


/***/ }),

/***/ "./src/stockNames.js":
/*!***************************!*\
  !*** ./src/stockNames.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stockNames);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createQuestionGrid: () => (/* binding */ createQuestionGrid),
/* harmony export */   test: () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/players.js");
// TODO fix question data for module


const gridArea = document.querySelector("#gridWrapper");

// change this to use question object
// grid count based on questionObj keys lengths, 2 dimensions, category length + question count length + topic
function createQuestionGrid(questionObject) {
  // console.log(players.getRandomIntInRange(2,5))
  const categoryCount = Object.keys(questionObject).length;

  const questionCount = [];

  // set grid column count equal to number of question categories
  const gridWrapper = document.getElementById("gridWrapper");

  gridWrapper.innerHTML = "";
  gridWrapper.style.gridTemplateColumns = `repeat(${categoryCount},1fr)`;

  // generate topic tiles
  for (let i = 0; i < categoryCount; i += 1) {
    const categoryDiv = document.createElement("div");
    const tileDiv = document.createElement("div");

    categoryDiv.id = `category${i}`;
    categoryDiv.classList.add("category");
    tileDiv.classList.add("questionTopic");
    tileDiv.textContent = questionObject[`category${i}`].topic;
    categoryDiv.append(tileDiv);

    gridArea.append(categoryDiv);
  }

  // generate question counts for each category
  for (let i = 0; i < categoryCount; i += 1) {
    // -1 from length to account for 'topic' key
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);
    // console.log(questionCount);
  }

  // generate question tiles with values
  for (let i = 0; i < categoryCount; i += 1) {
    for (let j = 1; j < questionCount[i] + 1; j += 1) {
      const categoryDiv = document.getElementById(`category${i}`);
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("question");
      tileDiv.textContent =
        questionObject[`category${i}`][`question${j}`].value;

      // apply stock values of 100 increment per row if a value
      // is not a supplied from questionObj
      if (questionObject[`category${i}`][`question${j}`].value === undefined) {
        tileDiv.textContent = `${i + 1}00`;

        // console.log(i * j);
      }
      categoryDiv.append(tileDiv);
    }
  }
}

// remove this later
const test = 7;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3Qix1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxjQUFjLG1EQUFVO0FBQ3hCO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDeE8xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ29DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQSxvREFBb0QsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDLG9CQUFvQiwwQkFBMEI7QUFDOUMsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtBQUN0RCxpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvc3RvY2tOYW1lcy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9ja05hbWVzIGZyb20gXCIuL3N0b2NrTmFtZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBsYXllcihuYW1lLCBudW1iZXIsIHNjb3JlKSB7XHJcbiAgLy8gYXNzaWduIHRvIG9iaiByYXRoZXIgdGhhbiB0aGlzLCBzaW5jZSB0aGlzID09PSB1bmRlZmluZWQgaW4gbW9kdWxlc1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyTmFtZSA9IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJOYW1lKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCNwbGF5ZXIke3BsYXllck51bWJlcn1gLFxyXG4gICAgKS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX06YDtcclxuICB9O1xyXG4gIG9iai5jaGFuZ2VQbGF5ZXJOYW1lID0gZnVuY3Rpb24gY2hhbmdlUGxheWVyTmFtZSgpIHtcclxuICAgIGNvbnN0IHRlbXBOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgdGhpcy5uYW1lID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiLCBcIkpvc2ggR3Vuc29uXCIpO1xyXG4gICAgLy8gcHJldmVudCBwbGF5ZXIgbmFtZSBmcm9tIGRpc2FwcGVhcmluZyBieSB1c2luZyBwcmV2aW91cyBuYW1lXHJcbiAgICBpZiAodGhpcy5uYW1lID09PSBudWxsKSB0aGlzLm5hbWUgPSB0ZW1wTmFtZTtcclxuICAgIHRoaXMuZGlzcGxheVBsYXllck5hbWUodGhpcy5udW1iZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgfTtcclxuICBvYmouaW5jcmVtZW50UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBpbmNyZW1lbnRQbGF5ZXJTY29yZShzY29yZVRvQWRkKSB7XHJcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlVG9BZGQ7XHJcbiAgfTtcclxuICBvYmouZGlzcGxheVBsYXllclNjb3JlID0gZnVuY3Rpb24gZGlzcGxheVBsYXllclNjb3JlKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYCkudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLnNjb3JlO1xyXG4gIH07XHJcbiAgb2JqLm5hbWUgPSBuYW1lO1xyXG4gIG9iai5zY29yZSA9IHNjb3JlO1xyXG4gIG9iai5udW1iZXIgPSBudW1iZXI7XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEluUmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG4vLyBleHBsb3JlOiBybmcgc3RvY2tuYW1lIGxpc3QsIGFwcGx5IHRvIHBsYXllciBnZW4gbG9vcCwgYWRkIHRvIHVzZWQgYXJyYXlcclxuLy8gcm5nIG9uIG5ldyBsb29wLCBjaGVjayBpZiBybmcgdXNlZCwgaWYgc28sIHJlcm9sbCwgc3RvY2tuYW1lIGlzIDIyOSBsb25nXHJcbi8vIGhhdmUgYSBsaXR0bGUgdG9nZ2xlIHJhbmRvbSBjaGFyYWN0ZXIgbmFtZSBib3gsXHJcbi8vIGZsaXAgYmV0d2VlbiBzdGF0aWMgYW5kIHJhbmRvbSBuYW1lIGdlbmVyYXRpb25cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBsYXllcnNPYmoocGxheWVyQ291bnQsIHJhbmRvbU5hbWVzKSB7XHJcbiAgY29uc29sZS5sb2coc3RvY2tOYW1lcyk7XHJcbiAgY29uc3QgdGFrZW5OYW1lcyA9IFtdO1xyXG4gIGNvbnN0IHBsYXllcnMgPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYXllckNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRSYW5kb21JbnRJblJhbmdlKDUsIDEwKSk7XHJcbiAgICBpZiAocmFuZG9tTmFtZXMpIHtcclxuICAgICAgbGV0IHJuZztcclxuICAgICAgbGV0IHRha2VuID0gdHJ1ZTtcclxuICAgICAgLy8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlciwgY2hlY2sgaWYgaXQncyBiZWVuIHVzZWQsIGlmIG5vdCwgbG9nIGFzIHVzZWRcclxuICAgICAgd2hpbGUgKHRha2VuID09PSB0cnVlKSB7XHJcbiAgICAgICAgcm5nID0gZ2V0UmFuZG9tSW50SW5SYW5nZSgwLCAyMjgpO1xyXG4gICAgICAgIGlmICghdGFrZW5OYW1lcy5pbmNsdWRlcyhybmcpKSB7XHJcbiAgICAgICAgICB0YWtlbk5hbWVzLnB1c2gocm5nKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRha2VuTmFtZXMpO1xyXG4gICAgICAgICAgdGFrZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbcm5nXSwgaSwgMCk7XHJcbiAgICAgIC8vIGNvbnN0IG1heCA9IHBsYXllckNvdW50O1xyXG4gICAgICAvLyBjb25zdCBtaW4gPSBwbGF5ZXJDb3VudCAtIDQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJhbmRvbU5hbWVzKSB7XHJcbiAgICAgIHBsYXllcnNbaV0gPSBnZW5lcmF0ZVBsYXllcihzdG9ja05hbWVzW2kgLSAxXSwgaSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwbGF5ZXJzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGxheWVyTmFtZXMgPSBbXCJ0ZXN0XCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxQbGF5ZXJTZXR1cChwbGF5ZXJPYmplY3QpIHtcclxuICBjb25zdCBwbGF5ZXJDb3VudCA9IE9iamVjdC5rZXlzKHBsYXllck9iamVjdCkubGVuZ3RoO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckNvdW50OyBpICs9IDEpIHtcclxuICAgIC8vIHBsYXllcnMgaW5kZXggYXQgMVxyXG4gICAgLy8gZGlzcGxheSBkZWZhdWx0IHVzZXJuYW1lcyBhbmQgaW5pdGFsIHNjb3Jlc1xyXG4gICAgcGxheWVyT2JqZWN0W2kgKyAxXS5kaXNwbGF5UGxheWVyTmFtZShpICsgMSk7XHJcblxyXG4gICAgLy8gcGxheWVyIG5hbWVzIGNhbiBiZSBjbGlja2VkIHRvIG9wZW4gdGhlIGNoYW5nZSBkaWFsb2d1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXllciR7aSArIDF9YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgcGxheWVyT2JqZWN0W2kgKyAxXS5jaGFuZ2VQbGF5ZXJOYW1lKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF5ZXJDb3VudElucHV0KCkge1xyXG4gIHJldHVybiBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJDb3VudFwiKS52YWx1ZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllclVJKHBsYXllck51bWJlcikge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVyXCIpO1xyXG5cclxuICBuYW1lLmlkID0gYHBsYXllciR7cGxheWVyTnVtYmVyfWA7XHJcblxyXG4gIHNjb3JlLmNsYXNzTGlzdC5hZGQoXCJzY29yZVwiKTtcclxuICBzY29yZS5pZCA9IGBwbGF5ZXIke3BsYXllck51bWJlcn1TY29yZWA7XHJcblxyXG4gIGRpdi5hcHBlbmQobmFtZSwgc2NvcmUpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcbiIsImNvbnN0IHN0b2NrTmFtZXMgPSBbXHJcbiAgXCJDaGFzZVwiLFxyXG4gIFwiRXRoYW5cIixcclxuICBcIlN0YW5cIixcclxuICBcIlRheWxvclwiLFxyXG4gIFwiQWxleGFuZGVyXCIsXHJcbiAgXCJBbWFyaVwiLFxyXG4gIFwiSmF5Y2VcIixcclxuICBcIk5hdGhhblwiLFxyXG4gIFwiQWFyb25cIixcclxuICBcIkJyeWNlXCIsXHJcbiAgXCJIdW50ZXJcIixcclxuICBcIkphY29iXCIsXHJcbiAgXCJOYXNpclwiLFxyXG4gIFwiTWF0dGhld1wiLFxyXG4gIFwiUHJpbmNlXCIsXHJcbiAgXCJYYXZpZXJcIixcclxuICBcIkthcnRlclwiLFxyXG4gIFwiVHJpc3RhblwiLFxyXG4gIFwiSm9uYXRoYW5cIixcclxuICBcIkp1c3RpblwiLFxyXG4gIFwiVHlsZXJcIixcclxuICBcIkthbGViXCIsXHJcbiAgXCJTZWJhc3RpYW5cIixcclxuICBcIkF5ZGVuXCIsXHJcbiAgXCJKYXNvblwiLFxyXG4gIFwiSm9zZXBoXCIsXHJcbiAgXCJBdXN0aW5cIixcclxuICBcIkphZGVuXCIsXHJcbiAgXCJOYXRoYW5pZWxcIixcclxuICBcIlNhbXVlbFwiLFxyXG4gIFwiRHlsYW5cIixcclxuICBcIkphbWVzXCIsXHJcbiAgXCJKb2VsXCIsXHJcbiAgXCJBc2hlclwiLFxyXG4gIFwiS2FpXCIsXHJcbiAgXCJDYWxlYlwiLFxyXG4gIFwiR2FicmllbFwiLFxyXG4gIFwiSmF5Y2VvblwiLFxyXG4gIFwiTWFtYWRvdVwiLFxyXG4gIFwiRW1tYW51ZWxcIixcclxuICBcIlphY2hhcnlcIixcclxuICBcIkV6ZWtpZWxcIixcclxuICBcIk5pY2hvbGFzXCIsXHJcbiAgXCJaYWlyZVwiLFxyXG4gIFwiQWRvbmlzXCIsXHJcbiAgXCJCZW5qYW1pblwiLFxyXG4gIFwiQXNodG9uXCIsXHJcbiAgXCJBdmVyeVwiLFxyXG4gIFwiS2FtZXJvblwiLFxyXG4gIFwiTGVnZW5kXCIsXHJcbiAgXCJMZXZpXCIsXHJcbiAgXCJMdWNhc1wiLFxyXG4gIFwiQW5kcmV3XCIsXHJcbiAgXCJFbGlcIixcclxuICBcIkp1bGlhblwiLFxyXG4gIFwiT21hcmlcIixcclxuICBcIkFkYW1cIixcclxuICBcIkV6cmFcIixcclxuICBcIkNhaXJvXCIsXHJcbiAgXCJJc3JhZWxcIixcclxuICBcIkphaWRlblwiLFxyXG4gIFwiSmF4b25cIixcclxuICBcIkp1c3RpY2VcIixcclxuICBcIkthbWFyaVwiLFxyXG4gIFwiQnJhbmRvblwiLFxyXG4gIFwiR3JleXNvblwiLFxyXG4gIFwiTXVoYW1tYWRcIixcclxuICBcIlNpbmNlcmVcIixcclxuICBcIkFuZHJlXCIsXHJcbiAgXCJJYnJhaGltYVwiLFxyXG4gIFwiSmFja3NvblwiLFxyXG4gIFwiSmF5bGVuXCIsXHJcbiAgXCJLYWRlblwiLFxyXG4gIFwiQWJkb3VsYXllXCIsXHJcbiAgXCJDYWlkZW5cIixcclxuICBcIkNoYW5jZVwiLFxyXG4gIFwiRXZhblwiLFxyXG4gIFwiR2lvdmFubmlcIixcclxuICBcIkdyYXlzb25cIixcclxuICBcIktldmluXCIsXHJcbiAgXCJPbWFyXCIsXHJcbiAgXCJTaGF3blwiLFxyXG4gIFwiQXVndXN0XCIsXHJcbiAgXCJJc2FhY1wiLFxyXG4gIFwiS2hhbGlsXCIsXHJcbiAgXCJLeWxlXCIsXHJcbiAgXCJNYXJjdXNcIixcclxuICBcIlphbmVcIixcclxuICBcIkFsaVwiLFxyXG4gIFwiTWFpc29uXCIsXHJcbiAgXCJQcmluY2V0b25cIixcclxuICBcIlJvYmVydFwiLFxyXG4gIFwiQWNlXCIsXHJcbiAgXCJCcnlhblwiLFxyXG4gIFwiR2lhbm5pXCIsXHJcbiAgXCJKYW1lbFwiLFxyXG4gIFwiSmFtaXJcIixcclxuICBcIkpvaG5cIixcclxuICBcIk5vbGFuXCIsXHJcbiAgXCJPdXNtYW5lXCIsXHJcbiAgXCJBbHBoYVwiLFxyXG4gIFwiQW1hZG91XCIsXHJcbiAgXCJKYXhzb25cIixcclxuICBcIkthcmVlbVwiLFxyXG4gIFwiS2luZ3N0b25cIixcclxuICBcIkx1a2VcIixcclxuICBcIk1la2hpXCIsXHJcbiAgXCJNeWxlc1wiLFxyXG4gIFwiU3RlcGhlblwiLFxyXG4gIFwiQWRlblwiLFxyXG4gIFwiQWRyaWFuXCIsXHJcbiAgXCJBbGV4XCIsXHJcbiAgXCJCb3ViYWNhclwiLFxyXG4gIFwiQ2F5ZGVuXCIsXHJcbiAgXCJDb25ub3JcIixcclxuICBcIkNvcmV5XCIsXHJcbiAgXCJEYWxsYXNcIixcclxuICBcIkhheWRlblwiLFxyXG4gIFwiSm9uYWhcIixcclxuICBcIkthbXJlblwiLFxyXG4gIFwiTWFqb3JcIixcclxuICBcIlBob2VuaXhcIixcclxuICBcIlNlYW5cIixcclxuICBcIkFiZG91bFwiLFxyXG4gIFwiQ2Fyc29uXCIsXHJcbiAgXCJEb21pbmljXCIsXHJcbiAgXCJKYXNpYWhcIixcclxuICBcIkp1bGl1c1wiLFxyXG4gIFwiS2VubmV0aFwiLFxyXG4gIFwiTGFuZG9uXCIsXHJcbiAgXCJNYWxpa1wiLFxyXG4gIFwiTWFya1wiLFxyXG4gIFwiTWlsZXNcIixcclxuICBcIk1vdWhhbWVkXCIsXHJcbiAgXCJPdW1hclwiLFxyXG4gIFwiU2FtaXJcIixcclxuICBcIlNvbG9tb25cIixcclxuICBcIlRpbW90aHlcIixcclxuICBcIldpbGxpYW1cIixcclxuICBcIlpheWRlblwiLFxyXG4gIFwiTGlhbVwiLFxyXG4gIFwiSmFjb2JcIixcclxuICBcIkR5bGFuXCIsXHJcbiAgXCJNYXR0aGV3XCIsXHJcbiAgXCJOb2FoXCIsXHJcbiAgXCJTZWJhc3RpYW5cIixcclxuICBcIkpheWRlblwiLFxyXG4gIFwiTHVjYXNcIixcclxuICBcIkV0aGFuXCIsXHJcbiAgXCJBYXJvblwiLFxyXG4gIFwiQW5nZWxcIixcclxuICBcIkRhbmllbFwiLFxyXG4gIFwiTG9nYW5cIixcclxuICBcIkFsZXhhbmRlclwiLFxyXG4gIFwiTWFzb25cIixcclxuICBcIkFpZGVuXCIsXHJcbiAgXCJNYXRlb1wiLFxyXG4gIFwiSm9zaHVhXCIsXHJcbiAgXCJEYXZpZFwiLFxyXG4gIFwiQWRyaWFuXCIsXHJcbiAgXCJBbnRob255XCIsXHJcbiAgXCJNaWNoYWVsXCIsXHJcbiAgXCJKb3NlcGhcIixcclxuICBcIklhblwiLFxyXG4gIFwiQ2hyaXN0b3BoZXJcIixcclxuICBcIkVsaWFzXCIsXHJcbiAgXCJHYWJyaWVsXCIsXHJcbiAgXCJSeWFuXCIsXHJcbiAgXCJJc2FhY1wiLFxyXG4gIFwiSm9zZVwiLFxyXG4gIFwiVGhpYWdvXCIsXHJcbiAgXCJFbGlqYWhcIixcclxuICBcIkphbWVzXCIsXHJcbiAgXCJPbGl2ZXJcIixcclxuICBcIkpvc2lhaFwiLFxyXG4gIFwiTmF0aGFuXCIsXHJcbiAgXCJKdWxpYW5cIixcclxuICBcIkp1c3RpblwiLFxyXG4gIFwiQ2FybG9zXCIsXHJcbiAgXCJHYWVsXCIsXHJcbiAgXCJMdWlzXCIsXHJcbiAgXCJBbGFuXCIsXHJcbiAgXCJKZXJlbXlcIixcclxuICBcIkpvbmF0aGFuXCIsXHJcbiAgXCJMZW9uYXJkb1wiLFxyXG4gIFwiS2V2aW5cIixcclxuICBcIlNhbXVlbFwiLFxyXG4gIFwiSmVyZW1pYWhcIixcclxuICBcIkJlbmphbWluXCIsXHJcbiAgXCJOaWNob2xhc1wiLFxyXG4gIFwiQ2hyaXN0aWFuXCIsXHJcbiAgXCJKb2huXCIsXHJcbiAgXCJTYW50aWFnb1wiLFxyXG4gIFwiQXhlbFwiLFxyXG4gIFwiRXJpY2tcIixcclxuICBcIkJyYW5kb25cIixcclxuICBcIkpvZWxcIixcclxuICBcIkp1YW5cIixcclxuICBcIk1hdGlhc1wiLFxyXG4gIFwiV2lsbGlhbVwiLFxyXG4gIFwiQW5kcmV3XCIsXHJcbiAgXCJEaWVnb1wiLFxyXG4gIFwiSXNhaWFoXCIsXHJcbiAgXCJOaWNvbGFzXCIsXHJcbiAgXCJYYXZpZXJcIixcclxuICBcIkF5ZGVuXCIsXHJcbiAgXCJBdXN0aW5cIixcclxuICBcIkphc29uXCIsXHJcbiAgXCJFbW1hbnVlbFwiLFxyXG4gIFwiS2F5ZGVuXCIsXHJcbiAgXCJKYXljZVwiLFxyXG4gIFwiQ2FsZWJcIixcclxuICBcIkJyeWFuXCIsXHJcbiAgXCJKb3JkYW5cIixcclxuICBcIk5hdGhhbmllbFwiLFxyXG4gIFwiQWxlamFuZHJvXCIsXHJcbiAgXCJEYW1pYW5cIixcclxuICBcIkRlcmVrXCIsXHJcbiAgXCJKYWRpZWxcIixcclxuICBcIkVsaVwiLFxyXG4gIFwiTWF0dGVvXCIsXHJcbiAgXCJBZGFtXCIsXHJcbiAgXCJBbGV4XCIsXHJcbiAgXCJKYWNlXCIsXHJcbiAgXCJIZW5yeVwiLFxyXG4gIFwiSm9zdWVcIixcclxuICBcIk1pZ3VlbFwiLFxyXG4gIFwiRXZhblwiLFxyXG4gIFwiR3JheXNvblwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvY2tOYW1lcztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUT0RPIGZpeCBxdWVzdGlvbiBkYXRhIGZvciBtb2R1bGVcclxuaW1wb3J0ICogYXMgcGxheWVycyBmcm9tIFwiLi9wbGF5ZXJzXCJcclxuXHJcbmNvbnN0IGdyaWRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmlkV3JhcHBlclwiKTtcclxuXHJcbi8vIGNoYW5nZSB0aGlzIHRvIHVzZSBxdWVzdGlvbiBvYmplY3RcclxuLy8gZ3JpZCBjb3VudCBiYXNlZCBvbiBxdWVzdGlvbk9iaiBrZXlzIGxlbmd0aHMsIDIgZGltZW5zaW9ucywgY2F0ZWdvcnkgbGVuZ3RoICsgcXVlc3Rpb24gY291bnQgbGVuZ3RoICsgdG9waWNcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uR3JpZChxdWVzdGlvbk9iamVjdCkge1xyXG4gIC8vIGNvbnNvbGUubG9nKHBsYXllcnMuZ2V0UmFuZG9tSW50SW5SYW5nZSgyLDUpKVxyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdCkubGVuZ3RoO1xyXG5cclxuICBjb25zdCBxdWVzdGlvbkNvdW50ID0gW107XHJcblxyXG4gIC8vIHNldCBncmlkIGNvbHVtbiBjb3VudCBlcXVhbCB0byBudW1iZXIgb2YgcXVlc3Rpb24gY2F0ZWdvcmllc1xyXG4gIGNvbnN0IGdyaWRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkV3JhcHBlclwiKTtcclxuXHJcbiAgZ3JpZFdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBncmlkV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NhdGVnb3J5Q291bnR9LDFmcilgO1xyXG5cclxuICAvLyBnZW5lcmF0ZSB0b3BpYyB0aWxlc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5pZCA9IGBjYXRlZ29yeSR7aX1gO1xyXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xyXG4gICAgdGlsZURpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0udG9waWM7XHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQodGlsZURpdik7XHJcblxyXG4gICAgZ3JpZEFyZWEuYXBwZW5kKGNhdGVnb3J5RGl2KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHF1ZXN0aW9uIGNvdW50cyBmb3IgZWFjaCBjYXRlZ29yeVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyAtMSBmcm9tIGxlbmd0aCB0byBhY2NvdW50IGZvciAndG9waWMnIGtleVxyXG4gICAgcXVlc3Rpb25Db3VudC5wdXNoKE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXSkubGVuZ3RoIC0gMSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbkNvdW50KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHF1ZXN0aW9uIHRpbGVzIHdpdGggdmFsdWVzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUNvdW50OyBpICs9IDEpIHtcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgcXVlc3Rpb25Db3VudFtpXSArIDE7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXRlZ29yeSR7aX1gKTtcclxuICAgICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICB0aWxlRGl2LnRleHRDb250ZW50ID1cclxuICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlO1xyXG5cclxuICAgICAgLy8gYXBwbHkgc3RvY2sgdmFsdWVzIG9mIDEwMCBpbmNyZW1lbnQgcGVyIHJvdyBpZiBhIHZhbHVlXHJcbiAgICAgIC8vIGlzIG5vdCBhIHN1cHBsaWVkIGZyb20gcXVlc3Rpb25PYmpcclxuICAgICAgaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX0wMGA7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkgKiBqKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRlZ29yeURpdi5hcHBlbmQodGlsZURpdik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZW1vdmUgdGhpcyBsYXRlclxyXG5leHBvcnQgY29uc3QgdGVzdCA9IDc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==