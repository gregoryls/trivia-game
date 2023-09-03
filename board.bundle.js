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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDLGNBQWMsSUFBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL2JvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETyBmaXggcXVlc3Rpb24gZGF0YSBmb3IgbW9kdWxlXHJcblxyXG5jb25zdCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFdyYXBwZXJcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkdyaWQoZ3JpZENvdW50LCBxdWVzdGlvbkRhdGEpIHtcclxuICBjb25zdCBxdWVzdGlvblZhbHVlcyA9IFtcclxuICAgIDEwMCwgMTAwLCAxMDAsIDEwMCwgMTAwLCAxMDAsIDIwMCwgMjAwLCAyMDAsIDIwMCwgMjAwLCAyMDAsIDMwMCwgMzAwLCAzMDAsXHJcbiAgICAzMDAsIDMwMCwgMzAwLCA0MDAsIDQwMCwgNDAwLCA0MDAsIDQwMCwgNDAwLCA1MDAsIDUwMCwgNTAwLCA1MDAsIDUwMCwgNTAwLFxyXG4gICAgNjAwLCA2MDAsIDYwMCwgNjAwLCA2MDAsIDYwMCxcclxuICBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRDb3VudDsgaSArPSAxKSB7XHJcbiAgICAvLyBmb3IgKGk7aTw2O2krKyl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyB0cmVhdCB0aGUgZmlyc3Qgc2l4IGJveGVzIGRpZmZlcmVudGx5IHRvIHR1cm4gdGhlbSBpbnRvIHRvcGljIGhlYWRlcnMuXHJcbiAgICBpZiAoaSA8IDYpIHtcclxuICAgICAgLy8gMDAsMjAsNDAsNjAsODAsMTAwXHJcbiAgICAgIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblRvcGljXCIpO1xyXG4gICAgICAvLyB1c2UgZXZlcnkgc2Vjb25kIGFycmF5IHRvIGFjY291bnQgZm9yIHNwcmVhZHNoZWV0IGZvcm1hdFxyXG4gICAgICBxdWVzdGlvbkRpdi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uRGF0YVsyICogaV1bMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25cIik7XHJcbiAgICAgIHF1ZXN0aW9uRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25WYWx1ZXNbaSAtIDZdO1xyXG4gICAgfVxyXG5cclxuICAgIGdyaWRBcmVhLmFwcGVuZENoaWxkKHF1ZXN0aW9uRGl2KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9