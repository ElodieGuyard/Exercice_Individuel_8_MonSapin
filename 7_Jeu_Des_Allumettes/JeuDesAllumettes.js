let nbAllumettesOnBoard = 0;
let AuTourDuJoueur=1;
let tour = 2;
let nbJ;

function NbJoueurs(){
      let NombreJoueurs;
      NombreJoueurs = document.getElementById("inputNbJoueurs").value;
      console.log(NombreJoueurs);
      return NombreJoueurs;
}

function AfficheNbJ (nbJ){  
      //note : ajouter IA serait cool !
      document.getElementById("nbJoueurs").hidden = false;
      document.getElementById("nbJoueurs").innerText = `Vous avez selectionné ${nbJ} Joueurs`;
}

function deleteSelectNbJ() {
      //supprime l'input et le bouton qui servent à la selection du nombre de joueurs
      const inputNbJ = document.getElementById("inputNbJoueurs");
      inputNbJ.remove(); // supprime l'input avec l'identifiant inputNbJ  
      const boutonNbJoueurs = document.getElementById("validInputNbJoueurs");
      boutonNbJoueurs.remove(); // supprime le bouton avec l'identifiant boutonNbJoueurs  
}

function InitialisationAllumettes(){
      //Initialisation du jeu
      nbAllumettesOnBoard = 50;
      document.getElementById("DisplayAllumettes").innerText = `${nbAllumettesOnBoard}`;
}

function RemoveAllumettesFromReste (nbAllumettesToRemove){
      /* Faire une fonction qui prend en paramètre le nombre 
      d'allumettes à enlever du reste. */
      nbAllumettesOnBoard-=nbAllumettesToRemove;
      return nbAllumettesOnBoard;   
}

function askUserNbAllumettesToRemove(){
      /* Demander a l'utilisateur combien d'allumettes 
      il souhaite retirer tant qu’il y a des allumettes
      dans le tas. Pour rappel, on a 50 allumettes au
      départ. */
      let valueAllumettesToRemove;
      valueAllumettesToRemove = document.getElementById("inputUserAllumetteToDelete").value;
      return valueAllumettesToRemove;
}

function conditionDeVictoire(AllumettesSurleBoard, AllumettesARetirer){
      /* if score =0 alors afficher victoiire et enlever 
      le bouton de l'affichage, if le nb d'allumettes a 
      retirer donne un nombre négatif : rejetter la 
      soustraction, redemander*/
      if (AllumettesSurleBoard - AllumettesARetirer == 0){
            const boutonEnleverDesAllumettes = document.getElementById("ButtonAllumettesToDelete");
            boutonEnleverDesAllumettes.remove(); // supprime le bouton avec l'identifiant ButtonAllumettesToDelete
            document.getElementById("victory").hidden=false;
      } 
}

function checkNegativAllumettes (AllumettesSurleBoard, AllumettesARetirer) {
      /*Si la saisie de l'utilisateur fait qu'on se retrouve
      avec un nb négatif d'allumettes alors on affiche un message
      d'erreur avec le nombre maximal d'allumettes qu'on peut retirer 
      (c'est une win normalement mais on va dire que l'utilisateur ne 
      sait pas jouer) et on retourne true si le nb est negatif*/
      if (AllumettesSurleBoard - AllumettesARetirer < 0){
            document.getElementById("erreurSaisie").innerText = `Veuillez saisir un nombre compris entre 0 et ${AllumettesSurleBoard}`;
            return true;
      }
      return false;
}

function displayCoups (nbj, coupAllumettes, tour){
      
      if (tour==1){
            document.getElementById("J1").innerText += `\n ${coupAllumettes} `;
      } else if (tour==2){
            document.getElementById("J2").innerText += `\n ${coupAllumettes} `;
      }
}

function aQuiLeTour (){
      
      if (tour==1){
            tour = tour + 1;
            document.getElementById("auTourDe").innerText = `Au tour de Joueur 1 :`;
            return tour;
      } else if (tour==2){
            tour = 1;
            document.getElementById("auTourDe").innerText = `Au tour de Joueur 2 :`;
            return tour;           
      }
}

/*Rajouter un 2eme joueur à votre jeu.

Proposer un mode multi-joueur. Demander à 
l’utilisateur, combien il y a de joueur et gérer 
la partie en conséquence.

Bonus rendre accessible le boutton via focus ou un truc dans le genre*/

/*************************************************************************************
MAIN
*************************************************************************************/

InitialisationAllumettes();

//initialisation du jeu
document.getElementById("validInputNbJoueurs").addEventListener("click", 
      function(){
            //initialisation du nombre de joueurs
            nbJ = NbJoueurs();
            AfficheNbJ(nbJ);
            deleteSelectNbJ();
      },{ once: true });
      
      //JEU
      
      document.getElementById("ButtonAllumettesToDelete").addEventListener("click", 
            function(){
                  
                  //On stocke le nb d'allumette à retirer
                  let allumettesARetirer;
                  allumettesARetirer = askUserNbAllumettesToRemove();
                  
                  /*On vérifie si le nb d'allumettes sur la table finit à 0 
                  (si oui stop le jeu)*/
                  conditionDeVictoire(nbAllumettesOnBoard, allumettesARetirer);
                  
                  /*Vérifie si la soustraction donne un nombre négatif,
                  si le nb n'est pas négatif, alors on continue le jeu*/
                  let nbAllumettesOnBoardNegatif;
                  nbAllumettesOnBoardNegatif = checkNegativAllumettes(nbAllumettesOnBoard, allumettesARetirer);
                  if (nbAllumettesOnBoardNegatif == false) {
                        /*Soustrait le nb allumettes que l'user veut retirer au nb
                        d'allumettes sur le board */
                        let NewnbAllumettesSurLeBoard;
                        NewnbAllumettesSurLeBoard = RemoveAllumettesFromReste(allumettesARetirer);
                        // On actualise le nombre d'allumettes à affichersur la table
                        document.getElementById("DisplayAllumettes").innerText = `${NewnbAllumettesSurLeBoard}`;
                        //Gère le tour pour deux joueurs : affichage
                        aQuiLeTour(); // par défaut Joueur 2 commence
                        displayCoups( 2, allumettesARetirer, tour);
                                       
                  } 
                  
                  
            });
            
            