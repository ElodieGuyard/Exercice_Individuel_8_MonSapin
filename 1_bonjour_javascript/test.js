let firstname;
let hour;
let message;

function sayHello(name, hour) {
  if (hour >= 18) {
    message = "Bonsoir";
    message = message + " " + name + " !";
    console.log(message);
  } else {
    message = "Bonjour";
    message = message + " " + name + " !";
    console.log(message);
  }
}

sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);
