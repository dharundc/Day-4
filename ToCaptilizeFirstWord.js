function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const stringArray = ["hello world", "dharun", "how are you"];

const titleCaseArray = stringArray.map(toTitleCase);

console.log(titleCaseArray);
