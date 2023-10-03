// TODO fix question data for module

const gridArea = document.querySelector("#gridWrapper");

// change this to use question object
// grid count based on questionObj keys lengths, 2 dimensions, category length + question count length + topic
export function createQuestionGrid(questionObject) {
  const categoryCount = Object.keys(questionObject).length;

  const questionCount = [];

  // set grid column count equal to number of question categories
  const gridWrapper = document.getElementById("gridWrapper");
  gridWrapper.style.gridTemplateColumns = `repeat(${categoryCount},1fr)`;

  // generate topic tiles
  for (let i = 0; i < categoryCount; i += 1) {
    const categoryDiv = document.createElement("div");
    const tileDiv = document.createElement("div");

    categoryDiv.classList.add("categoryWrap");
    tileDiv.classList.add("questionTopic");
    tileDiv.textContent = questionObject[`category${i}`].topic;
    categoryDiv.append(tileDiv);

    gridArea.append(categoryDiv);
  }

  for (let i = 0; i < categoryCount; i += 1) {
    // -1 from length to account for 'topic' key
    questionCount.push(Object.keys(questionObject[`category${i}`]).length - 1);
    // console.log(questionCount);
  }

  // generate question tiles with values
  for (let i = 0; i < categoryCount; i += 1) {
    for (let j = 1; j < questionCount[i] + 1; j += 1) {
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("question");
      tileDiv.textContent =
        questionObject[`category${i}`][`question${j}`].value;

      // apply stock values of 100 increment per row if a value
      // is not a supplied from questionObj
      if (questionObject[`category${i}`][`question${j}`].value === undefined) {
        tileDiv.textContent = `${i + 1}00`;

        // console.log(i * j);
      }
      gridArea.append(tileDiv);
    }
  }
}

// remove this later
export const test = 7;
