import "./questionBuilderStyle.css";

// TODO
// change innerHTML to something less destructive, probably
// or write existing inputs to on object
// give default values based on 'normal' distribution

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

function createQuestionAnswerValueInputs(question, category) {
  const wrap = document.createElement("div");
  wrap.id = `question${question}Wrap`;
  wrap.classList.add("QAVWrap");

  // fix IDs here
  wrap.append(
    createLabelAndInput(
      "questionInput",
      `category${category}Question`,
      "text",
      `Question ${question}`,
    ),
  );
  wrap.append(
    createLabelAndInput(
      "answerInput",
      `category${category}Answer`,
      "text",
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
    wrap1.append(
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

// document
//   .querySelector("body")
//   .append(createLabelAndInput("test", "text", "label"));

categoryNumberInput.addEventListener("change", () => {
  renderCategoryInputs(categoryNumberInput.value);
});

renderCategoryInputs(6);
