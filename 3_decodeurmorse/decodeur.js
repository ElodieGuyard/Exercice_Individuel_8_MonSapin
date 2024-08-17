let chaine_caracteres = "Hello, world";
let tableau_caracteres = [];

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function getLatinCharacterList(chaine_à_traiter) {
  for (i = 0; i < chaine_à_traiter.length; i++) {
    tableau_caracteres.push(chaine_à_traiter[i]);
  }
  return tableau_caracteres;
}

function Traiter_special_caracteres(la_chaine_a_traiter) {
  //la_chaine_a_traiter.foreach
}

function translateLatinCharacter() {
  let traduction = "";
  tableau_caracteres.forEach((element) => {
    let toUpperCasetableau = element.toUpperCase();
    console.log(element.toUpperCase());
    traduction = traduction + " " + latinToMorse[toUpperCasetableau];
  });
  return traduction;
}

tableau_caracteres = getLatinCharacterList(chaine_caracteres);
console.log(tableau_caracteres);
console.log(translateLatinCharacter());
