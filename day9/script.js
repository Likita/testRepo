var cat = {
  name: 'Tigrasha',
  age: 8,
  printDescription() {
    // console.log(this) // object cat
    console.log(`My name is ${this.name}. I am ${this.age}.`);
  }
}

// console.log(this) // object window
cat.printDescription();


window.onload = function() {
  let h1 = document.querySelector(".h1");
  h1.style.color = '#ff0000';
  h1.innerText = 'Day 9.5'
  // console.log()
}

