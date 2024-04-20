import "./questionBuilderStyle.css";

function createLabelInput(inputID, type, labelText) {
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

function renderCategoryInputs(categoryCount) {
  const wrap = document.createElement("div");
  for (let i = 0; i < categoryCount; i += 1) {
    wrap.append(createLabelInput("test", "text", "testy"));
  }
  const categoryWrap = document.getElementById("categoryWrap");
  categoryWrap.append(wrap);
}

const categoryNumberInput = document.getElementById("categoryNumberInput");

document
  .querySelector("body")
  .append(createLabelInput("test", "text", "label"));

categoryNumberInput.addEventListener("change", () => {
  renderCategoryInputs(categoryNumberInput.value);
});
