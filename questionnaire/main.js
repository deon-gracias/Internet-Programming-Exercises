const dataTable = document.getElementById("table");
const quizSection = document.getElementById("questions");

quiz = [
  {
    question:
      "What is the difference between the total number of Technicians added to the Company and the total number of Accountants added to the Company during the years 1996 to 2000?",
    options: [128, 112, 96, 88],
    answer: 3,
  },
  {
    question:
      "What was the total number of Peons working in the Company in the year 1999?",
    options: ["Managers", "Technicians", "Operators", "Accountants"],
    answer: 0,
  },
  {
    question:
      "What was the total number of Peons working in the Company in the year 1999?",
    options: [1312, 1192, 1088, 968],
    answer: 1,
  },
];

tableElements = {
  header: [
    "Year",
    "Managers",
    "Technicians",
    "Operators",
    "Accountants",
    "Peons",
  ],
  body: [
    [1995, 760, "-", 1200, "-", 880, "-", 1160, "-", 820],
    [1996, 280, 120, 272, 120, 256, 104, 200, 100, 184, 9],
    [1997, 179, 92, 240, 128, 240, 120, 224, 104, 152, 88],
    [1998, 148, 88, 236, 96, 208, 100, 248, 96, 196, 80],
    [1999, 160, 72, 256, 100, 192, 112, 272, 88, 224, 120],
    [2000, 193, 96, 288, 112, 248, 144, 260, 92, 200, 104],
  ],
};

function populateTable() {
  const thead = document.createElement("thead");
  thead.classList = "text-xs text-gray-700 uppercase";

  thead.innerHTML = `<tr>
                    ${tableElements.header
                      .map(
                        (e, index) =>
                          `<th scope="col" ${
                            index === 0 ? 'rowspan="2"' : ""
                          } ${index !== 0 ? 'colspan="2"' : ""} class= "${
                            index % 2 !== 0
                              ? "py-3 px-6 bg-gray-200"
                              : "py-3 px-6"
                          }" > ${e}</th > `
                      )
                      .join("")}
                </tr>
                <tr>
                    ${tableElements.header
                      .slice(0, tableElements.header.length - 1)
                      .map(
                        (_, index) =>
                          `<th class= "px-6 py-3 bg-gray-200">New</th><th class="px-6 py-3">Old</th>`
                      )
                      .join("")}
                </tr>
                `;

  const tbody = document.createElement("tbody");

  tbody.innerHTML = tableElements.body
    .map(
      (e) => `<tr>
                ${e
                  .map(
                    (e, index) =>
                      `<td class="${
                        index % 2 != 0 ? "py-3 px-6 bg-gray-200" : "py-3 px-6"
                      }">${e}</td>`
                  )
                  .join("")}
                </tr>`
    )
    .join("");

  dataTable.appendChild(thead);
  dataTable.appendChild(tbody);
}

function renderQuestions() {
  quiz.map((q, index) => {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question__container");

    questionContainer.innerHTML = `
                <div class="flex items-center h-full flex-col justify-center self-start bg-gray-50 rounded-lg shadow-2xl">
                    <div class="p-12">
                        <h2 class="p-4 text-md font-bold text-center">
                            ${q.question}.
                        </h2>    

                        <ul class="grid w-full">
                            ${q.options
                              .map(
                                (option) => `<li class="max-4 my-2">
                                    <input type="radio" id="${option}-${index}" name="${index}" value="${option}" />
                                    <label for="${option}-${index}"> ${option}</label>
                                </li>`
                              )
                              .join("")}
                        </ul>
                    </div>
                </div>
                `;

    quizSection.appendChild(questionContainer);
  });

  const button = document.createElement("button");
  button.classList =
    "py-4 col-span-3 w-full font-semibold text-white bg-indigo-500 rounded-md shadow-lg transition ease-in-out delay-250 shadow-indigo-500/50 hover:bg-indigo-600 hover:shadow-indigo-500/30";
  button.innerHTML = "Submit";

  quizSection.appendChild(button);
}

renderQuestions();
populateTable();
