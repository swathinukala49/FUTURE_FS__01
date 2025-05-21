function sayHi() {
  alert("Hi there! Thanks for visiting my portfolio.");
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  alert(`Thanks, ${name}! Your message has been received.`);
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}

const text = ["Your Name", "a Developer", "a Designer", "a Problem Solver"];
let index = 0, char = 0;

function typingEffect() {
  const element = document.getElementById("typing");
  if (char < text[index].length) {
    element.textContent += text[index].charAt(char);
    char++;
    setTimeout(typingEffect, 150);
  } else {
    setTimeout(() => {
      element.textContent = "";
      char = 0;
      index = (index + 1) % text.length;
      typingEffect();
    }, 1500);
  }
}
document.addEventListener("DOMContentLoaded", typingEffect);
