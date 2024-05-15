import "./questionBuilderStyle.css";

// TODO
// change innerHTML to something less destructive, probably
// or write existing inputs to on object
// give default values based on 'normal' distribution
// probably swap to text area
// change category number to a + card at the end and X buttons in each category

// function factors(number) {
//   // rename and add comments
//   const numbersUpToN = Array.from(Array(number + 1), (_, i) => i);
//   const factorsOfNumber = numbersUpToN.filter((i) => number % i === 0);
//   return factorsOfNumber;
// }

// function adjustGrid() {
//   // try some strategy with modulo on item length?
//   const container = document.getElementById("allCategories");
//   const items = container.getElementsByClassName("categoryWrap");
//   const containerWidth = container.offsetWidth;
//   const itemWidth = items[0].offsetWidth;
//   const itemsPerRow = Math.floor(containerWidth / itemWidth);

//   container.style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
// }

function createLabelAndInput(className, inputID, type, labelText) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

  div.classList.add(className);
  input.id = inputID;
  input.type = type;
  label.htmlFor = inputID;
  label.textContent = labelText;
  div.append(label, input);
  return div;
}

function createLabelAndTextarea(className, inputID, labelText) {
  const div = document.createElement("div");
  const textarea = document.createElement("textarea");
  const label = document.createElement("label");

  div.classList.add(className);
  textarea.id = inputID;
  textarea.rows = 1;
  textarea.cols = 20;

  label.htmlFor = inputID;
  label.textContent = labelText;
  div.append(label, textarea);
  return div;
}

function createQuestionAnswerValueInputs(question, category) {
  const wrap = document.createElement("div");
  wrap.id = `question${question}Wrap`;
  wrap.classList.add("QAVWrap");

  // fix IDs here
  wrap.append(
    createLabelAndTextarea(
      "questionInput",
      `category${category}Question`,
      `Question ${question}`,
    ),
  );
  wrap.append(
    createLabelAndTextarea(
      "answerInput",
      `category${category}Answer`,
      `Answer ${question}`,
    ),
  );
  wrap.append(
    createLabelAndInput(
      "valueInput",
      `category${category}Value`,
      "number",
      `Value ${question}`,
    ),
  );

  return wrap;
}

function renderCategoryInputs(categoryCount) {
  const allCategories = document.getElementById("allCategories");

  allCategories.innerHTML = "";

  for (let i = 1; i < categoryCount + 1; i += 1) {
    const wrap1 = document.createElement("div");
    const wrap2 = document.createElement("div");

    const closeCategory = document.createElement("p");
    closeCategory.textContent = "X";
    closeCategory.classList.add("closeCategory");
    closeCategory.addEventListener("click", () => {
      console.log("x");
      wrap1.remove();
    });

    wrap1.append(
      closeCategory,
      createLabelAndInput("categoryInput", "test", "text", `Category ${i}`),
    );
    wrap1.id = `category${i}Wrap`;
    wrap1.classList.add("categoryWrap");
    wrap2.id = `category${i}QuestionWrap`;
    wrap2.classList.add("categoryQuestionData");
    for (let j = 1; j < 7; j += 1) {
      wrap2.append(createQuestionAnswerValueInputs(j, i));
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    allCategories.append(wrap1);
  }
}

const categoryNumberInput = document.getElementById("categoryNumberInput");

categoryNumberInput.addEventListener("change", () => {
  renderCategoryInputs(categoryNumberInput.value);
});

renderCategoryInputs(6);
