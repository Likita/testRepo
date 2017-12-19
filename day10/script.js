var element = document.querySelector('.button');
console.log(element);

element.addEventListener('click', btnClick)

function btnClick() {
  $('.button').toggleClass('active');
}
