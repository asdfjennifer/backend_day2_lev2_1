data = require('./data.json');
const fs = require("fs");

console.log(data);

// const dataToString = fs.writeFile

const arr = dataJson.map((ele) => {
    return `${ele.id} - ${ele.title} ${ele.description}.`
}).join("\n\n")

// Backslash: Option + Shift + 7

console.log(arr);

fs.writeFileSync("new.txt", arr, () => { });

// fs.readFile('data.txt', function (err, data) {
//     if (err) {
//         return "Error"
//     }

// });