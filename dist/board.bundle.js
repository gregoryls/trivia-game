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
function createQuestionGrid(gridCount, questionObject) {
  const questionValues = [
    100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 300, 300, 300,
    300, 300, 300, 400, 400, 400, 400, 400, 400, 500, 500, 500, 500, 500, 500,
    600, 600, 600, 600, 600, 600,
  ];
  const categoryCount = Object.keys(questionObject).length;

  // -1 from length to account for 'topic' key
  const questionCount = Object.keys(questionObject.category0).length;
  console.log(questionObject);
  console.log(questionCount);

  // set grid column count equal to number of question categories
  const gridWrapper = document.getElementById("gridWrapper");
  gridWrapper.style.gridTemplateColumns = `repeat(${categoryCount},1fr)`;

  for (let i = 0; i < categoryCount; i += 1) {
    const questionDiv = document.createElement("div");
    // treat the first six boxes differently to turn them into topic headers.
    // if (i < 6) {
    //   // 00,20,40,60,80,100
    //   questionDiv.classList.add("questionTopic");
    //   // use every second array to account for spreadsheet format
    //   questionDiv.textContent = questionObject[`category${i}`].topic;

    //   // const [textContent] = questionObject[2 * i];
    //   // questionDiv.textContent = textContent;
    //   // questionDiv.textContent = questionData[2 * i][0];
    // } else {
    //   questionDiv.classList.add("question");
    //   questionDiv.textContent = questionValues[i - 6];
    // }
    questionDiv.classList.add("questionTopic");
    // use every second array to account for spreadsheet format
    questionDiv.textContent = questionObject[`category${i}`].topic;

    for (let j = 1; j < questionCount; j += 1) {
      questionDiv.textContent =
        questionObject[`category${i}`][`question${j}`].value;
    }

    gridArea.appendChild(questionDiv);
  }
}

// remove this later
const test = 7;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEVBQUU7QUFDMUQ7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0Esa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETyBmaXggcXVlc3Rpb24gZGF0YSBmb3IgbW9kdWxlXHJcblxyXG5jb25zdCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFdyYXBwZXJcIik7XHJcblxyXG4vLyBjaGFuZ2UgdGhpcyB0byB1c2UgcXVlc3Rpb24gb2JqZWN0XHJcbi8vIGdyaWQgY291bnQgYmFzZWQgb24gcXVlc3Rpb25PYmoga2V5cyBsZW5ndGhzLCAyIGRpbWVuc2lvbnMsIGNhdGVnb3J5IGxlbmd0aCArIHF1ZXN0aW9uIGNvdW50IGxlbmd0aCArIHRvcGljXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkdyaWQoZ3JpZENvdW50LCBxdWVzdGlvbk9iamVjdCkge1xyXG4gIGNvbnN0IHF1ZXN0aW9uVmFsdWVzID0gW1xyXG4gICAgMTAwLCAxMDAsIDEwMCwgMTAwLCAxMDAsIDEwMCwgMjAwLCAyMDAsIDIwMCwgMjAwLCAyMDAsIDIwMCwgMzAwLCAzMDAsIDMwMCxcclxuICAgIDMwMCwgMzAwLCAzMDAsIDQwMCwgNDAwLCA0MDAsIDQwMCwgNDAwLCA0MDAsIDUwMCwgNTAwLCA1MDAsIDUwMCwgNTAwLCA1MDAsXHJcbiAgICA2MDAsIDYwMCwgNjAwLCA2MDAsIDYwMCwgNjAwLFxyXG4gIF07XHJcbiAgY29uc3QgY2F0ZWdvcnlDb3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0KS5sZW5ndGg7XHJcblxyXG4gIC8vIC0xIGZyb20gbGVuZ3RoIHRvIGFjY291bnQgZm9yICd0b3BpYycga2V5XHJcbiAgY29uc3QgcXVlc3Rpb25Db3VudCA9IE9iamVjdC5rZXlzKHF1ZXN0aW9uT2JqZWN0LmNhdGVnb3J5MCkubGVuZ3RoO1xyXG4gIGNvbnNvbGUubG9nKHF1ZXN0aW9uT2JqZWN0KTtcclxuICBjb25zb2xlLmxvZyhxdWVzdGlvbkNvdW50KTtcclxuXHJcbiAgLy8gc2V0IGdyaWQgY29sdW1uIGNvdW50IGVxdWFsIHRvIG51bWJlciBvZiBxdWVzdGlvbiBjYXRlZ29yaWVzXHJcbiAgY29uc3QgZ3JpZFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRXcmFwcGVyXCIpO1xyXG4gIGdyaWRXcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y2F0ZWdvcnlDb3VudH0sMWZyKWA7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlDb3VudDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyB0cmVhdCB0aGUgZmlyc3Qgc2l4IGJveGVzIGRpZmZlcmVudGx5IHRvIHR1cm4gdGhlbSBpbnRvIHRvcGljIGhlYWRlcnMuXHJcbiAgICAvLyBpZiAoaSA8IDYpIHtcclxuICAgIC8vICAgLy8gMDAsMjAsNDAsNjAsODAsMTAwXHJcbiAgICAvLyAgIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblRvcGljXCIpO1xyXG4gICAgLy8gICAvLyB1c2UgZXZlcnkgc2Vjb25kIGFycmF5IHRvIGFjY291bnQgZm9yIHNwcmVhZHNoZWV0IGZvcm1hdFxyXG4gICAgLy8gICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXS50b3BpYztcclxuXHJcbiAgICAvLyAgIC8vIGNvbnN0IFt0ZXh0Q29udGVudF0gPSBxdWVzdGlvbk9iamVjdFsyICogaV07XHJcbiAgICAvLyAgIC8vIHF1ZXN0aW9uRGl2LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICAvLyAgIC8vIHF1ZXN0aW9uRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25EYXRhWzIgKiBpXVswXTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblwiKTtcclxuICAgIC8vICAgcXVlc3Rpb25EaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvblZhbHVlc1tpIC0gNl07XHJcbiAgICAvLyB9XHJcbiAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgIC8vIHVzZSBldmVyeSBzZWNvbmQgYXJyYXkgdG8gYWNjb3VudCBmb3Igc3ByZWFkc2hlZXQgZm9ybWF0XHJcbiAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uT2JqZWN0W2BjYXRlZ29yeSR7aX1gXS50b3BpYztcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IHF1ZXN0aW9uQ291bnQ7IGogKz0gMSkge1xyXG4gICAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgcXVlc3Rpb25PYmplY3RbYGNhdGVnb3J5JHtpfWBdW2BxdWVzdGlvbiR7an1gXS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBncmlkQXJlYS5hcHBlbmRDaGlsZChxdWVzdGlvbkRpdik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZW1vdmUgdGhpcyBsYXRlclxyXG5leHBvcnQgY29uc3QgdGVzdCA9IDc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==