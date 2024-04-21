import "./questionBuilderStyle.css";

// TODO
// change innerHTML to something less destructive, probably
// or write existing inputs to on object

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
  const categoryWrap = document.getElementById("categoryWrap");

  categoryWrap.innerHTML = "";
  const wrap = document.createElement("div");
  for (let i = 0; i < categoryCount; i += 1) {
    wrap.append(createLabelInput("test", "text", `Category ${i + 1}`));
  }

  categoryWrap.append(wrap);
}

const categoryNumberInput = document.getElementById("categoryNumberInput");

document
  .querySelector("body")
  .append(createLabelInput("test", "text", "label"));

categoryNumberInput.addEventListener("change", () => {
  renderCategoryInputs(categoryNumberInput.value);
});
