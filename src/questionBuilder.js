import "./questionBuilderStyle.css";

// TODO
// change innerHTML to something less destructive, probably
// or write existing inputs to on object

function createLabelAndInput(inputID, type, labelText) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

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

  wrap.append(
    createLabelAndInput(`category${category}`, "text", `question ${question}`),
  );

  return wrap;
}

function renderCategoryInputs(categoryCount) {
  const categoryWrap = document.getElementById("categoryWrap");

  categoryWrap.innerHTML = "";

  for (let i = 1; i < categoryCount + 1; i += 1) {
    const wrap1 = document.createElement("div");
    const wrap2 = document.createElement("div");
    wrap1.append(createLabelAndInput("test", "text", `Category ${i}`));
    wrap1.id = `cat${i}`;
    wrap2.id = "questionWrap";
    for (let j = 1; j < 7; j += 1) {
      const wrap3 = document.createElement("div");
      wrap3.id = `question${j}Wrap`;
      wrap3.append(createQuestionAnswerValueInputs(j, i));
      wrap2.append(wrap3);
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    categoryWrap.append(wrap1);
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
