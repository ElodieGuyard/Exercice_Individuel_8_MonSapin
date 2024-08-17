let turnNb = 0;
let combinaisonGuess = [];
let chkcomb = false;
let correctPlacedColor=0;
let unCorrectPlacedColor=0;
let theSecretCode = ["blue", "red", "yellow", "green"];

/**Étape 1**
Version simplifiée du jeu.
Nous imposerons la combinaison à deviner. Elle doit être composée de 2 pions de couleurs différentes.

Le joueur a donc 12 essais pour trouver la bonne combinaison.

4 choix de couleurs possibles.
Vous devez écrire au moins 3 fonctions pour gérer :

- Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
- Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
- Une fonction qui gère la partie (continuer tant que/fin si gagné)

**Exemple :**
Le code secret : [blue, red, yellow, green]
1er tour : [blue, yellow, purple, red] -> [1,2] = 1 bien placé et bonne couleur et 2 mal placés mais bonne couleur
2eme : [blue, yellow, red, green] -> [2, 2] …

**************************************************************************/
function whatTurn(){
      turnNb += 1;
      if (turnNb==12){
            return false; //for stop the game
      }
      document.getElementById("turn").innerText=`Tour numéro ${turnNb}`;
      document.getElementById("colorChoosen").innerText += `\n`;
      return turnNb;
}

function getColors(couleur){                 //fonction qui met dans un tableau la couleur qui correspond aux boutons clickés. Est déclanché par onclick sur les boutons de couleurs
      
      if(combinaisonGuess.length<4){         //Ne stocke que 4 couleurs.
            combinaisonGuess.push(couleur);
            document.getElementById("colorChoosen").innerText += ` ${couleur}`; // affiche les couleurs dans l'element id=colorChoosen
      }
}

function undoColor(){                        //supprime la dernière entrée 'couleur' du tableau, déclanché par onclick du bouton id "undo"
      combinaisonGuess.pop();
}

function checkPositions(clrsArr){            //compare la combinaison submit avec la combinaison secrete : mal positionnées
      
      for (var i=0;i<clrsArr.length;i++){        //Parcours le tableau de la combinaison à deviner pour trouver si une couleur est mal positionnée dans le submit du joueur
            for (var j=0;j<theSecretCode.length;j++){     //Parcours theSecretCode pour permettre de vérifier si une couleur[i] se trouve dans le tableau theSecretCode
                  if(i==j){                               //Si l'index de combinaisonGuess == à l'index de theSecretCode
                        j+=1;                             //Alors +1 à l'index de theSecretCode
                  } else {                                //Explication : la vérification de la bonne position&couleur est faite dans checkColors()
                        if(clrsArr[i]==theSecretCode[j]){ //Si la couleur combinaisonGuess[i] est la même que la couleur de theSecretCode[j]
                              unCorrectPlacedColor+=1;    //on ajoute 1 à la varialbe qui compte le nombre de couleur correcte mais mal placée
                        }
                  }
            }
      }
}

function checkColors(clrsArr){               //compare la combinaison submit avec la combinaison secrete : bien positionnées
      
      for (var i=0;i<theSecretCode.length;i++){
            if (clrsArr[i]==theSecretCode[i]){  //Vérifie si la position & la couleur sont correctes
                  correctPlacedColor+=1;
            }
      }     
}

function combFound(){                 //chk si la combinaison à été trouvée, retourne true, sinon false.
      
      if (correctPlacedColor == 4){
            return true;
      } else {
            return false;
      }
}

function gamePlay(){                          //gère la partie et est déclanché par le bouton submit
      whatTurn();
      checkPositions(combinaisonGuess);
      checkColors(combinaisonGuess);
      console.log (correctPlacedColor, unCorrectPlacedColor)
      if (combFound()==true){                   //si les couleurs sont trouvées et bien positionnées
            let element = document.getElementById("display") // on remove la div d'id display pour afficher victoire
            element.remove();
            document.getElementById("victory").hidden = false;
      }
      console.log(combinaisonGuess)
      combinaisonGuess.splice(0);             //reset le tableau qui enregistre les couleurs de l'utilisateur
}