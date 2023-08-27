/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


//https://stackoverflow.com/questions/56427009/how-to-return-papa-parsed-csv-via-promise-async-await
//https://stackoverflow.com/questions/62905933/iterating-over-results-of-papa-parse-object
//review these for persuing await/promises with papaparse
//TODO remove text instead of setting it to body color

//TODO remove the various console.log debugging lines

//TODO change file from source document to user uploaded via button
//take away upload section after upload button pressed

const fileInput = document.getElementById("fileInput");
const upload = document.getElementById("upload");

upload.addEventListener("click", () => {
  getQuestionData.csvParse(fileInput);
  document.getElementById("uploadWrapper").remove();
});

const getQuestionData = (() => {
  let questions = [];
  //TODO wrap parse into it's own function

  const csvParse = (csvFile) => {
    Papa.parse(csvFile.files[0], {
      download: true,
      complete: function (results) {
        getQuestionData.questions = results.data;
        triviaBoard.createQuestionGrid(42);
        questionModal.addModalEventListener();
        console.log(results.data);
      },
    });
  };

  return { questions, csvParse };
})();

const triviaBoard = (() => {
  let gridArea = document.querySelector("#gridWrapper");

  console.log(gridArea);
  const createQuestionGrid = (questionTotal) => {
    //TODO consider adding point values later as a separate function
    //point values for rows 1-5 on the question grid.
    let questionValues = [
      100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 300, 300, 300,
      300, 300, 300, 400, 400, 400, 400, 400, 400, 500, 500, 500, 500, 500, 500,
      600, 600, 600, 600, 600, 600,
    ];
    for (let i = 0; i < questionTotal; i++) {
      // for (i;i<6;i++){
      //     console.log(i);
      // }
      let questionDiv = document.createElement("div");
      //treat the first six boxes differently to turn them into topic headers.
      if (i < 6) {
        //00,20,40,60,80,100
        questionDiv.classList.add("questionTopic");
        //use every second array to account for spreadsheet format
        questionDiv.innerHTML = getQuestionData.questions[2 * i][0];
      } else {
        questionDiv.classList.add("question");
        questionDiv.textContent = questionValues[i - 6];
      }

      gridArea.appendChild(questionDiv);
    }
  };

  return {
    createQuestionGrid,
  };
})();

const player = (name, number) => {
  const displayPlayerName = function (playerNumber) {
    document.querySelector(`#player${playerNumber}`).textContent =
      this.name + ":";
  };
  const displayPlayerScore = function (playerNumber, scoreToAdd) {
    //thank about splitting this function into two functions
    this.score += scoreToAdd;
    document.querySelector(`#player${playerNumber}Score`).textContent =
      this.score;
  };
  undefined.name = name;
  undefined.score = 0;
  undefined.number = number;
  return { name, number, score, displayPlayerName, displayPlayerScore };
};

//Initialize the player objects
const player1 = player("Chase", 1);
const player2 = player("Ethan", 2);
const player3 = player("Stan", 3);
const player4 = player("Taylor", 4);

const playerNames = [player1.name, player2.name, player3.name, player4.name];

const playerSetup = (() => {
  //display default usernames
  player1.displayPlayerName(1);
  player2.displayPlayerName(2);
  player3.displayPlayerName(3);
  player4.displayPlayerName(4);
  //display intial (zero) player scores
  player1.displayPlayerScore(1, 0);
  player2.displayPlayerScore(2, 0);
  player3.displayPlayerScore(3, 0);
  player4.displayPlayerScore(4, 0);
  //allow players to change their displayed name
  const userName = (player) => {
    let tempName = player.name;
    player.name = prompt("Please Enter your name", "Josh Gunson");
    //prevent player name from disappearing by using previous name
    if (player.name === null) player.name = tempName;
    player.displayPlayerName(player.number);
  };
  //player names can be clicked to open the change dialogue
  document.querySelector("#player1").addEventListener("click", () => {
    userName(player1);
  });
  document.querySelector("#player2").addEventListener("click", () => {
    userName(player2);
  });
  document.querySelector("#player3").addEventListener("click", () => {
    userName(player3);
  });
  document.querySelector("#player4").addEventListener("click", () => {
    userName(player4);
  });
})();

