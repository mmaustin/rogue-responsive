


let startMyDay = function () {
  return "Time for coffee and a shower!";
};
//console.log(startMyDay());

let favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
//console.log(favoriteCookie('chocolate chip'));

let introduce = function (name, occupation) {
  return `My name is ${name}, and I'm a ${occupation}.`;
};
// console.log(introduce('Mac', 'lawyer'));
// console.log(introduce('Shaq', 'basketball player'));

let hydrationFeedback = function () {
  let numGlasses = Number(prompt('How many glasses of water did you have today?'));
  if (numGlasses >= 8) {
    console.log('Good job, Sport.');
  } else {
    console.log('You might want to drink more water, Chief.');
  }
};
hydrationFeedback();