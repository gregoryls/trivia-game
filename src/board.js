// TODO fix question data for module
// consider groups by row instead of column
import * as players from "./players";

const gridArea = document.querySelector("#gridWrapper");

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createQuestionGrid(questionObject) {
  const categoryCount = Object.keys(questionObject).length;
  const questionCount = [];
  const randomCoordinates = [];

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

  let totalQuestionCount = 0;
  // generate question counts for each category
  for (let i = 1; i < categoryCount + 1; i += 1) {
    // -1 from length to account for 'topic' key
    const categoryLength =
      Object.keys(questionObject[`category${i}`]).length - 1;
    questionCount.push(categoryLength);
    totalQuestionCount += categoryLength;
  }

  const numberofRandomDoubles = Math.floor(totalQuestionCount / 12);

  const checkForDimmDouble = [];
  console.log(categoryCount, questionCount);
  for (let i = 1; i < categoryCount + 1; i += 1) {
    for (let j = 1; j < questionCount[i - 1] + 1; j += 1) {
      // questionCount is a standard 0-index array
      // double property is a bool, undefined if question set omits property entirely
      checkForDimmDouble.push(
        questionObject[`category${i}`][`question${j}`].double,
      );
    }
  }

  // check for question sets that don't have double property declared
  if (!checkForDimmDouble.includes(true)) {
    for (let r = 0; r < numberofRandomDoubles; r += 1) {
      let getRandomCategory = getRandomNumberInRange(1, categoryCount);
      let getRandomQuestionInCategory = getRandomNumberInRange(
        1,
        questionCount[getRandomCategory - 1],
      );
      // store random double tiles in category, question sets
      let coordinatePair = [getRandomCategory, getRandomQuestionInCategory];

      // while loop rerolls random numbers if a tile would be selected twice
      while (randomCoordinates.includes(coordinatePair)) {
        getRandomCategory = getRandomNumberInRange(1, categoryCount);
        getRandomQuestionInCategory = getRandomNumberInRange(
          1,
          questionCount[getRandomCategory - 1],
        );
        coordinatePair = [getRandomCategory, getRandomQuestionInCategory];
      }
      randomCoordinates.push(coordinatePair);
    }

    console.log(randomCoordinates);
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

      for (let k = 0; k < randomCoordinates.length; k += 1) {
        if (i === randomCoordinates[k][0] && j === randomCoordinates[k][1]) {
          tileDiv.classList.add("dimmDouble");
          tileDiv.addEventListener("click", () => {
            document.getElementById("dimmadome").style.display = "block";
            document.getElementById("dimmDoubleHat").style.display = "block";
          });
        }
      }
      categoryDiv.append(tileDiv);
    }
  }
}

// remove this later
export const test = 7;
