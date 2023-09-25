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
  console.log(categoryCount);

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

    gridArea.appendChild(questionDiv);
  }
}

// remove this later
export const test = 7;
