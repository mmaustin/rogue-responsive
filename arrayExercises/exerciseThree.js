let groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];
//console.log(groceries.length);

let deleteDuplicates = function (list) {
  let cleanList = [];
  for (let item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    };
  };
  return cleanList;
};
let newGroceries = deleteDuplicates(groceries);
//console.log(newGroceries.length);

newGroceries.map((gro, i) => {
  console.log(`#${i + 1} ${gro} `);
});