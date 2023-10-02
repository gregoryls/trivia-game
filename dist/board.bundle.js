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
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createQuestionGrid: () => (/* binding */ createQuestionGrid),
/* harmony export */   test: () => (/* binding */ test)
/* harmony export */ });
// TODO fix question data for module

const gridArea = document.querySelector("#gridWrapper");

// change this to use question object
// grid count based on questionObj keys lengths, 2 dimensions, category length + question count length + topic
function createQuestionGrid(questionObject) {
  const categoryCount = Object.keys(questionObject).length;

  // -1 from length to account for 'topic' key
  const questionCount = [];

  // set grid column count equal to number of question categories
  const gridWrapper = document.getElementById("gridWrapper");
  gridWrapper.style.gridTemplateColumns = `repeat(${categoryCount},1fr)`;

  // generate topic tiles
  for (let i = 0; i < categoryCount; i += 1) {
    const questionDiv = document.createElement("div");

    questionDiv.classList.add("questionTopic");
    questionDiv.textContent = questionObject[`category${i}`].topic;

    gridArea.appendChild(questionDiv);
  }

  for (let i = 0; i < categoryCount; i += 1) {
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);
    console.log(questionCount);
  }

  // generate question tiles with values
  for (let i = 0; i < categoryCount; i += 1) {
    for (let j = 1; j < questionCount + 1; j += 1) {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.textContent =
        questionObject[`category${i}`][`question${j}`].value;

      // apply stock values of 100 increment per row if a value
      // is not a supplied from questionObj
      if (questionObject[`category${i}`][`question${j}`].value === undefined) {
        questionDiv.textContent = `${i + 1}00`;

        // console.log(i * j);
      }
      gridArea.append(questionDiv);
    }
  }
}

// remove this later
const test = 7;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckMsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtBQUN0RCxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUT0RPIGZpeCBxdWVzdGlvbiBkYXRhIGZvciBtb2R1bGVcclxuXHJcbmNvbnN0IGdyaWRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmlkV3JhcHBlclwiKTtcclxuXHJcbi8vIGNoYW5nZSB0aGlzIHRvIHVzZSBxdWVzdGlvbiBvYmplY3RcclxuLy8gZ3JpZCBjb3VudCBiYXNlZCBvbiBxdWVzdGlvbk9iaiBrZXlzIGxlbmd0aHMsIDIgZGltZW5zaW9ucywgY2F0ZWdvcnkgbGVuZ3RoICsgcXVlc3Rpb24gY291bnQgbGVuZ3RoICsgdG9waWNcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uR3JpZChxdWVzdGlvbk9iamVjdCkge1xyXG4gIGNvbnN0IGNhdGVnb3J5Q291bnQgPSBPYmplY3Qua2V5cyhxdWVzdGlvbk9iamVjdCkubGVuZ3RoO1xyXG5cclxuICAvLyAtMSBmcm9tIGxlbmd0aCB0byBhY2NvdW50IGZvciAndG9waWMnIGtleVxyXG4gIGNvbnN0IHF1ZXN0aW9uQ291bnQgPSBbXTtcclxuXHJcbiAgLy8gc2V0IGdyaWQgY29sdW1uIGNvdW50IGVxdWFsIHRvIG51bWJlciBvZiBxdWVzdGlvbiBjYXRlZ29yaWVzXHJcbiAgY29uc3QgZ3JpZFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRXcmFwcGVyXCIpO1xyXG4gIGdyaWRXcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y2F0ZWdvcnlDb3VudH0sMWZyKWA7XHJcblxyXG4gIC8vIGdlbmVyYXRlIHRvcGljIHRpbGVzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUNvdW50OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgIHF1ZXN0aW9uRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdLnRvcGljO1xyXG5cclxuICAgIGdyaWRBcmVhLmFwcGVuZENoaWxkKHF1ZXN0aW9uRGl2KTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICBxdWVzdGlvbkNvdW50LnB1c2goT2JqZWN0LmtleXMocXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdKS5sZW5ndGggLSAxKTtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2VuZXJhdGUgcXVlc3Rpb24gdGlsZXMgd2l0aCB2YWx1ZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Q291bnQ7IGkgKz0gMSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBxdWVzdGlvbkNvdW50ICsgMTsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcXVlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS52YWx1ZTtcclxuXHJcbiAgICAgIC8vIGFwcGx5IHN0b2NrIHZhbHVlcyBvZiAxMDAgaW5jcmVtZW50IHBlciByb3cgaWYgYSB2YWx1ZVxyXG4gICAgICAvLyBpcyBub3QgYSBzdXBwbGllZCBmcm9tIHF1ZXN0aW9uT2JqXHJcbiAgICAgIGlmIChxdWVzdGlvbk9iamVjdFtgY2F0ZWdvcnkke2l9YF1bYHF1ZXN0aW9uJHtqfWBdLnZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfTAwYDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSAqIGopO1xyXG4gICAgICB9XHJcbiAgICAgIGdyaWRBcmVhLmFwcGVuZChxdWVzdGlvbkRpdik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZW1vdmUgdGhpcyBsYXRlclxyXG5leHBvcnQgY29uc3QgdGVzdCA9IDc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==