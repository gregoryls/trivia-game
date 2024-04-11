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
// consider groups by row instead of column


const gridArea = document.querySelector("#gridWrapper");

function createQuestionGrid(questionObject) {
  const categoryCount = Object.keys(questionObject).length;
  const questionCount = [];
  let randomCategory;
  let randomQuestion;

  // set grid column count equal to number of question categories
  const gridWrapper = document.getElementById("gridWrapper");

  gridWrapper.innerHTML = "";
  gridWrapper.style.gridTemplateColumns = `repeat(${categoryCount},1fr)`;

  // generate topic tiles
  for (let i = 1; i < categoryCount + 1; i += 1) {
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
  for (let i = 1; i < categoryCount + 1; i += 1) {
    // -1 from length to account for 'topic' key
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);
  }

  const dimmDoubleCheck = [];
  for (let i = 1; i < categoryCount + 1; i += 1) {
    for (let j = 1; j < questionCount[i] + 1; j += 1) {
      dimmDoubleCheck.push(
        questionObject[`category${i}`][`question${j}`].double,
      );
    }
  }
  console.log(dimmDoubleCheck);
  if (!dimmDoubleCheck.includes(true)) {
    // TODO fix floor, can't be 0
    //
    randomCategory = Math.floor(Math.random() * categoryCount + 1);
    randomQuestion = Math.floor(
      Math.random() * questionCount[randomCategory - 1],
    );
    console.log(randomCategory, randomQuestion);
  }

  // generate random double question if supplied data doesn't specify
  // if (questionObject[`category${0}`][`question${1}`].double === undefined) {

  // }

  // generate question tiles with values
  for (let i = 1; i < categoryCount + 1; i += 1) {
    for (let j = 1; j < questionCount[i - 1] + 1; j += 1) {
      const categoryDiv = document.getElementById(`category${i}`);
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("question");
      tileDiv.textContent =
        questionObject[`category${i}`][`question${j}`].value;

      // apply stock values of 100 increment per row if a value
      // is not a supplied from questionObj
      if (questionObject[`category${i}`][`question${j}`].value === undefined) {
        tileDiv.textContent = `${j}00`;

        // console.log(i * j);
      }

      // apply dimmadome double effects for any marked questions.
      if (questionObject[`category${i}`][`question${j}`].double) {
        tileDiv.classList.add("dimmDouble");
        tileDiv.addEventListener("click", () => {
          document.getElementById("dimmadome").style.display = "block";
          document.getElementById("dimmDoubleHat").style.display = "block";
        });
      }
      // apply dimmadome double effects using random generation
      // if not specified in question set
      if (i === randomCategory && j === randomQuestion) {
        tileDiv.addEventListener("click", () => {
          document.getElementById("dimmadome").style.display = "block";
          document.getElementById("dimmDoubleHat").style.display = "block";
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3Qix1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxjQUFjLG1EQUFVO0FBQ3hCO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDeE8xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsRUFBRTtBQUNsQztBQUNBO0FBQ0Esb0RBQW9ELEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBLDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekMsb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBLGtDQUFrQyxFQUFFLGNBQWMsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDLG9CQUFvQiw4QkFBOEI7QUFDbEQsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtBQUN0RCxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsY0FBYyxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3N0b2NrTmFtZXMuanMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9ib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvY2tOYW1lcyBmcm9tIFwiLi9zdG9ja05hbWVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXIobmFtZSwgbnVtYmVyLCBzY29yZSkge1xyXG4gIC8vIGFzc2lnbiB0byBvYmogcmF0aGVyIHRoYW4gdGhpcywgc2luY2UgdGhpcyA9PT0gdW5kZWZpbmVkIGluIG1vZHVsZXNcclxuICBjb25zdCBvYmogPSB7fTtcclxuICBvYmouZGlzcGxheVBsYXllck5hbWUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyTmFtZShwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9YCxcclxuICAgICkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9OmA7XHJcbiAgfTtcclxuICBvYmouY2hhbmdlUGxheWVyTmFtZSA9IGZ1bmN0aW9uIGNoYW5nZVBsYXllck5hbWUoKSB7XHJcbiAgICBjb25zdCB0ZW1wTmFtZSA9IHRoaXMubmFtZTtcclxuICAgIHRoaXMubmFtZSA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIiwgXCJKb3NoIEd1bnNvblwiKTtcclxuICAgIC8vIHByZXZlbnQgcGxheWVyIG5hbWUgZnJvbSBkaXNhcHBlYXJpbmcgYnkgdXNpbmcgcHJldmlvdXMgbmFtZVxyXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbnVsbCkgdGhpcy5uYW1lID0gdGVtcE5hbWU7XHJcbiAgICB0aGlzLmRpc3BsYXlQbGF5ZXJOYW1lKHRoaXMubnVtYmVyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gIH07XHJcbiAgb2JqLmluY3JlbWVudFBsYXllclNjb3JlID0gZnVuY3Rpb24gaW5jcmVtZW50UGxheWVyU2NvcmUoc2NvcmVUb0FkZCkge1xyXG4gICAgdGhpcy5zY29yZSArPSBzY29yZVRvQWRkO1xyXG4gIH07XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJTY29yZSA9IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJTY29yZShwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIke3BsYXllck51bWJlcn1TY29yZWApLnRleHRDb250ZW50ID1cclxuICAgICAgdGhpcy5zY29yZTtcclxuICB9O1xyXG4gIG9iai5uYW1lID0gbmFtZTtcclxuICBvYmouc2NvcmUgPSBzY29yZTtcclxuICBvYmoubnVtYmVyID0gbnVtYmVyO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJblJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuLy8gZXhwbG9yZTogcm5nIHN0b2NrbmFtZSBsaXN0LCBhcHBseSB0byBwbGF5ZXIgZ2VuIGxvb3AsIGFkZCB0byB1c2VkIGFycmF5XHJcbi8vIHJuZyBvbiBuZXcgbG9vcCwgY2hlY2sgaWYgcm5nIHVzZWQsIGlmIHNvLCByZXJvbGwsIHN0b2NrbmFtZSBpcyAyMjkgbG9uZ1xyXG4vLyBoYXZlIGEgbGl0dGxlIHRvZ2dsZSByYW5kb20gY2hhcmFjdGVyIG5hbWUgYm94LFxyXG4vLyBmbGlwIGJldHdlZW4gc3RhdGljIGFuZCByYW5kb20gbmFtZSBnZW5lcmF0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJzT2JqKHBsYXllckNvdW50LCByYW5kb21OYW1lcykge1xyXG4gIGNvbnNvbGUubG9nKHN0b2NrTmFtZXMpO1xyXG4gIGNvbnN0IHRha2VuTmFtZXMgPSBbXTtcclxuICBjb25zdCBwbGF5ZXJzID0ge307XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwbGF5ZXJDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0UmFuZG9tSW50SW5SYW5nZSg1LCAxMCkpO1xyXG4gICAgaWYgKHJhbmRvbU5hbWVzKSB7XHJcbiAgICAgIGxldCBybmc7XHJcbiAgICAgIGxldCB0YWtlbiA9IHRydWU7XHJcbiAgICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBudW1iZXIsIGNoZWNrIGlmIGl0J3MgYmVlbiB1c2VkLCBpZiBub3QsIGxvZyBhcyB1c2VkXHJcbiAgICAgIHdoaWxlICh0YWtlbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJuZyA9IGdldFJhbmRvbUludEluUmFuZ2UoMCwgMjI4KTtcclxuICAgICAgICBpZiAoIXRha2VuTmFtZXMuaW5jbHVkZXMocm5nKSkge1xyXG4gICAgICAgICAgdGFrZW5OYW1lcy5wdXNoKHJuZyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YWtlbk5hbWVzKTtcclxuICAgICAgICAgIHRha2VuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXllcnNbaV0gPSBnZW5lcmF0ZVBsYXllcihzdG9ja05hbWVzW3JuZ10sIGksIDApO1xyXG4gICAgICAvLyBjb25zdCBtYXggPSBwbGF5ZXJDb3VudDtcclxuICAgICAgLy8gY29uc3QgbWluID0gcGxheWVyQ291bnQgLSA0O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyYW5kb21OYW1lcykge1xyXG4gICAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tpIC0gMV0sIGksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGxheWVycztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXllck5hbWVzID0gW1widGVzdFwiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsUGxheWVyU2V0dXAocGxheWVyT2JqZWN0KSB7XHJcbiAgY29uc3QgcGxheWVyQ291bnQgPSBPYmplY3Qua2V5cyhwbGF5ZXJPYmplY3QpLmxlbmd0aDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyBwbGF5ZXJzIGluZGV4IGF0IDFcclxuICAgIC8vIGRpc3BsYXkgZGVmYXVsdCB1c2VybmFtZXMgYW5kIGluaXRhbCBzY29yZXNcclxuICAgIHBsYXllck9iamVjdFtpICsgMV0uZGlzcGxheVBsYXllck5hbWUoaSArIDEpO1xyXG5cclxuICAgIC8vIHBsYXllciBuYW1lcyBjYW4gYmUgY2xpY2tlZCB0byBvcGVuIHRoZSBjaGFuZ2UgZGlhbG9ndWVcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5ZXIke2kgKyAxfWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHBsYXllck9iamVjdFtpICsgMV0uY2hhbmdlUGxheWVyTmFtZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWVyQ291bnRJbnB1dCgpIHtcclxuICByZXR1cm4gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQ291bnRcIikudmFsdWUpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJVSShwbGF5ZXJOdW1iZXIpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZChcInBsYXllclwiKTtcclxuXHJcbiAgbmFtZS5pZCA9IGBwbGF5ZXIke3BsYXllck51bWJlcn1gO1xyXG5cclxuICBzY29yZS5jbGFzc0xpc3QuYWRkKFwic2NvcmVcIik7XHJcbiAgc2NvcmUuaWQgPSBgcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgO1xyXG5cclxuICBkaXYuYXBwZW5kKG5hbWUsIHNjb3JlKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG4iLCJjb25zdCBzdG9ja05hbWVzID0gW1xyXG4gIFwiQ2hhc2VcIixcclxuICBcIkV0aGFuXCIsXHJcbiAgXCJTdGFuXCIsXHJcbiAgXCJUYXlsb3JcIixcclxuICBcIkFsZXhhbmRlclwiLFxyXG4gIFwiQW1hcmlcIixcclxuICBcIkpheWNlXCIsXHJcbiAgXCJOYXRoYW5cIixcclxuICBcIkFhcm9uXCIsXHJcbiAgXCJCcnljZVwiLFxyXG4gIFwiSHVudGVyXCIsXHJcbiAgXCJKYWNvYlwiLFxyXG4gIFwiTmFzaXJcIixcclxuICBcIk1hdHRoZXdcIixcclxuICBcIlByaW5jZVwiLFxyXG4gIFwiWGF2aWVyXCIsXHJcbiAgXCJLYXJ0ZXJcIixcclxuICBcIlRyaXN0YW5cIixcclxuICBcIkpvbmF0aGFuXCIsXHJcbiAgXCJKdXN0aW5cIixcclxuICBcIlR5bGVyXCIsXHJcbiAgXCJLYWxlYlwiLFxyXG4gIFwiU2ViYXN0aWFuXCIsXHJcbiAgXCJBeWRlblwiLFxyXG4gIFwiSmFzb25cIixcclxuICBcIkpvc2VwaFwiLFxyXG4gIFwiQXVzdGluXCIsXHJcbiAgXCJKYWRlblwiLFxyXG4gIFwiTmF0aGFuaWVsXCIsXHJcbiAgXCJTYW11ZWxcIixcclxuICBcIkR5bGFuXCIsXHJcbiAgXCJKYW1lc1wiLFxyXG4gIFwiSm9lbFwiLFxyXG4gIFwiQXNoZXJcIixcclxuICBcIkthaVwiLFxyXG4gIFwiQ2FsZWJcIixcclxuICBcIkdhYnJpZWxcIixcclxuICBcIkpheWNlb25cIixcclxuICBcIk1hbWFkb3VcIixcclxuICBcIkVtbWFudWVsXCIsXHJcbiAgXCJaYWNoYXJ5XCIsXHJcbiAgXCJFemVraWVsXCIsXHJcbiAgXCJOaWNob2xhc1wiLFxyXG4gIFwiWmFpcmVcIixcclxuICBcIkFkb25pc1wiLFxyXG4gIFwiQmVuamFtaW5cIixcclxuICBcIkFzaHRvblwiLFxyXG4gIFwiQXZlcnlcIixcclxuICBcIkthbWVyb25cIixcclxuICBcIkxlZ2VuZFwiLFxyXG4gIFwiTGV2aVwiLFxyXG4gIFwiTHVjYXNcIixcclxuICBcIkFuZHJld1wiLFxyXG4gIFwiRWxpXCIsXHJcbiAgXCJKdWxpYW5cIixcclxuICBcIk9tYXJpXCIsXHJcbiAgXCJBZGFtXCIsXHJcbiAgXCJFenJhXCIsXHJcbiAgXCJDYWlyb1wiLFxyXG4gIFwiSXNyYWVsXCIsXHJcbiAgXCJKYWlkZW5cIixcclxuICBcIkpheG9uXCIsXHJcbiAgXCJKdXN0aWNlXCIsXHJcbiAgXCJLYW1hcmlcIixcclxuICBcIkJyYW5kb25cIixcclxuICBcIkdyZXlzb25cIixcclxuICBcIk11aGFtbWFkXCIsXHJcbiAgXCJTaW5jZXJlXCIsXHJcbiAgXCJBbmRyZVwiLFxyXG4gIFwiSWJyYWhpbWFcIixcclxuICBcIkphY2tzb25cIixcclxuICBcIkpheWxlblwiLFxyXG4gIFwiS2FkZW5cIixcclxuICBcIkFiZG91bGF5ZVwiLFxyXG4gIFwiQ2FpZGVuXCIsXHJcbiAgXCJDaGFuY2VcIixcclxuICBcIkV2YW5cIixcclxuICBcIkdpb3Zhbm5pXCIsXHJcbiAgXCJHcmF5c29uXCIsXHJcbiAgXCJLZXZpblwiLFxyXG4gIFwiT21hclwiLFxyXG4gIFwiU2hhd25cIixcclxuICBcIkF1Z3VzdFwiLFxyXG4gIFwiSXNhYWNcIixcclxuICBcIktoYWxpbFwiLFxyXG4gIFwiS3lsZVwiLFxyXG4gIFwiTWFyY3VzXCIsXHJcbiAgXCJaYW5lXCIsXHJcbiAgXCJBbGlcIixcclxuICBcIk1haXNvblwiLFxyXG4gIFwiUHJpbmNldG9uXCIsXHJcbiAgXCJSb2JlcnRcIixcclxuICBcIkFjZVwiLFxyXG4gIFwiQnJ5YW5cIixcclxuICBcIkdpYW5uaVwiLFxyXG4gIFwiSmFtZWxcIixcclxuICBcIkphbWlyXCIsXHJcbiAgXCJKb2huXCIsXHJcbiAgXCJOb2xhblwiLFxyXG4gIFwiT3VzbWFuZVwiLFxyXG4gIFwiQWxwaGFcIixcclxuICBcIkFtYWRvdVwiLFxyXG4gIFwiSmF4c29uXCIsXHJcbiAgXCJLYXJlZW1cIixcclxuICBcIktpbmdzdG9uXCIsXHJcbiAgXCJMdWtlXCIsXHJcbiAgXCJNZWtoaVwiLFxyXG4gIFwiTXlsZXNcIixcclxuICBcIlN0ZXBoZW5cIixcclxuICBcIkFkZW5cIixcclxuICBcIkFkcmlhblwiLFxyXG4gIFwiQWxleFwiLFxyXG4gIFwiQm91YmFjYXJcIixcclxuICBcIkNheWRlblwiLFxyXG4gIFwiQ29ubm9yXCIsXHJcbiAgXCJDb3JleVwiLFxyXG4gIFwiRGFsbGFzXCIsXHJcbiAgXCJIYXlkZW5cIixcclxuICBcIkpvbmFoXCIsXHJcbiAgXCJLYW1yZW5cIixcclxuICBcIk1ham9yXCIsXHJcbiAgXCJQaG9lbml4XCIsXHJcbiAgXCJTZWFuXCIsXHJcbiAgXCJBYmRvdWxcIixcclxuICBcIkNhcnNvblwiLFxyXG4gIFwiRG9taW5pY1wiLFxyXG4gIFwiSmFzaWFoXCIsXHJcbiAgXCJKdWxpdXNcIixcclxuICBcIktlbm5ldGhcIixcclxuICBcIkxhbmRvblwiLFxyXG4gIFwiTWFsaWtcIixcclxuICBcIk1hcmtcIixcclxuICBcIk1pbGVzXCIsXHJcbiAgXCJNb3VoYW1lZFwiLFxyXG4gIFwiT3VtYXJcIixcclxuICBcIlNhbWlyXCIsXHJcbiAgXCJTb2xvbW9uXCIsXHJcbiAgXCJUaW1vdGh5XCIsXHJcbiAgXCJXaWxsaWFtXCIsXHJcbiAgXCJaYXlkZW5cIixcclxuICBcIkxpYW1cIixcclxuICBcIkphY29iXCIsXHJcbiAgXCJEeWxhblwiLFxyXG4gIFwiTWF0dGhld1wiLFxyXG4gIFwiTm9haFwiLFxyXG4gIFwiU2ViYXN0aWFuXCIsXHJcbiAgXCJKYXlkZW5cIixcclxuICBcIkx1Y2FzXCIsXHJcbiAgXCJFdGhhblwiLFxyXG4gIFwiQWFyb25cIixcclxuICBcIkFuZ2VsXCIsXHJcbiAgXCJEYW5pZWxcIixcclxuICBcIkxvZ2FuXCIsXHJcbiAgXCJBbGV4YW5kZXJcIixcclxuICBcIk1hc29uXCIsXHJcbiAgXCJBaWRlblwiLFxyXG4gIFwiTWF0ZW9cIixcclxuICBcIkpvc2h1YVwiLFxyXG4gIFwiRGF2aWRcIixcclxuICBcIkFkcmlhblwiLFxyXG4gIFwiQW50aG9ueVwiLFxyXG4gIFwiTWljaGFlbFwiLFxyXG4gIFwiSm9zZXBoXCIsXHJcbiAgXCJJYW5cIixcclxuICBcIkNocmlzdG9waGVyXCIsXHJcbiAgXCJFbGlhc1wiLFxyXG4gIFwiR2FicmllbFwiLFxyXG4gIFwiUnlhblwiLFxyXG4gIFwiSXNhYWNcIixcclxuICBcIkpvc2VcIixcclxuICBcIlRoaWFnb1wiLFxyXG4gIFwiRWxpamFoXCIsXHJcbiAgXCJKYW1lc1wiLFxyXG4gIFwiT2xpdmVyXCIsXHJcbiAgXCJKb3NpYWhcIixcclxuICBcIk5hdGhhblwiLFxyXG4gIFwiSnVsaWFuXCIsXHJcbiAgXCJKdXN0aW5cIixcclxuICBcIkNhcmxvc1wiLFxyXG4gIFwiR2FlbFwiLFxyXG4gIFwiTHVpc1wiLFxyXG4gIFwiQWxhblwiLFxyXG4gIFwiSmVyZW15XCIsXHJcbiAgXCJKb25hdGhhblwiLFxyXG4gIFwiTGVvbmFyZG9cIixcclxuICBcIktldmluXCIsXHJcbiAgXCJTYW11ZWxcIixcclxuICBcIkplcmVtaWFoXCIsXHJcbiAgXCJCZW5qYW1pblwiLFxyXG4gIFwiTmljaG9sYXNcIixcclxuICBcIkNocmlzdGlhblwiLFxyXG4gIFwiSm9oblwiLFxyXG4gIFwiU2FudGlhZ29cIixcclxuICBcIkF4ZWxcIixcclxuICBcIkVyaWNrXCIsXHJcbiAgXCJCcmFuZG9uXCIsXHJcbiAgXCJKb2VsXCIsXHJcbiAgXCJKdWFuXCIsXHJcbiAgXCJNYXRpYXNcIixcclxuICBcIldpbGxpYW1cIixcclxuICBcIkFuZHJld1wiLFxyXG4gIFwiRGllZ29cIixcclxuICBcIklzYWlhaFwiLFxyXG4gIFwiTmljb2xhc1wiLFxyXG4gIFwiWGF2aWVyXCIsXHJcbiAgXCJBeWRlblwiLFxyXG4gIFwiQXVzdGluXCIsXHJcbiAgXCJKYXNvblwiLFxyXG4gIFwiRW1tYW51ZWxcIixcclxuICBcIktheWRlblwiLFxyXG4gIFwiSmF5Y2VcIixcclxuICBcIkNhbGViXCIsXHJcbiAgXCJCcnlhblwiLFxyXG4gIFwiSm9yZGFuXCIsXHJcbiAgXCJOYXRoYW5pZWxcIixcclxuICBcIkFsZWphbmRyb1wiLFxyXG4gIFwiRGFtaWFuXCIsXHJcbiAgXCJEZXJla1wiLFxyXG4gIFwiSmFkaWVsXCIsXHJcbiAgXCJFbGlcIixcclxuICBcIk1hdHRlb1wiLFxyXG4gIFwiQWRhbVwiLFxyXG4gIFwiQWxleFwiLFxyXG4gIFwiSmFjZVwiLFxyXG4gIFwiSGVucnlcIixcclxuICBcIkpvc3VlXCIsXHJcbiAgXCJNaWd1ZWxcIixcclxuICBcIkV2YW5cIixcclxuICBcIkdyYXlzb25cIixcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b2NrTmFtZXM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETyBmaXggcXVlc3Rpb24gZGF0YSBmb3IgbW9kdWxlXHJcbi8vIGNvbnNpZGVyIGdyb3VwcyBieSByb3cgaW5zdGVhZCBvZiBjb2x1bW5cclxuaW1wb3J0ICogYXMgcGxheWVycyBmcm9tIFwiLi9wbGF5ZXJzXCI7XHJcblxyXG5jb25zdCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFdyYXBwZXJcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25HcmlkKHF1ZXN0aW9uT2JqZWN0KSB7XHJcbiAgY29uc3QgY2F0ZWdvcnlDb3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0KS5sZW5ndGg7XHJcbiAgY29uc3QgcXVlc3Rpb25Db3VudCA9IFtdO1xyXG4gIGxldCByYW5kb21DYXRlZ29yeTtcclxuICBsZXQgcmFuZG9tUXVlc3Rpb247XHJcblxyXG4gIC8vIHNldCBncmlkIGNvbHVtbiBjb3VudCBlcXVhbCB0byBudW1iZXIgb2YgcXVlc3Rpb24gY2F0ZWdvcmllc1xyXG4gIGNvbnN0IGdyaWRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkV3JhcHBlclwiKTtcclxuXHJcbiAgZ3JpZFdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBncmlkV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NhdGVnb3J5Q291bnR9LDFmcilgO1xyXG5cclxuICAvLyBnZW5lcmF0ZSB0b3BpYyB0aWxlc1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY2F0ZWdvcnlEaXYuaWQgPSBgY2F0ZWdvcnkke2l9YDtcclxuICAgIGNhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTtcclxuICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uVG9waWNcIik7XHJcbiAgICB0aWxlRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdLnRvcGljO1xyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kKHRpbGVEaXYpO1xyXG5cclxuICAgIGdyaWRBcmVhLmFwcGVuZChjYXRlZ29yeURpdik7XHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSBxdWVzdGlvbiBjb3VudHMgZm9yIGVhY2ggY2F0ZWdvcnlcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNhdGVnb3J5Q291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgIC8vIC0xIGZyb20gbGVuZ3RoIHRvIGFjY291bnQgZm9yICd0b3BpYycga2V5XHJcbiAgICBxdWVzdGlvbkNvdW50LnB1c2goT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdKS5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpbW1Eb3VibGVDaGVjayA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBxdWVzdGlvbkNvdW50W2ldICsgMTsgaiArPSAxKSB7XHJcbiAgICAgIGRpbW1Eb3VibGVDaGVjay5wdXNoKFxyXG4gICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0uZG91YmxlLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhkaW1tRG91YmxlQ2hlY2spO1xyXG4gIGlmICghZGltbURvdWJsZUNoZWNrLmluY2x1ZGVzKHRydWUpKSB7XHJcbiAgICAvLyBUT0RPIGZpeCBmbG9vciwgY2FuJ3QgYmUgMFxyXG4gICAgLy9cclxuICAgIHJhbmRvbUNhdGVnb3J5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2F0ZWdvcnlDb3VudCArIDEpO1xyXG4gICAgcmFuZG9tUXVlc3Rpb24gPSBNYXRoLmZsb29yKFxyXG4gICAgICBNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25Db3VudFtyYW5kb21DYXRlZ29yeSAtIDFdLFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUNhdGVnb3J5LCByYW5kb21RdWVzdGlvbik7XHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSByYW5kb20gZG91YmxlIHF1ZXN0aW9uIGlmIHN1cHBsaWVkIGRhdGEgZG9lc24ndCBzcGVjaWZ5XHJcbiAgLy8gaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7MH1gXVtgcXVlc3Rpb24kezF9YF0uZG91YmxlID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBnZW5lcmF0ZSBxdWVzdGlvbiB0aWxlcyB3aXRoIHZhbHVlc1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBxdWVzdGlvbkNvdW50W2kgLSAxXSArIDE7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXRlZ29yeSR7aX1gKTtcclxuICAgICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICB0aWxlRGl2LnRleHRDb250ZW50ID1cclxuICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlO1xyXG5cclxuICAgICAgLy8gYXBwbHkgc3RvY2sgdmFsdWVzIG9mIDEwMCBpbmNyZW1lbnQgcGVyIHJvdyBpZiBhIHZhbHVlXHJcbiAgICAgIC8vIGlzIG5vdCBhIHN1cHBsaWVkIGZyb20gcXVlc3Rpb25PYmpcclxuICAgICAgaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBgJHtqfTAwYDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSAqIGopO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSBkaW1tYWRvbWUgZG91YmxlIGVmZmVjdHMgZm9yIGFueSBtYXJrZWQgcXVlc3Rpb25zLlxyXG4gICAgICBpZiAocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS5kb3VibGUpIHtcclxuICAgICAgICB0aWxlRGl2LmNsYXNzTGlzdC5hZGQoXCJkaW1tRG91YmxlXCIpO1xyXG4gICAgICAgIHRpbGVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGltbWFkb21lXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpbW1Eb3VibGVIYXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBhcHBseSBkaW1tYWRvbWUgZG91YmxlIGVmZmVjdHMgdXNpbmcgcmFuZG9tIGdlbmVyYXRpb25cclxuICAgICAgLy8gaWYgbm90IHNwZWNpZmllZCBpbiBxdWVzdGlvbiBzZXRcclxuICAgICAgaWYgKGkgPT09IHJhbmRvbUNhdGVnb3J5ICYmIGogPT09IHJhbmRvbVF1ZXN0aW9uKSB7XHJcbiAgICAgICAgdGlsZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaW1tYWRvbWVcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGltbURvdWJsZUhhdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGVnb3J5RGl2LmFwcGVuZCh0aWxlRGl2KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHJlbW92ZSB0aGlzIGxhdGVyXHJcbmV4cG9ydCBjb25zdCB0ZXN0ID0gNztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9