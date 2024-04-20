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
  const div = document.createElement("div");
}

const categoryNumberInput = document.getElementById("categoryNumberInput");

document
  .querySelector("body")
  .append(createLabelInput("test", "text", "label"));

categoryNumberInput.addEventListener("change", () => {
  console.log(categoryNumberInput.value);
});
