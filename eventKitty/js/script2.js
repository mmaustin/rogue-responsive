

let button = document.querySelector('.show-cat');
let cat = document.querySelector('.cat');
button.addEventListener('click', () => {
  if (cat.classList.contains('show')) {
    cat.classList.remove("show");
    button.innerText = 'Wait, come back!';
    button.classList.add('disappear');
  } else {
    cat.classList.add("show");
    button.innerText = 'Shoo, cat!!';
    button.classList.remove('disappear');
  };
});