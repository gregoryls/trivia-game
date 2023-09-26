// TODO fix question data for module

const gridArea = document.querySelector("#gridWrapper");

// change this to use question object
// grid count based on questionObj keys lengths, 2 dimensions, category length + question count length + topic
export function createQuestionGrid(gridCount, questionObject) {
  const questionValues = [
    100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 300, 300, 300,
    300, 300, 300, 400, 400, 400, 400, 400, 400, 500, 500, 500, 500, 500, 500,
    600, 600, 600, 600, 600, 600,
  ];
  const categoryCount = Object.keys(questionObject).length;

  // -1 from length to account for 'topic' key
  const questionCount = Object.keys(questionObject.category0).length - 1;

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

        console.log(i * j);
      }
      gridArea.append(questionDiv);
    }
  }
}

// remove this later
export const test = 7;
