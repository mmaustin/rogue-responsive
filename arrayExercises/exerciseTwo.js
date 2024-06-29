let programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

programmingLanguages.forEach((lang, i) => {
  //console.log(`I want to learn ${lang}.`);
  //console.log(`${i + 1}. ${lang.toUpperCase()}`);
});

let updatedLanguages = programmingLanguages.filter((lang, i) => {
  return lang.includes('y');
});
console.log(updatedLanguages);