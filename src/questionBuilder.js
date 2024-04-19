import "./style.css";

function createLabelInput(inputID, type, labelText) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

  input.id = inputID;
  input.type = type;
  label.htmlfor = inputID;
  label.textContent = labelText;
  div.append(label, input);
  return div;
}

function renderCategoryInputs(categoryCount) {
  const div = document.createElement("div");
}
document
  .querySelector("body")
  .append(createLabelInput("test", "text", "label"));
