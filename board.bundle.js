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
/* harmony export */   createQuestionGrid: () => (/* binding */ createQuestionGrid)
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
    const questionDiv = document.createElement("div");
    // treat the first six boxes differently to turn them into topic headers.
    if (i < 6) {
      // 00,20,40,60,80,100
      questionDiv.classList.add("questionTopic");
      // use every second array to account for spreadsheet format
      questionDiv.textContent = questionData[2 * i][0];
    } else {
      questionDiv.classList.add("question");
      questionDiv.textContent = questionValues[i - 6];
    }

    gridArea.appendChild(questionDiv);
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS8uL3NyYy9ib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE8gZml4IHF1ZXN0aW9uIGRhdGEgZm9yIG1vZHVsZVxyXG5cclxuY29uc3QgZ3JpZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyaWRXcmFwcGVyXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uR3JpZChncmlkQ291bnQsIHF1ZXN0aW9uRGF0YSkge1xyXG4gIGNvbnN0IHF1ZXN0aW9uVmFsdWVzID0gW1xyXG4gICAgMTAwLCAxMDAsIDEwMCwgMTAwLCAxMDAsIDEwMCwgMjAwLCAyMDAsIDIwMCwgMjAwLCAyMDAsIDIwMCwgMzAwLCAzMDAsIDMwMCxcclxuICAgIDMwMCwgMzAwLCAzMDAsIDQwMCwgNDAwLCA0MDAsIDQwMCwgNDAwLCA0MDAsIDUwMCwgNTAwLCA1MDAsIDUwMCwgNTAwLCA1MDAsXHJcbiAgICA2MDAsIDYwMCwgNjAwLCA2MDAsIDYwMCwgNjAwLFxyXG4gIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZENvdW50OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIC8vIHRyZWF0IHRoZSBmaXJzdCBzaXggYm94ZXMgZGlmZmVyZW50bHkgdG8gdHVybiB0aGVtIGludG8gdG9waWMgaGVhZGVycy5cclxuICAgIGlmIChpIDwgNikge1xyXG4gICAgICAvLyAwMCwyMCw0MCw2MCw4MCwxMDBcclxuICAgICAgcXVlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uVG9waWNcIik7XHJcbiAgICAgIC8vIHVzZSBldmVyeSBzZWNvbmQgYXJyYXkgdG8gYWNjb3VudCBmb3Igc3ByZWFkc2hlZXQgZm9ybWF0XHJcbiAgICAgIHF1ZXN0aW9uRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25EYXRhWzIgKiBpXVswXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblwiKTtcclxuICAgICAgcXVlc3Rpb25EaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvblZhbHVlc1tpIC0gNl07XHJcbiAgICB9XHJcblxyXG4gICAgZ3JpZEFyZWEuYXBwZW5kQ2hpbGQocXVlc3Rpb25EaXYpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=