const questionModal = (() => {
  //create a modal that contains a question based on the clicked question tile
  // TODO convert button to question square div
  // const openModalButton = document.querySelector('#helpModal');
  let currentScore = 0;
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  const removeClass = (element, className) => {
    element.classList.remove(className);
  };

  const addClass = (element, className) => {
    element.classList.add(className);
  };

  //overlay provides a semi-transparent blur behind the modal to help focus attention on modal
  //when the overlay background is clicked anywhere, the modal regains the hidden class and disappears
  overlay.addEventListener("click", () => {
    addClass(modal, "hidden");
    addClass(overlay, "hidden");
  });

  // TODO convert this into working when a question square is clicked
  const addModalEventListener = () => {
    let questions = document.querySelectorAll(".question");
    console.log(questions);

    for (let i = 0; i < questions.length; i++) {
      questions[i].addEventListener("click", () => {
        //prevent tile from being opened twice
        if (questions[i].classList.contains("taken")) return;
        //associated array numbers are due to the format of question csv input
        if (i < 6) modal.innerHTML = getQuestionData.questions[2 * i][1];
        if (i < 12 && i > 5)
          modal.innerHTML = getQuestionData.questions[2 * i - 12][2];
        if (i < 18 && i > 11)
          modal.innerHTML = getQuestionData.questions[2 * i - 24][3];
        if (i < 24 && i > 17)
          modal.innerHTML = getQuestionData.questions[2 * i - 36][4];
        if (i < 30 && i > 23)
          modal.innerHTML = getQuestionData.questions[2 * i - 48][5];
        if (i < 36 && i > 29)
          modal.innerHTML = getQuestionData.questions[2 * i - 60][6];

        currentScore = parseInt(questions[i].textContent, 10);
        console.log(currentScore);

        //add an answer button to the modal that reveals the answer when clicked, button
        //adds before the user buttons, answer adds to bottom of modal
        const btn = document.createElement("button");
        btn.textContent = "Answer";
        btn.addEventListener("click", () => {
          //associated array numbers are due to the format of question csv input
          if (i < 6) modal.innerHTML += getQuestionData.questions[2 * i + 1][1];
          if (i < 12 && i > 5)
            modal.innerHTML += getQuestionData.questions[2 * i - 11][2];
          if (i < 18 && i > 11)
            modal.innerHTML += getQuestionData.questions[2 * i - 23][3];
          if (i < 24 && i > 17)
            modal.innerHTML += getQuestionData.questions[2 * i - 35][4];
          if (i < 30 && i > 23)
            modal.innerHTML += getQuestionData.questions[2 * i - 47][5];
          if (i < 36 && i > 29)
            modal.innerHTML += getQuestionData.questions[2 * i - 59][6];

          let div = document.createElement("div");
          div.classList.add("scoreButtons");
          for (let j = 0; j < 4; j++) {
            //set loop length to number of players
            //add buttons to the modal that will award points to the correct player(s)
            const btn = document.createElement("button");
            btn.textContent = playerNames[j];
            btn.addEventListener("click", () => {
              //checks for clicked class added later to prevent awarding points more than once
              if (btn.classList.contains("clicked")) return;
              //get question value from the clicked tile
              currentScore = parseInt(questions[i].textContent, 10);
              //add current score to the appropriate player when clicked
              j === 0
                ? player1.displayPlayerScore(1, currentScore)
                : j === 1
                ? player2.displayPlayerScore(2, currentScore)
                : j === 2
                ? player3.displayPlayerScore(3, currentScore)
                : player4.displayPlayerScore(4, currentScore);
              btn.classList.add("clicked");
            });
            div.appendChild(btn);
          }
          modal.appendChild(div);
        });

        modal.appendChild(btn);

        addClass(questions[i], "taken");

        removeClass(modal, "hidden");
        removeClass(overlay, "hidden");
      });
    }
  };
  return { addModalEventListener, currentScore };
})();

