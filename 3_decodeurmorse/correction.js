//ANNEXES
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
const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};
//********************FIN ANEXES*******************

//ETAPE 1

//fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère
function getLatinCharacterList(text) {
  return text.split("");
}
let result = getLatinCharacterList("hello");
console.log(result);
//ETAPE 2

//fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
//function translateLatinCharacter(charactere){
//return latinToMorse(caractere)
//}
//let result = translateLatinCharacter("A")

//Version qui fonctionne aussi avec les minuscules en convertissant le caract-re en majuscules
function translateLatinCharacter(charactere) {
  let charMAJ = charactere.toUpperCase;
  return latinToMorse[charMAJ];
}
let result1 = translateLatinCharacter("a");
console.log(result1);

//ETAPE 3
//fonction encode qui prend en paramètre du texte et qui va utiliser la
//fonction de l’étape 1, pour chaque caractère, appliquer la fonction
//de l’étape 2 et ainsi récupérer son équivalent morse.

function encodeMAP(texte) {
  let mycaractereList = getLatinCharacterList(texte);
  let tabesult = charactereList.map(translateLatinCharacter);
  translateLatinCharacter(charactere);
  return tabResult;
}

let result3 = encode("hello world");
//j'attends un tableau de caractere en morse
//correspondant à la traduction de "hello world" en morse.

//Version sans map
function encode(texte) {
  let mycaractereList = getLatinCharacterList(texte);
  let tabResult = [];
  for (i = 0; i < mycaractereList; i++) {
    let c = mycharacterList[i];
    let ctranslated = translateLatinCharacter(c);
    tabResult.push(ctranslated);
  }
  return tabResult;
}

//ETAPE 4
//4.1 modifier la fonction encore pour qu'lele prenne en compte les espaces
function encodeNEXTGEN(texte) {
  let mycaractereList = getLatinCharacterList(texte);
  let tabesult = [];
  for (i = 0; i < mycaractereList; i++) {
    let c = mycharacterList[i];
    let ctranslated = [];
    if (c == " ") ctranslated = "/";
    tabResult.push(ctranslated);
  }
  return tabResult;
}

let result4 = encode("hello world");
console.log(result4);

//4.2
//fonction decode qui prend en paramètre du texte morse et renvoie sa traduction.
//procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode.

function getMorseCharacterList(text) {
  //faire un premier split sur le / pour séparer les mots
  let tabwords = text.split("/"); //sépare chaque lettres de la chaine dans un tableau
  //Attention, on ne peut pas juste faire   let tabChars = text.split(" ");
  //car split ne s'applique pas aux tableaux
  //du coup on doit parcourir notre nouveau tableau résultat
  //et appliquer split à chaque élément qui est un string
  let tabChars = [];
  for (i = 0; i < tabwords.length; i++) {
    let word = tabwords[i].split(" ");
    tabChars.push(word);
  }
  return tabChars;
}

let result5 = getMorseCharacterList(
  ".... . .-.. .-.. ---/.-- --- .-. .-.. -.."
);
console.log(result5);

function translateMorseCharacter(morseChar) {
  return getMorseCharacterList[morseChar];
}
console.log(
  translateMorseCharacter(".... . .-.. .-.. ---/.-- --- .-. .-.. -..")
);

function decode(texte) {
  let mycaractereList = getLatinCharacterList(texte);
  let tabResult = [];
  for (i = 0; i < mycaractereList; i++) {
    let word = mycaractereList[i];
    for (j = 0; j < word.length; j++) {
      let char = translateMorseCharacter(word[j]);
      tabResult.push(char);
    }
  }
  return tabResult;
}
result7 = decode(".... . .-.. .-.. ---/.-- --- .-. .-.. -..");
console.log(result7);
