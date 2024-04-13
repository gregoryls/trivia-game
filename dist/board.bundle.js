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

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

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
  console.log(categoryCount, questionCount);
  for (let i = 1; i < categoryCount + 1; i += 1) {
    for (let j = 1; j < questionCount[i - 1] + 1; j += 1) {
      // questionCount is a standard 0-index array
      dimmDoubleCheck.push(
        questionObject[`category${i}`][`question${j}`].double,
      );
    }
  }
  console.log(dimmDoubleCheck);
  // check for question sets that don't have double property declared
  if (!dimmDoubleCheck.includes(true)) {
    randomCategory = getRandomNumberInRange(1, categoryCount);
    randomQuestion = getRandomNumberInRange(
      1,
      questionCount[randomCategory - 1],
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
        tileDiv.classList.add("dimmDouble");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3Qix1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxjQUFjLG1EQUFVO0FBQ3hCO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDeE8xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQSxvREFBb0QsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBLGtDQUFrQyxFQUFFLGNBQWMsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekMsb0JBQW9CLDhCQUE4QjtBQUNsRCw2REFBNkQsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRSxjQUFjLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsY0FBYyxFQUFFO0FBQ3RELGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9zdG9ja05hbWVzLmpzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b2NrTmFtZXMgZnJvbSBcIi4vc3RvY2tOYW1lc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyKG5hbWUsIG51bWJlciwgc2NvcmUpIHtcclxuICAvLyBhc3NpZ24gdG8gb2JqIHJhdGhlciB0aGFuIHRoaXMsIHNpbmNlIHRoaXMgPT09IHVuZGVmaW5lZCBpbiBtb2R1bGVzXHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gZGlzcGxheVBsYXllck5hbWUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3BsYXllciR7cGxheWVyTnVtYmVyfWAsXHJcbiAgICApLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfTpgO1xyXG4gIH07XHJcbiAgb2JqLmNoYW5nZVBsYXllck5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXJOYW1lKCkge1xyXG4gICAgY29uc3QgdGVtcE5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsIFwiSm9zaCBHdW5zb25cIik7XHJcbiAgICAvLyBwcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG51bGwpIHRoaXMubmFtZSA9IHRlbXBOYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5UGxheWVyTmFtZSh0aGlzLm51bWJlcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9O1xyXG4gIG9iai5pbmNyZW1lbnRQbGF5ZXJTY29yZSA9IGZ1bmN0aW9uIGluY3JlbWVudFBsYXllclNjb3JlKHNjb3JlVG9BZGQpIHtcclxuICAgIHRoaXMuc2NvcmUgKz0gc2NvcmVUb0FkZDtcclxuICB9O1xyXG4gIG9iai5kaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2NvcmUocGxheWVyTnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMuc2NvcmU7XHJcbiAgfTtcclxuICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgb2JqLnNjb3JlID0gc2NvcmU7XHJcbiAgb2JqLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcbi8vIGV4cGxvcmU6IHJuZyBzdG9ja25hbWUgbGlzdCwgYXBwbHkgdG8gcGxheWVyIGdlbiBsb29wLCBhZGQgdG8gdXNlZCBhcnJheVxyXG4vLyBybmcgb24gbmV3IGxvb3AsIGNoZWNrIGlmIHJuZyB1c2VkLCBpZiBzbywgcmVyb2xsLCBzdG9ja25hbWUgaXMgMjI5IGxvbmdcclxuLy8gaGF2ZSBhIGxpdHRsZSB0b2dnbGUgcmFuZG9tIGNoYXJhY3RlciBuYW1lIGJveCxcclxuLy8gZmxpcCBiZXR3ZWVuIHN0YXRpYyBhbmQgcmFuZG9tIG5hbWUgZ2VuZXJhdGlvblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGxheWVyc09iaihwbGF5ZXJDb3VudCwgcmFuZG9tTmFtZXMpIHtcclxuICBjb25zb2xlLmxvZyhzdG9ja05hbWVzKTtcclxuICBjb25zdCB0YWtlbk5hbWVzID0gW107XHJcbiAgY29uc3QgcGxheWVycyA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGxheWVyQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldFJhbmRvbUludEluUmFuZ2UoNSwgMTApKTtcclxuICAgIGlmIChyYW5kb21OYW1lcykge1xyXG4gICAgICBsZXQgcm5nO1xyXG4gICAgICBsZXQgdGFrZW4gPSB0cnVlO1xyXG4gICAgICAvLyBnZW5lcmF0ZSByYW5kb20gbnVtYmVyLCBjaGVjayBpZiBpdCdzIGJlZW4gdXNlZCwgaWYgbm90LCBsb2cgYXMgdXNlZFxyXG4gICAgICB3aGlsZSAodGFrZW4gPT09IHRydWUpIHtcclxuICAgICAgICBybmcgPSBnZXRSYW5kb21JbnRJblJhbmdlKDAsIDIyOCk7XHJcbiAgICAgICAgaWYgKCF0YWtlbk5hbWVzLmluY2x1ZGVzKHJuZykpIHtcclxuICAgICAgICAgIHRha2VuTmFtZXMucHVzaChybmcpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGFrZW5OYW1lcyk7XHJcbiAgICAgICAgICB0YWtlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwbGF5ZXJzW2ldID0gZ2VuZXJhdGVQbGF5ZXIoc3RvY2tOYW1lc1tybmddLCBpLCAwKTtcclxuICAgICAgLy8gY29uc3QgbWF4ID0gcGxheWVyQ291bnQ7XHJcbiAgICAgIC8vIGNvbnN0IG1pbiA9IHBsYXllckNvdW50IC0gNDtcclxuICAgIH1cclxuICAgIGlmICghcmFuZG9tTmFtZXMpIHtcclxuICAgICAgcGxheWVyc1tpXSA9IGdlbmVyYXRlUGxheWVyKHN0b2NrTmFtZXNbaSAtIDFdLCBpLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBsYXllcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJOYW1lcyA9IFtcInRlc3RcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBsYXllclNldHVwKHBsYXllck9iamVjdCkge1xyXG4gIGNvbnN0IHBsYXllckNvdW50ID0gT2JqZWN0LmtleXMocGxheWVyT2JqZWN0KS5sZW5ndGg7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgLy8gcGxheWVycyBpbmRleCBhdCAxXHJcbiAgICAvLyBkaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzIGFuZCBpbml0YWwgc2NvcmVzXHJcbiAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmRpc3BsYXlQbGF5ZXJOYW1lKGkgKyAxKTtcclxuXHJcbiAgICAvLyBwbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyJHtpICsgMX1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBwbGF5ZXJPYmplY3RbaSArIDFdLmNoYW5nZVBsYXllck5hbWUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllckNvdW50SW5wdXQoKSB7XHJcbiAgcmV0dXJuIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckNvdW50XCIpLnZhbHVlKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyVUkocGxheWVyTnVtYmVyKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJcIik7XHJcblxyXG4gIG5hbWUuaWQgPSBgcGxheWVyJHtwbGF5ZXJOdW1iZXJ9YDtcclxuXHJcbiAgc2NvcmUuY2xhc3NMaXN0LmFkZChcInNjb3JlXCIpO1xyXG4gIHNjb3JlLmlkID0gYHBsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYDtcclxuXHJcbiAgZGl2LmFwcGVuZChuYW1lLCBzY29yZSk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuIiwiY29uc3Qgc3RvY2tOYW1lcyA9IFtcclxuICBcIkNoYXNlXCIsXHJcbiAgXCJFdGhhblwiLFxyXG4gIFwiU3RhblwiLFxyXG4gIFwiVGF5bG9yXCIsXHJcbiAgXCJBbGV4YW5kZXJcIixcclxuICBcIkFtYXJpXCIsXHJcbiAgXCJKYXljZVwiLFxyXG4gIFwiTmF0aGFuXCIsXHJcbiAgXCJBYXJvblwiLFxyXG4gIFwiQnJ5Y2VcIixcclxuICBcIkh1bnRlclwiLFxyXG4gIFwiSmFjb2JcIixcclxuICBcIk5hc2lyXCIsXHJcbiAgXCJNYXR0aGV3XCIsXHJcbiAgXCJQcmluY2VcIixcclxuICBcIlhhdmllclwiLFxyXG4gIFwiS2FydGVyXCIsXHJcbiAgXCJUcmlzdGFuXCIsXHJcbiAgXCJKb25hdGhhblwiLFxyXG4gIFwiSnVzdGluXCIsXHJcbiAgXCJUeWxlclwiLFxyXG4gIFwiS2FsZWJcIixcclxuICBcIlNlYmFzdGlhblwiLFxyXG4gIFwiQXlkZW5cIixcclxuICBcIkphc29uXCIsXHJcbiAgXCJKb3NlcGhcIixcclxuICBcIkF1c3RpblwiLFxyXG4gIFwiSmFkZW5cIixcclxuICBcIk5hdGhhbmllbFwiLFxyXG4gIFwiU2FtdWVsXCIsXHJcbiAgXCJEeWxhblwiLFxyXG4gIFwiSmFtZXNcIixcclxuICBcIkpvZWxcIixcclxuICBcIkFzaGVyXCIsXHJcbiAgXCJLYWlcIixcclxuICBcIkNhbGViXCIsXHJcbiAgXCJHYWJyaWVsXCIsXHJcbiAgXCJKYXljZW9uXCIsXHJcbiAgXCJNYW1hZG91XCIsXHJcbiAgXCJFbW1hbnVlbFwiLFxyXG4gIFwiWmFjaGFyeVwiLFxyXG4gIFwiRXpla2llbFwiLFxyXG4gIFwiTmljaG9sYXNcIixcclxuICBcIlphaXJlXCIsXHJcbiAgXCJBZG9uaXNcIixcclxuICBcIkJlbmphbWluXCIsXHJcbiAgXCJBc2h0b25cIixcclxuICBcIkF2ZXJ5XCIsXHJcbiAgXCJLYW1lcm9uXCIsXHJcbiAgXCJMZWdlbmRcIixcclxuICBcIkxldmlcIixcclxuICBcIkx1Y2FzXCIsXHJcbiAgXCJBbmRyZXdcIixcclxuICBcIkVsaVwiLFxyXG4gIFwiSnVsaWFuXCIsXHJcbiAgXCJPbWFyaVwiLFxyXG4gIFwiQWRhbVwiLFxyXG4gIFwiRXpyYVwiLFxyXG4gIFwiQ2Fpcm9cIixcclxuICBcIklzcmFlbFwiLFxyXG4gIFwiSmFpZGVuXCIsXHJcbiAgXCJKYXhvblwiLFxyXG4gIFwiSnVzdGljZVwiLFxyXG4gIFwiS2FtYXJpXCIsXHJcbiAgXCJCcmFuZG9uXCIsXHJcbiAgXCJHcmV5c29uXCIsXHJcbiAgXCJNdWhhbW1hZFwiLFxyXG4gIFwiU2luY2VyZVwiLFxyXG4gIFwiQW5kcmVcIixcclxuICBcIklicmFoaW1hXCIsXHJcbiAgXCJKYWNrc29uXCIsXHJcbiAgXCJKYXlsZW5cIixcclxuICBcIkthZGVuXCIsXHJcbiAgXCJBYmRvdWxheWVcIixcclxuICBcIkNhaWRlblwiLFxyXG4gIFwiQ2hhbmNlXCIsXHJcbiAgXCJFdmFuXCIsXHJcbiAgXCJHaW92YW5uaVwiLFxyXG4gIFwiR3JheXNvblwiLFxyXG4gIFwiS2V2aW5cIixcclxuICBcIk9tYXJcIixcclxuICBcIlNoYXduXCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIklzYWFjXCIsXHJcbiAgXCJLaGFsaWxcIixcclxuICBcIkt5bGVcIixcclxuICBcIk1hcmN1c1wiLFxyXG4gIFwiWmFuZVwiLFxyXG4gIFwiQWxpXCIsXHJcbiAgXCJNYWlzb25cIixcclxuICBcIlByaW5jZXRvblwiLFxyXG4gIFwiUm9iZXJ0XCIsXHJcbiAgXCJBY2VcIixcclxuICBcIkJyeWFuXCIsXHJcbiAgXCJHaWFubmlcIixcclxuICBcIkphbWVsXCIsXHJcbiAgXCJKYW1pclwiLFxyXG4gIFwiSm9oblwiLFxyXG4gIFwiTm9sYW5cIixcclxuICBcIk91c21hbmVcIixcclxuICBcIkFscGhhXCIsXHJcbiAgXCJBbWFkb3VcIixcclxuICBcIkpheHNvblwiLFxyXG4gIFwiS2FyZWVtXCIsXHJcbiAgXCJLaW5nc3RvblwiLFxyXG4gIFwiTHVrZVwiLFxyXG4gIFwiTWVraGlcIixcclxuICBcIk15bGVzXCIsXHJcbiAgXCJTdGVwaGVuXCIsXHJcbiAgXCJBZGVuXCIsXHJcbiAgXCJBZHJpYW5cIixcclxuICBcIkFsZXhcIixcclxuICBcIkJvdWJhY2FyXCIsXHJcbiAgXCJDYXlkZW5cIixcclxuICBcIkNvbm5vclwiLFxyXG4gIFwiQ29yZXlcIixcclxuICBcIkRhbGxhc1wiLFxyXG4gIFwiSGF5ZGVuXCIsXHJcbiAgXCJKb25haFwiLFxyXG4gIFwiS2FtcmVuXCIsXHJcbiAgXCJNYWpvclwiLFxyXG4gIFwiUGhvZW5peFwiLFxyXG4gIFwiU2VhblwiLFxyXG4gIFwiQWJkb3VsXCIsXHJcbiAgXCJDYXJzb25cIixcclxuICBcIkRvbWluaWNcIixcclxuICBcIkphc2lhaFwiLFxyXG4gIFwiSnVsaXVzXCIsXHJcbiAgXCJLZW5uZXRoXCIsXHJcbiAgXCJMYW5kb25cIixcclxuICBcIk1hbGlrXCIsXHJcbiAgXCJNYXJrXCIsXHJcbiAgXCJNaWxlc1wiLFxyXG4gIFwiTW91aGFtZWRcIixcclxuICBcIk91bWFyXCIsXHJcbiAgXCJTYW1pclwiLFxyXG4gIFwiU29sb21vblwiLFxyXG4gIFwiVGltb3RoeVwiLFxyXG4gIFwiV2lsbGlhbVwiLFxyXG4gIFwiWmF5ZGVuXCIsXHJcbiAgXCJMaWFtXCIsXHJcbiAgXCJKYWNvYlwiLFxyXG4gIFwiRHlsYW5cIixcclxuICBcIk1hdHRoZXdcIixcclxuICBcIk5vYWhcIixcclxuICBcIlNlYmFzdGlhblwiLFxyXG4gIFwiSmF5ZGVuXCIsXHJcbiAgXCJMdWNhc1wiLFxyXG4gIFwiRXRoYW5cIixcclxuICBcIkFhcm9uXCIsXHJcbiAgXCJBbmdlbFwiLFxyXG4gIFwiRGFuaWVsXCIsXHJcbiAgXCJMb2dhblwiLFxyXG4gIFwiQWxleGFuZGVyXCIsXHJcbiAgXCJNYXNvblwiLFxyXG4gIFwiQWlkZW5cIixcclxuICBcIk1hdGVvXCIsXHJcbiAgXCJKb3NodWFcIixcclxuICBcIkRhdmlkXCIsXHJcbiAgXCJBZHJpYW5cIixcclxuICBcIkFudGhvbnlcIixcclxuICBcIk1pY2hhZWxcIixcclxuICBcIkpvc2VwaFwiLFxyXG4gIFwiSWFuXCIsXHJcbiAgXCJDaHJpc3RvcGhlclwiLFxyXG4gIFwiRWxpYXNcIixcclxuICBcIkdhYnJpZWxcIixcclxuICBcIlJ5YW5cIixcclxuICBcIklzYWFjXCIsXHJcbiAgXCJKb3NlXCIsXHJcbiAgXCJUaGlhZ29cIixcclxuICBcIkVsaWphaFwiLFxyXG4gIFwiSmFtZXNcIixcclxuICBcIk9saXZlclwiLFxyXG4gIFwiSm9zaWFoXCIsXHJcbiAgXCJOYXRoYW5cIixcclxuICBcIkp1bGlhblwiLFxyXG4gIFwiSnVzdGluXCIsXHJcbiAgXCJDYXJsb3NcIixcclxuICBcIkdhZWxcIixcclxuICBcIkx1aXNcIixcclxuICBcIkFsYW5cIixcclxuICBcIkplcmVteVwiLFxyXG4gIFwiSm9uYXRoYW5cIixcclxuICBcIkxlb25hcmRvXCIsXHJcbiAgXCJLZXZpblwiLFxyXG4gIFwiU2FtdWVsXCIsXHJcbiAgXCJKZXJlbWlhaFwiLFxyXG4gIFwiQmVuamFtaW5cIixcclxuICBcIk5pY2hvbGFzXCIsXHJcbiAgXCJDaHJpc3RpYW5cIixcclxuICBcIkpvaG5cIixcclxuICBcIlNhbnRpYWdvXCIsXHJcbiAgXCJBeGVsXCIsXHJcbiAgXCJFcmlja1wiLFxyXG4gIFwiQnJhbmRvblwiLFxyXG4gIFwiSm9lbFwiLFxyXG4gIFwiSnVhblwiLFxyXG4gIFwiTWF0aWFzXCIsXHJcbiAgXCJXaWxsaWFtXCIsXHJcbiAgXCJBbmRyZXdcIixcclxuICBcIkRpZWdvXCIsXHJcbiAgXCJJc2FpYWhcIixcclxuICBcIk5pY29sYXNcIixcclxuICBcIlhhdmllclwiLFxyXG4gIFwiQXlkZW5cIixcclxuICBcIkF1c3RpblwiLFxyXG4gIFwiSmFzb25cIixcclxuICBcIkVtbWFudWVsXCIsXHJcbiAgXCJLYXlkZW5cIixcclxuICBcIkpheWNlXCIsXHJcbiAgXCJDYWxlYlwiLFxyXG4gIFwiQnJ5YW5cIixcclxuICBcIkpvcmRhblwiLFxyXG4gIFwiTmF0aGFuaWVsXCIsXHJcbiAgXCJBbGVqYW5kcm9cIixcclxuICBcIkRhbWlhblwiLFxyXG4gIFwiRGVyZWtcIixcclxuICBcIkphZGllbFwiLFxyXG4gIFwiRWxpXCIsXHJcbiAgXCJNYXR0ZW9cIixcclxuICBcIkFkYW1cIixcclxuICBcIkFsZXhcIixcclxuICBcIkphY2VcIixcclxuICBcIkhlbnJ5XCIsXHJcbiAgXCJKb3N1ZVwiLFxyXG4gIFwiTWlndWVsXCIsXHJcbiAgXCJFdmFuXCIsXHJcbiAgXCJHcmF5c29uXCIsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9ja05hbWVzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE8gZml4IHF1ZXN0aW9uIGRhdGEgZm9yIG1vZHVsZVxyXG4vLyBjb25zaWRlciBncm91cHMgYnkgcm93IGluc3RlYWQgb2YgY29sdW1uXHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5cclxuY29uc3QgZ3JpZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyaWRXcmFwcGVyXCIpO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVySW5SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkdyaWQocXVlc3Rpb25PYmplY3QpIHtcclxuICBjb25zdCBjYXRlZ29yeUNvdW50ID0gT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3QpLmxlbmd0aDtcclxuICBjb25zdCBxdWVzdGlvbkNvdW50ID0gW107XHJcbiAgbGV0IHJhbmRvbUNhdGVnb3J5O1xyXG4gIGxldCByYW5kb21RdWVzdGlvbjtcclxuXHJcbiAgLy8gc2V0IGdyaWQgY29sdW1uIGNvdW50IGVxdWFsIHRvIG51bWJlciBvZiBxdWVzdGlvbiBjYXRlZ29yaWVzXHJcbiAgY29uc3QgZ3JpZFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRXcmFwcGVyXCIpO1xyXG5cclxuICBncmlkV3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGdyaWRXcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y2F0ZWdvcnlDb3VudH0sMWZyKWA7XHJcblxyXG4gIC8vIGdlbmVyYXRlIHRvcGljIHRpbGVzXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXRlZ29yeUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5pZCA9IGBjYXRlZ29yeSR7aX1gO1xyXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xyXG4gICAgdGlsZURpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0udG9waWM7XHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQodGlsZURpdik7XHJcblxyXG4gICAgZ3JpZEFyZWEuYXBwZW5kKGNhdGVnb3J5RGl2KTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHF1ZXN0aW9uIGNvdW50cyBmb3IgZWFjaCBjYXRlZ29yeVxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgLy8gLTEgZnJvbSBsZW5ndGggdG8gYWNjb3VudCBmb3IgJ3RvcGljJyBrZXlcclxuICAgIHF1ZXN0aW9uQ291bnQucHVzaChPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF0pLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGltbURvdWJsZUNoZWNrID0gW107XHJcbiAgY29uc29sZS5sb2coY2F0ZWdvcnlDb3VudCwgcXVlc3Rpb25Db3VudCk7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXRlZ29yeUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IHF1ZXN0aW9uQ291bnRbaSAtIDFdICsgMTsgaiArPSAxKSB7XHJcbiAgICAgIC8vIHF1ZXN0aW9uQ291bnQgaXMgYSBzdGFuZGFyZCAwLWluZGV4IGFycmF5XHJcbiAgICAgIGRpbW1Eb3VibGVDaGVjay5wdXNoKFxyXG4gICAgICAgIHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0uZG91YmxlLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhkaW1tRG91YmxlQ2hlY2spO1xyXG4gIC8vIGNoZWNrIGZvciBxdWVzdGlvbiBzZXRzIHRoYXQgZG9uJ3QgaGF2ZSBkb3VibGUgcHJvcGVydHkgZGVjbGFyZWRcclxuICBpZiAoIWRpbW1Eb3VibGVDaGVjay5pbmNsdWRlcyh0cnVlKSkge1xyXG4gICAgcmFuZG9tQ2F0ZWdvcnkgPSBnZXRSYW5kb21OdW1iZXJJblJhbmdlKDEsIGNhdGVnb3J5Q291bnQpO1xyXG4gICAgcmFuZG9tUXVlc3Rpb24gPSBnZXRSYW5kb21OdW1iZXJJblJhbmdlKFxyXG4gICAgICAxLFxyXG4gICAgICBxdWVzdGlvbkNvdW50W3JhbmRvbUNhdGVnb3J5IC0gMV0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUNhdGVnb3J5LCByYW5kb21RdWVzdGlvbik7XHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSByYW5kb20gZG91YmxlIHF1ZXN0aW9uIGlmIHN1cHBsaWVkIGRhdGEgZG9lc24ndCBzcGVjaWZ5XHJcbiAgLy8gaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7MH1gXVtgcXVlc3Rpb24kezF9YF0uZG91YmxlID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBnZW5lcmF0ZSBxdWVzdGlvbiB0aWxlcyB3aXRoIHZhbHVlc1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2F0ZWdvcnlDb3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBxdWVzdGlvbkNvdW50W2kgLSAxXSArIDE7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXRlZ29yeSR7aX1gKTtcclxuICAgICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRpbGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICB0aWxlRGl2LnRleHRDb250ZW50ID1cclxuICAgICAgICBxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlO1xyXG5cclxuICAgICAgLy8gYXBwbHkgc3RvY2sgdmFsdWVzIG9mIDEwMCBpbmNyZW1lbnQgcGVyIHJvdyBpZiBhIHZhbHVlXHJcbiAgICAgIC8vIGlzIG5vdCBhIHN1cHBsaWVkIGZyb20gcXVlc3Rpb25PYmpcclxuICAgICAgaWYgKHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXVtgcXVlc3Rpb24ke2p9YF0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRpbGVEaXYudGV4dENvbnRlbnQgPSBgJHtqfTAwYDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSAqIGopO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSBkaW1tYWRvbWUgZG91YmxlIGVmZmVjdHMgZm9yIGFueSBtYXJrZWQgcXVlc3Rpb25zLlxyXG4gICAgICBpZiAocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS5kb3VibGUpIHtcclxuICAgICAgICB0aWxlRGl2LmNsYXNzTGlzdC5hZGQoXCJkaW1tRG91YmxlXCIpO1xyXG4gICAgICAgIHRpbGVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGltbWFkb21lXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpbW1Eb3VibGVIYXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBhcHBseSBkaW1tYWRvbWUgZG91YmxlIGVmZmVjdHMgdXNpbmcgcmFuZG9tIGdlbmVyYXRpb25cclxuICAgICAgLy8gaWYgbm90IHNwZWNpZmllZCBpbiBxdWVzdGlvbiBzZXRcclxuICAgICAgaWYgKGkgPT09IHJhbmRvbUNhdGVnb3J5ICYmIGogPT09IHJhbmRvbVF1ZXN0aW9uKSB7XHJcbiAgICAgICAgdGlsZURpdi5jbGFzc0xpc3QuYWRkKFwiZGltbURvdWJsZVwiKTtcclxuICAgICAgICB0aWxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpbW1hZG9tZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaW1tRG91YmxlSGF0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcnlEaXYuYXBwZW5kKHRpbGVEaXYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVtb3ZlIHRoaXMgbGF0ZXJcclxuZXhwb3J0IGNvbnN0IHRlc3QgPSA3O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=