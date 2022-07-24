// === Feather Replace ===
feather.replace()

// === Certifications ===
certifications = [
    { name: "HackerRank Problem Solving (Intermeditate)", link: "https://www.hackerrank.com/certificates/74d34f0f3994" },
    { name: "HackerRank JavaScript (Intermediate)", link: "https://www.hackerrank.com/certificates/c263cb0f03cc" },
    { name: "HackerRank SQL (Intermediate)", link: "https://www.hackerrank.com/certificates/00e496396214" },
    { name: "HackerRank Rest API (Intermediate)", link: "https://www.hackerrank.com/certificates/6b2a5d63d1d4" },
    { name: "HackerRank React (Basic)", link: "https://www.hackerrank.com/certificates/961f0cb7a259" },
    {name: "HackerRank Python (Basic) Certificate", link: "https://www.hackerrank.com/certificates/8ca5854eb52c"},
    {name: "HackerRank Java (Basic) Certificate", link: "https://www.hackerrank.com/certificates/d4763b1adee4"},
    {name: "HackerRank React (Basic) Certificate", link: "https://www.hackerrank.com/certificates/961f0cb7a259"},
    {name: "HackerRank C# (Basic)", link: "https://www.hackerrank.com/certificates/9e1a99d366c7"},
    {name: "HackerRank Go (Basic)", link: "https://www.hackerrank.com/certificates/69b6aab4ab59"},
]

const certificationsDisplay = document.getElementById("certifications__display")

for (const i in certifications) {
    const certification = document.createElement('div')

    certification.classList.add("certifications__certificate", "flex", "flex__ac-jc")
    certification.innerHTML = `<a target="blank" href="${certifications[i].link}">${certifications[i].name}</a>`

    certificationsDisplay.appendChild(certification)
}