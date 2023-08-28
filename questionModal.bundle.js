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
/*!******************************!*\
  !*** ./src/questionModal.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addQuestionModalEventListener: () => (/* binding */ addQuestionModalEventListener),
/* harmony export */   currentScore: () => (/* binding */ currentScore),
/* harmony export */   getQuestionData: () => (/* binding */ getQuestionData),
/* harmony export */   questions: () => (/* binding */ questions),
/* harmony export */   removeClass: () => (/* binding */ removeClass)
/* harmony export */ });
let currentScore = 0;
let questions = [];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function removeClass(element, className) {
  element.classList.remove(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function getQuestionData() {
  Papa.parse("../src/questions/Trivia - Questions.csv", {
    download: true,
    complete: function (results) {
      questions = results.data;
      triviaBoard.createQuestionGrid(42);
      questionModal.addModalEventListener();
      console.log(results.data);
    },
  });
}

function addQuestionModalEventListener() {
  let questions = document.querySelectorAll(".question");
  console.log(questions);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25Nb2RhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cml2aWEtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXZpYS1nYW1lLy4vc3JjL3F1ZXN0aW9uTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgbGV0IGN1cnJlbnRTY29yZSA9IDA7XHJcbmV4cG9ydCBsZXQgcXVlc3Rpb25zID0gW107XHJcblxyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9uRGF0YSgpIHtcclxuICBQYXBhLnBhcnNlKFwiLi4vc3JjL3F1ZXN0aW9ucy9Ucml2aWEgLSBRdWVzdGlvbnMuY3N2XCIsIHtcclxuICAgIGRvd25sb2FkOiB0cnVlLFxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgIHF1ZXN0aW9ucyA9IHJlc3VsdHMuZGF0YTtcclxuICAgICAgdHJpdmlhQm9hcmQuY3JlYXRlUXVlc3Rpb25HcmlkKDQyKTtcclxuICAgICAgcXVlc3Rpb25Nb2RhbC5hZGRNb2RhbEV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5kYXRhKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdGlvbk1vZGFsRXZlbnRMaXN0ZW5lcigpIHtcclxuICBsZXQgcXVlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvblwiKTtcclxuICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==