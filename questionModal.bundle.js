/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createQuestionGrid)
/* harmony export */ });
// TODO fix question data for module

const gridArea = document.querySelector("#gridWrapper");

function createQuestionGrid(gridCount, questionData) {
  const questionValues = [
    100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 300, 300, 300,
    300, 300, 300, 400, 400, 400, 400, 400, 400, 500, 500, 500, 500, 500, 500,
    600, 600, 600, 600, 600, 600,
  ];

  for (let i = 0; i < gridCount; i += 1) {
    // for (i;i<6;i++){
    //     console.log(i);
    // }
    const questionDiv = document.createElement("div");
    // treat the first six boxes differently to turn them into topic headers.
    if (i < 6) {
      // 00,20,40,60,80,100
      questionDiv.classList.add("questionTopic");
      // use every second array to account for spreadsheet format
      questionDiv.innerHTML = questionData[2 * i][0];
    } else {
      questionDiv.classList.add("question");
      questionDiv.textContent = questionValues[i - 6];
    }

    gridArea.appendChild(questionDiv);
  }
}


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
/*!******************************!*\
  !*** ./src/questionModal.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addQuestionModalEventListener: () => (/* binding */ addQuestionModalEventListener),
/* harmony export */   currentScore: () => (/* binding */ currentScore),
/* harmony export */   getQuestionData: () => (/* binding */ getQuestionData),
/* harmony export */   questionData: () => (/* binding */ questionData),
/* harmony export */   removeClass: () => (/* binding */ removeClass)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");


const currentScore = 0;
let questionData = [];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function removeClass(element, className) {
  element.classList.remove(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function addQuestionModalEventListener() {
  const questions = document.querySelectorAll(".question");
  console.log(questions);
}

function getQuestionData() {
  Papa.parse("../src/questions/Trivia - Questions.csv", {
    download: true,
    complete(results) {
      questionData = results.data;
      (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])(42);
      addQuestionModalEventListener();
      console.log(results.data);
    },
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25Nb2RhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakMsY0FBYyxJQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDNUI7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFLO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3F1ZXN0aW9uTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETyBmaXggcXVlc3Rpb24gZGF0YSBmb3IgbW9kdWxlXHJcblxyXG5jb25zdCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFdyYXBwZXJcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkdyaWQoZ3JpZENvdW50LCBxdWVzdGlvbkRhdGEpIHtcclxuICBjb25zdCBxdWVzdGlvblZhbHVlcyA9IFtcclxuICAgIDEwMCwgMTAwLCAxMDAsIDEwMCwgMTAwLCAxMDAsIDIwMCwgMjAwLCAyMDAsIDIwMCwgMjAwLCAyMDAsIDMwMCwgMzAwLCAzMDAsXHJcbiAgICAzMDAsIDMwMCwgMzAwLCA0MDAsIDQwMCwgNDAwLCA0MDAsIDQwMCwgNDAwLCA1MDAsIDUwMCwgNTAwLCA1MDAsIDUwMCwgNTAwLFxyXG4gICAgNjAwLCA2MDAsIDYwMCwgNjAwLCA2MDAsIDYwMCxcclxuICBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyBmb3IgKGk7aTw2O2krKyl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyB0cmVhdCB0aGUgZmlyc3Qgc2l4IGJveGVzIGRpZmZlcmVudGx5IHRvIHR1cm4gdGhlbSBpbnRvIHRvcGljIGhlYWRlcnMuXHJcbiAgICBpZiAoaSA8IDYpIHtcclxuICAgICAgLy8gMDAsMjAsNDAsNjAsODAsMTAwXHJcbiAgICAgIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblRvcGljXCIpO1xyXG4gICAgICAvLyB1c2UgZXZlcnkgc2Vjb25kIGFycmF5IHRvIGFjY291bnQgZm9yIHNwcmVhZHNoZWV0IGZvcm1hdFxyXG4gICAgICBxdWVzdGlvbkRpdi5pbm5lckhUTUwgPSBxdWVzdGlvbkRhdGFbMiAqIGldWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcXVlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uVmFsdWVzW2kgLSA2XTtcclxuICAgIH1cclxuXHJcbiAgICBncmlkQXJlYS5hcHBlbmRDaGlsZChxdWVzdGlvbkRpdik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVudFNjb3JlID0gMDtcclxuZXhwb3J0IGxldCBxdWVzdGlvbkRhdGEgPSBbXTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3Rpb25Nb2RhbEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgY29uc3QgcXVlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvblwiKTtcclxuICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlc3Rpb25EYXRhKCkge1xyXG4gIFBhcGEucGFyc2UoXCIuLi9zcmMvcXVlc3Rpb25zL1RyaXZpYSAtIFF1ZXN0aW9ucy5jc3ZcIiwge1xyXG4gICAgZG93bmxvYWQ6IHRydWUsXHJcbiAgICBjb21wbGV0ZShyZXN1bHRzKSB7XHJcbiAgICAgIHF1ZXN0aW9uRGF0YSA9IHJlc3VsdHMuZGF0YTtcclxuICAgICAgYm9hcmQoNDIpO1xyXG4gICAgICBhZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=