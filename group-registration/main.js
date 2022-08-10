const dataTable = document.getElementById("table");
const form = document.getElementById("group-form")


tableElements = {
    header: [
        "No",
        "Team Members",
        "Topic",
        "Abstract",
        "Mentors",
    ],
};

let groups = [
    ["1", ["Aditya Vyas", "Atharva Pawar", "Deon Gracias"], "Crop Recommendation System", "Abstract Description", "Prachi Ma'am"],
    ["2", ["ABC", "DEF", "GHI"], "Crop Recommendation System", "Abstract Description", "Prachi Ma'am"],
    ["3", ["ABC", "DEF", "GHI"], "Crop Recommendation System", "Abstract Description", "Prachi Ma'am"],
]

function populateTable() {
    const thead = document.createElement("thead");
    thead.classList = "text-xs text-gray-700 uppercase";

    thead.innerHTML = `<tr>
                    ${tableElements.header
            .map(
                (e, index) =>
                    `<th scope="col" class= "${index % 2 !== 0
                        ? "py-3 px-6 bg-gray-200"
                        : "py-3 px-6"
                    }" > ${e}</th > `
            )
            .join("")}
                </tr>`;

    const tbody = document.createElement("tbody");

    tbody.innerHTML = groups
        .map(
            (e) => `<tr>
                ${e
                    .map(
                        (e, index) =>
                            `<td class="${index % 2 != 0 ? "py-3 px-6 bg-gray-200" : "py-3 px-6"}">${e}</td>`
                    )
                    .join("")}
                </tr>`
        )
        .join("");

    dataTable.appendChild(thead);
    dataTable.appendChild(tbody);
}



populateTable();
