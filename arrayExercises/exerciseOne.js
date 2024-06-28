

let hobbies = ['reading', 'coding', 'writing', 'working out', 'dancing', 'exercising'];
hobbies.push('skiing');
hobbies.pop();
hobbies.splice(2, 0, 'napping', 'hunting');
hobbies.shift();
hobbies.unshift('running');
//console.log(hobbies);

let goals = ['finish writing book', 'learn chinese', 'go to austria'];
let allTheThings = [...hobbies, ...goals];
allTheThings.splice(allTheThings.indexOf('dancing'), 1);
//console.log(allTheThings);

let plans = allTheThings.map((item, i) => {
  return `I can't wait to start ${item}.`;
});

console.log(plans);