// triviaBoard.createQuestionGrid(36);

// document.querySelector('h1').innerHTML = '<img src=\'/img/Lunar-Eclipse-Leona.webp\'>';

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDLGdCQUFnQixJQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBO0FBQ0EsRUFBRSxTQUFJO0FBQ04sRUFBRSxTQUFJO0FBQ04sRUFBRSxTQUFJO0FBQ04sV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpYS1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG4vL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2NDI3MDA5L2hvdy10by1yZXR1cm4tcGFwYS1wYXJzZWQtY3N2LXZpYS1wcm9taXNlLWFzeW5jLWF3YWl0XHJcbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjI5MDU5MzMvaXRlcmF0aW5nLW92ZXItcmVzdWx0cy1vZi1wYXBhLXBhcnNlLW9iamVjdFxyXG4vL3JldmlldyB0aGVzZSBmb3IgcGVyc3VpbmcgYXdhaXQvcHJvbWlzZXMgd2l0aCBwYXBhcGFyc2VcclxuLy9UT0RPIHJlbW92ZSB0ZXh0IGluc3RlYWQgb2Ygc2V0dGluZyBpdCB0byBib2R5IGNvbG9yXHJcblxyXG4vL1RPRE8gcmVtb3ZlIHRoZSB2YXJpb3VzIGNvbnNvbGUubG9nIGRlYnVnZ2luZyBsaW5lc1xyXG5cclxuLy9UT0RPIGNoYW5nZSBmaWxlIGZyb20gc291cmNlIGRvY3VtZW50IHRvIHVzZXIgdXBsb2FkZWQgdmlhIGJ1dHRvblxyXG4vL3Rha2UgYXdheSB1cGxvYWQgc2VjdGlvbiBhZnRlciB1cGxvYWQgYnV0dG9uIHByZXNzZWRcclxuXHJcbmNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZUlucHV0XCIpO1xyXG5jb25zdCB1cGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZFwiKTtcclxuXHJcbnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGdldFF1ZXN0aW9uRGF0YS5jc3ZQYXJzZShmaWxlSW5wdXQpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkV3JhcHBlclwiKS5yZW1vdmUoKTtcclxufSk7XHJcblxyXG5jb25zdCBnZXRRdWVzdGlvbkRhdGEgPSAoKCkgPT4ge1xyXG4gIGxldCBxdWVzdGlvbnMgPSBbXTtcclxuICAvL1RPRE8gd3JhcCBwYXJzZSBpbnRvIGl0J3Mgb3duIGZ1bmN0aW9uXHJcblxyXG4gIGNvbnN0IGNzdlBhcnNlID0gKGNzdkZpbGUpID0+IHtcclxuICAgIFBhcGEucGFyc2UoY3N2RmlsZS5maWxlc1swXSwge1xyXG4gICAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgICAgZ2V0UXVlc3Rpb25EYXRhLnF1ZXN0aW9ucyA9IHJlc3VsdHMuZGF0YTtcclxuICAgICAgICB0cml2aWFCb2FyZC5jcmVhdGVRdWVzdGlvbkdyaWQoNDIpO1xyXG4gICAgICAgIHF1ZXN0aW9uTW9kYWwuYWRkTW9kYWxFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5kYXRhKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHF1ZXN0aW9ucywgY3N2UGFyc2UgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHRyaXZpYUJvYXJkID0gKCgpID0+IHtcclxuICBsZXQgZ3JpZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyaWRXcmFwcGVyXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhncmlkQXJlYSk7XHJcbiAgY29uc3QgY3JlYXRlUXVlc3Rpb25HcmlkID0gKHF1ZXN0aW9uVG90YWwpID0+IHtcclxuICAgIC8vVE9ETyBjb25zaWRlciBhZGRpbmcgcG9pbnQgdmFsdWVzIGxhdGVyIGFzIGEgc2VwYXJhdGUgZnVuY3Rpb25cclxuICAgIC8vcG9pbnQgdmFsdWVzIGZvciByb3dzIDEtNSBvbiB0aGUgcXVlc3Rpb24gZ3JpZC5cclxuICAgIGxldCBxdWVzdGlvblZhbHVlcyA9IFtcclxuICAgICAgMTAwLCAxMDAsIDEwMCwgMTAwLCAxMDAsIDEwMCwgMjAwLCAyMDAsIDIwMCwgMjAwLCAyMDAsIDIwMCwgMzAwLCAzMDAsIDMwMCxcclxuICAgICAgMzAwLCAzMDAsIDMwMCwgNDAwLCA0MDAsIDQwMCwgNDAwLCA0MDAsIDQwMCwgNTAwLCA1MDAsIDUwMCwgNTAwLCA1MDAsIDUwMCxcclxuICAgICAgNjAwLCA2MDAsIDYwMCwgNjAwLCA2MDAsIDYwMCxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uVG90YWw7IGkrKykge1xyXG4gICAgICAvLyBmb3IgKGk7aTw2O2krKyl7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgICAgLy8gfVxyXG4gICAgICBsZXQgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAvL3RyZWF0IHRoZSBmaXJzdCBzaXggYm94ZXMgZGlmZmVyZW50bHkgdG8gdHVybiB0aGVtIGludG8gdG9waWMgaGVhZGVycy5cclxuICAgICAgaWYgKGkgPCA2KSB7XHJcbiAgICAgICAgLy8wMCwyMCw0MCw2MCw4MCwxMDBcclxuICAgICAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25Ub3BpY1wiKTtcclxuICAgICAgICAvL3VzZSBldmVyeSBzZWNvbmQgYXJyYXkgdG8gYWNjb3VudCBmb3Igc3ByZWFkc2hlZXQgZm9ybWF0XHJcbiAgICAgICAgcXVlc3Rpb25EaXYuaW5uZXJIVE1MID0gZ2V0UXVlc3Rpb25EYXRhLnF1ZXN0aW9uc1syICogaV1bMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uRGl2LnRleHRDb250ZW50ID0gcXVlc3Rpb25WYWx1ZXNbaSAtIDZdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBncmlkQXJlYS5hcHBlbmRDaGlsZChxdWVzdGlvbkRpdik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZVF1ZXN0aW9uR3JpZCxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgcGxheWVyID0gKG5hbWUsIG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IGRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gKHBsYXllck51bWJlcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyTnVtYmVyfWApLnRleHRDb250ZW50ID1cclxuICAgICAgdGhpcy5uYW1lICsgXCI6XCI7XHJcbiAgfTtcclxuICBjb25zdCBkaXNwbGF5UGxheWVyU2NvcmUgPSBmdW5jdGlvbiAocGxheWVyTnVtYmVyLCBzY29yZVRvQWRkKSB7XHJcbiAgICAvL3RoYW5rIGFib3V0IHNwbGl0dGluZyB0aGlzIGZ1bmN0aW9uIGludG8gdHdvIGZ1bmN0aW9uc1xyXG4gICAgdGhpcy5zY29yZSArPSBzY29yZVRvQWRkO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyTnVtYmVyfVNjb3JlYCkudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLnNjb3JlO1xyXG4gIH07XHJcbiAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB0aGlzLnNjb3JlID0gMDtcclxuICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICByZXR1cm4geyBuYW1lLCBudW1iZXIsIHNjb3JlLCBkaXNwbGF5UGxheWVyTmFtZSwgZGlzcGxheVBsYXllclNjb3JlIH07XHJcbn07XHJcblxyXG4vL0luaXRpYWxpemUgdGhlIHBsYXllciBvYmplY3RzXHJcbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoXCJDaGFzZVwiLCAxKTtcclxuY29uc3QgcGxheWVyMiA9IHBsYXllcihcIkV0aGFuXCIsIDIpO1xyXG5jb25zdCBwbGF5ZXIzID0gcGxheWVyKFwiU3RhblwiLCAzKTtcclxuY29uc3QgcGxheWVyNCA9IHBsYXllcihcIlRheWxvclwiLCA0KTtcclxuXHJcbmNvbnN0IHBsYXllck5hbWVzID0gW3BsYXllcjEubmFtZSwgcGxheWVyMi5uYW1lLCBwbGF5ZXIzLm5hbWUsIHBsYXllcjQubmFtZV07XHJcblxyXG5jb25zdCBwbGF5ZXJTZXR1cCA9ICgoKSA9PiB7XHJcbiAgLy9kaXNwbGF5IGRlZmF1bHQgdXNlcm5hbWVzXHJcbiAgcGxheWVyMS5kaXNwbGF5UGxheWVyTmFtZSgxKTtcclxuICBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJOYW1lKDIpO1xyXG4gIHBsYXllcjMuZGlzcGxheVBsYXllck5hbWUoMyk7XHJcbiAgcGxheWVyNC5kaXNwbGF5UGxheWVyTmFtZSg0KTtcclxuICAvL2Rpc3BsYXkgaW50aWFsICh6ZXJvKSBwbGF5ZXIgc2NvcmVzXHJcbiAgcGxheWVyMS5kaXNwbGF5UGxheWVyU2NvcmUoMSwgMCk7XHJcbiAgcGxheWVyMi5kaXNwbGF5UGxheWVyU2NvcmUoMiwgMCk7XHJcbiAgcGxheWVyMy5kaXNwbGF5UGxheWVyU2NvcmUoMywgMCk7XHJcbiAgcGxheWVyNC5kaXNwbGF5UGxheWVyU2NvcmUoNCwgMCk7XHJcbiAgLy9hbGxvdyBwbGF5ZXJzIHRvIGNoYW5nZSB0aGVpciBkaXNwbGF5ZWQgbmFtZVxyXG4gIGNvbnN0IHVzZXJOYW1lID0gKHBsYXllcikgPT4ge1xyXG4gICAgbGV0IHRlbXBOYW1lID0gcGxheWVyLm5hbWU7XHJcbiAgICBwbGF5ZXIubmFtZSA9IHByb21wdChcIlBsZWFzZSBFbnRlciB5b3VyIG5hbWVcIiwgXCJKb3NoIEd1bnNvblwiKTtcclxuICAgIC8vcHJldmVudCBwbGF5ZXIgbmFtZSBmcm9tIGRpc2FwcGVhcmluZyBieSB1c2luZyBwcmV2aW91cyBuYW1lXHJcbiAgICBpZiAocGxheWVyLm5hbWUgPT09IG51bGwpIHBsYXllci5uYW1lID0gdGVtcE5hbWU7XHJcbiAgICBwbGF5ZXIuZGlzcGxheVBsYXllck5hbWUocGxheWVyLm51bWJlcik7XHJcbiAgfTtcclxuICAvL3BsYXllciBuYW1lcyBjYW4gYmUgY2xpY2tlZCB0byBvcGVuIHRoZSBjaGFuZ2UgZGlhbG9ndWVcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHVzZXJOYW1lKHBsYXllcjEpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdXNlck5hbWUocGxheWVyMik7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB1c2VyTmFtZShwbGF5ZXIzKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHVzZXJOYW1lKHBsYXllcjQpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuY29uc3QgcXVlc3Rpb25Nb2RhbCA9ICgoKSA9PiB7XHJcbiAgLy9jcmVhdGUgYSBtb2RhbCB0aGF0IGNvbnRhaW5zIGEgcXVlc3Rpb24gYmFzZWQgb24gdGhlIGNsaWNrZWQgcXVlc3Rpb24gdGlsZVxyXG4gIC8vIFRPRE8gY29udmVydCBidXR0b24gdG8gcXVlc3Rpb24gc3F1YXJlIGRpdlxyXG4gIC8vIGNvbnN0IG9wZW5Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWxwTW9kYWwnKTtcclxuICBsZXQgY3VycmVudFNjb3JlID0gMDtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH07XHJcblxyXG4gIC8vb3ZlcmxheSBwcm92aWRlcyBhIHNlbWktdHJhbnNwYXJlbnQgYmx1ciBiZWhpbmQgdGhlIG1vZGFsIHRvIGhlbHAgZm9jdXMgYXR0ZW50aW9uIG9uIG1vZGFsXHJcbiAgLy93aGVuIHRoZSBvdmVybGF5IGJhY2tncm91bmQgaXMgY2xpY2tlZCBhbnl3aGVyZSwgdGhlIG1vZGFsIHJlZ2FpbnMgdGhlIGhpZGRlbiBjbGFzcyBhbmQgZGlzYXBwZWFyc1xyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGFkZENsYXNzKG1vZGFsLCBcImhpZGRlblwiKTtcclxuICAgIGFkZENsYXNzKG92ZXJsYXksIFwiaGlkZGVuXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBUT0RPIGNvbnZlcnQgdGhpcyBpbnRvIHdvcmtpbmcgd2hlbiBhIHF1ZXN0aW9uIHNxdWFyZSBpcyBjbGlja2VkXHJcbiAgY29uc3QgYWRkTW9kYWxFdmVudExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHF1ZXN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25cIik7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHF1ZXN0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vcHJldmVudCB0aWxlIGZyb20gYmVpbmcgb3BlbmVkIHR3aWNlXHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWtlblwiKSkgcmV0dXJuO1xyXG4gICAgICAgIC8vYXNzb2NpYXRlZCBhcnJheSBudW1iZXJzIGFyZSBkdWUgdG8gdGhlIGZvcm1hdCBvZiBxdWVzdGlvbiBjc3YgaW5wdXRcclxuICAgICAgICBpZiAoaSA8IDYpIG1vZGFsLmlubmVySFRNTCA9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMiAqIGldWzFdO1xyXG4gICAgICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpXHJcbiAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIgKiBpIC0gMTJdWzJdO1xyXG4gICAgICAgIGlmIChpIDwgMTggJiYgaSA+IDExKVxyXG4gICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gZ2V0UXVlc3Rpb25EYXRhLnF1ZXN0aW9uc1syICogaSAtIDI0XVszXTtcclxuICAgICAgICBpZiAoaSA8IDI0ICYmIGkgPiAxNylcclxuICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMiAqIGkgLSAzNl1bNF07XHJcbiAgICAgICAgaWYgKGkgPCAzMCAmJiBpID4gMjMpXHJcbiAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIgKiBpIC0gNDhdWzVdO1xyXG4gICAgICAgIGlmIChpIDwgMzYgJiYgaSA+IDI5KVxyXG4gICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gZ2V0UXVlc3Rpb25EYXRhLnF1ZXN0aW9uc1syICogaSAtIDYwXVs2XTtcclxuXHJcbiAgICAgICAgY3VycmVudFNjb3JlID0gcGFyc2VJbnQocXVlc3Rpb25zW2ldLnRleHRDb250ZW50LCAxMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNjb3JlKTtcclxuXHJcbiAgICAgICAgLy9hZGQgYW4gYW5zd2VyIGJ1dHRvbiB0byB0aGUgbW9kYWwgdGhhdCByZXZlYWxzIHRoZSBhbnN3ZXIgd2hlbiBjbGlja2VkLCBidXR0b25cclxuICAgICAgICAvL2FkZHMgYmVmb3JlIHRoZSB1c2VyIGJ1dHRvbnMsIGFuc3dlciBhZGRzIHRvIGJvdHRvbSBvZiBtb2RhbFxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJBbnN3ZXJcIjtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIC8vYXNzb2NpYXRlZCBhcnJheSBudW1iZXJzIGFyZSBkdWUgdG8gdGhlIGZvcm1hdCBvZiBxdWVzdGlvbiBjc3YgaW5wdXRcclxuICAgICAgICAgIGlmIChpIDwgNikgbW9kYWwuaW5uZXJIVE1MICs9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMiAqIGkgKyAxXVsxXTtcclxuICAgICAgICAgIGlmIChpIDwgMTIgJiYgaSA+IDUpXHJcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIgKiBpIC0gMTFdWzJdO1xyXG4gICAgICAgICAgaWYgKGkgPCAxOCAmJiBpID4gMTEpXHJcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIgKiBpIC0gMjNdWzNdO1xyXG4gICAgICAgICAgaWYgKGkgPCAyNCAmJiBpID4gMTcpXHJcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIgKiBpIC0gMzVdWzRdO1xyXG4gICAgICAgICAgaWYgKGkgPCAzMCAmJiBpID4gMjMpXHJcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIgKiBpIC0gNDddWzVdO1xyXG4gICAgICAgICAgaWYgKGkgPCAzNiAmJiBpID4gMjkpXHJcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIgKiBpIC0gNTldWzZdO1xyXG5cclxuICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzY29yZUJ1dHRvbnNcIik7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAvL3NldCBsb29wIGxlbmd0aCB0byBudW1iZXIgb2YgcGxheWVyc1xyXG4gICAgICAgICAgICAvL2FkZCBidXR0b25zIHRvIHRoZSBtb2RhbCB0aGF0IHdpbGwgYXdhcmQgcG9pbnRzIHRvIHRoZSBjb3JyZWN0IHBsYXllcihzKVxyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lc1tqXTtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9jaGVja3MgZm9yIGNsaWNrZWQgY2xhc3MgYWRkZWQgbGF0ZXIgdG8gcHJldmVudCBhd2FyZGluZyBwb2ludHMgbW9yZSB0aGFuIG9uY2VcclxuICAgICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIikpIHJldHVybjtcclxuICAgICAgICAgICAgICAvL2dldCBxdWVzdGlvbiB2YWx1ZSBmcm9tIHRoZSBjbGlja2VkIHRpbGVcclxuICAgICAgICAgICAgICBjdXJyZW50U2NvcmUgPSBwYXJzZUludChxdWVzdGlvbnNbaV0udGV4dENvbnRlbnQsIDEwKTtcclxuICAgICAgICAgICAgICAvL2FkZCBjdXJyZW50IHNjb3JlIHRvIHRoZSBhcHByb3ByaWF0ZSBwbGF5ZXIgd2hlbiBjbGlja2VkXHJcbiAgICAgICAgICAgICAgaiA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBwbGF5ZXIxLmRpc3BsYXlQbGF5ZXJTY29yZSgxLCBjdXJyZW50U2NvcmUpXHJcbiAgICAgICAgICAgICAgICA6IGogPT09IDFcclxuICAgICAgICAgICAgICAgID8gcGxheWVyMi5kaXNwbGF5UGxheWVyU2NvcmUoMiwgY3VycmVudFNjb3JlKVxyXG4gICAgICAgICAgICAgICAgOiBqID09PSAyXHJcbiAgICAgICAgICAgICAgICA/IHBsYXllcjMuZGlzcGxheVBsYXllclNjb3JlKDMsIGN1cnJlbnRTY29yZSlcclxuICAgICAgICAgICAgICAgIDogcGxheWVyNC5kaXNwbGF5UGxheWVyU2NvcmUoNCwgY3VycmVudFNjb3JlKTtcclxuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgICAgIGFkZENsYXNzKHF1ZXN0aW9uc1tpXSwgXCJ0YWtlblwiKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlQ2xhc3MobW9kYWwsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKG92ZXJsYXksIFwiaGlkZGVuXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IGFkZE1vZGFsRXZlbnRMaXN0ZW5lciwgY3VycmVudFNjb3JlIH07XHJcbn0pKCk7XHJcblxyXG4vLyB0cml2aWFCb2FyZC5jcmVhdGVRdWVzdGlvbkdyaWQoMzYpO1xyXG5cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XFwnL2ltZy9MdW5hci1FY2xpcHNlLUxlb25hLndlYnBcXCc+JztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9