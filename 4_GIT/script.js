let firstname;
let hour;
let message;

function sayHello(firstname) {
  document.querySelector("h1").innerText = "Bonjour " + firstname;
}

firstname = window.prompt("Quelle est ton prénom");
console.log(firstname);

sayHello(firstname);
