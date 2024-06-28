


let tripInfoButton = document.querySelector('.trip-info');
let dailyBudget = document.querySelector('.daily-budget');

function tripInfo() {
  let totalBudget = Number(prompt('What is your total budget?'));
  let accommodation = Number(prompt('What are your accomodation costs?'));
  let numDays = Number(prompt('How many days does your trip last?'));
  calculateDailyBudget(totalBudget, accommodation, numDays);
};

function calculateDailyBudget(totalBudget, accommodation, numDays) {
  let daily = (totalBudget - accommodation) / numDays;
  daily = daily.toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener('click', tripInfo);