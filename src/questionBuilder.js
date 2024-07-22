import "./questionBuilderStyle.css";
import questionsTemplate from "./questions/questionsTemplate.json";

// TODO
// change innerHTML to something less destructive, probably
/// / or write existing inputs to an object
// give default values based on 'normal' distribution
// probably swap to text area
// change category number to a + card at the end and X buttons in each category
// add double to inputs
// make sure + card regenerates if clicked

function createLabelAndInput(
  className,
  inputID,
  type,
  labelText,
  placeholderText,
) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

  div.classList.add(className);
  input.id = inputID;
  input.type = type;
  input.placeholder = placeholderText;
  label.htmlFor = inputID;
  label.textContent = labelText;
  div.append(label, input);
  return div;
}

function createLabelAndTextarea(
  className,
  inputID,
  labelText,
  placeholderText,
) {
  const div = document.createElement("div");
  const textarea = document.createElement("textarea");
  const label = document.createElement("label");

  div.classList.add(className);
  textarea.id = inputID;
  textarea.rows = 1;
  textarea.cols = 20;
  textarea.placeholder = placeholderText;

  label.htmlFor = inputID;
  label.textContent = labelText;
  div.append(label, textarea);
  return div;
}

function createQuestionAnswerValueDoubleInputs(question, category) {
  const wrap = document.createElement("div");
  wrap.id = `question${question}Wrap`;
  wrap.classList.add("QAVWrap");

  // add label
  const selectElement = document.createElement("select");
  selectElement.id = `selectQuestion${question}Type`;
  selectElement.classList.add("selectQuestionType");
  const selectOptions = [
    { value: "text", text: "text" },
    { value: "image", text: "image" },
    { value: "audio", text: "audio" },
  ];
  selectOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    selectElement.append(optionElement);
  });
  wrap.append(selectElement);

  // fix IDs here
  wrap.append(
    createLabelAndTextarea(
      "questionInput",
      `category${category}Question`,
      `Question ${question}`,
      questionsTemplate[`category${category}`][`question${question}`].question,
    ),
  );
  wrap.append(
    createLabelAndTextarea(
      "answerInput",
      `category${category}Answer`,
      `Answer ${question}`,
      questionsTemplate[`category${category}`][`question${question}`].answer,
    ),
  );
  wrap.append(
    createLabelAndInput(
      "valueInput",
      `category${category}Value`,
      "number",
      `Value ${question}`,
      questionsTemplate[`category${category}`][`question${question}`].value,
    ),
  );
  wrap.append(
    createLabelAndInput(
      "doubleCheckbox",
      `category${category}Checkbox`,
      "checkbox",
      "Dimmadome Double:",
    ),
  );

  return wrap;
}

function generateNewCategoryButton() {
  const newCategory = document.createElement("div");
  newCategory.id = "newCategoryButton";
  const plus = document.createElement("p");
  plus.textContent = "+";
  newCategory.append(plus);

  return newCategory;
}
function appendNewCategory() {
  const allCategories = document.getElementById("allCategories");

  const newCategory = generateNewCategoryButton();

  const i = allCategories.children.length + 1;

  newCategory.addEventListener("click", () => {
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
      createLabelAndInput(
        "categoryInput",
        `category${i}Topic`,
        "text",
        `Category ${i}`,
        "test new topic",
        // questionsTemplate[`category${i}`].topic,
      ),
    );
    wrap1.id = `category${i}Wrap`;
    wrap1.classList.add("categoryWrap");
    wrap2.id = `category${i}QuestionWrap`;
    wrap2.classList.add("categoryQuestionData");
    for (let j = 1; j < 7; j += 1) {
      wrap2.append(createQuestionAnswerValueDoubleInputs(j, i));
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    allCategories.append(wrap1);

    // generate a new copy when + is clicked
    appendNewCategory();
  });

  allCategories.append(newCategory);
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
      createLabelAndInput(
        "categoryInput",
        `category${i}Topic`,
        "text",
        `Category ${i}`,
        questionsTemplate[`category${i}`].topic,
      ),
    );
    wrap1.id = `category${i}Wrap`;
    wrap1.classList.add("categoryWrap");
    wrap2.id = `category${i}QuestionWrap`;
    wrap2.classList.add("categoryQuestionData");
    for (let j = 1; j < 7; j += 1) {
      wrap2.append(createQuestionAnswerValueDoubleInputs(j, i));
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    allCategories.append(wrap1);
  }
  // append one card at the end for adding new categories

  appendNewCategory();
}

function render2() {
  const allCategories = document.getElementById("allCategories");

  allCategories.innerHTML = "";

  const categoryCount = Object.keys(questionsTemplate).length;

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
      createLabelAndInput(
        "categoryInput",
        "test",
        "text",
        `Category ${i}`,
        questionsTemplate[`category${i}`].topic,
      ),
    );
    wrap1.id = `category${i}Wrap`;
    wrap1.classList.add("categoryWrap");
    wrap2.id = `category${i}QuestionWrap`;
    wrap2.classList.add("categoryQuestionData");
    for (let j = 1; j < 7; j += 1) {
      wrap2.append(createQuestionAnswerValueDoubleInputs(j, i));
    }
    const wrap4 = document.createElement("div");
    wrap4.style.border = "1px solid black";
    wrap4.textContent = "+";

    wrap1.append(wrap2, wrap4);

    allCategories.append(wrap1);
  }
}

function imageToBase64(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(imageFile);
  });
}

function downloadJSON(objectToDownload, filename) {
  // Convert the object to a JSON string
  const jsonString = JSON.stringify(objectToDownload, null, 2);

  const blob = new Blob([jsonString], { type: "application/json" });
  const link = document.createElement("a");

  // Create a URL for the Blob and set it as the href attribute of the link
  link.href = URL.createObjectURL(blob);

  // Set the download attribute with the desired file name
  link.download = filename;

  // Append the link to the body (this is necessary for Firefox)
  document.body.appendChild(link);

  // click link then remove it from document.
  link.click();
  document.body.removeChild(link);
}

const categoryNumberInput = document.getElementById("categoryNumberInput");

categoryNumberInput.addEventListener("change", () => {
  renderCategoryInputs(categoryNumberInput.value);
});

const categoryCount = Object.keys(questionsTemplate).length;

renderCategoryInputs(categoryCount);
console.log(questionsTemplate.category1.topic);

const downloadButton = document.getElementById("downloadQuestionDataButton");

downloadButton.addEventListener("click", () => {
  downloadJSON(questionsTemplate, "testquestions.json");
});
