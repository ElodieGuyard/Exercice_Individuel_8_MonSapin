const dossierPrincipal = {
  //dictionnaire {key : '' Value : ''}
  nom: "Ada",
  contenu: [
    {
      nom: "Projets collectifs Ada",
      contenu: [
        {
          nom: "Pico8",
          contenu: [
            {
              nom: "mariokart.p8",
            },
          ],
        },
        {
          nom: "Dataviz",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
    { nom: "CV.pdf" },
    {
      nom: "Projets persos",
      contenu: [
        {
          nom: "Portfolio",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
  ],
};

/* DECLARATION DES VARIABLES */
let dossierP = [];
dossierP.push(dossierPrincipal); //Parce-que les données jsons sont dans un tableau,
//on peut naviguer dedans par les points /crochets

/******************************** ETAPE 1 *****************************
 * Crée une fonction afficherDossier  qui va afficher le nom du dossier
 * principal  en utilisant la variable dossierPrincipal
 ***********************************************************************/
function afficherDossier() {
  return dossierPrincipal[contenu]["nom"];
}
console.log("");

/******************************** ETAPE 3 *****************************
Complète la fonction pour afficher les dossiers de troisième niveau 
(ex: les dossiers “Pico 8” et “Dataviz” sont des dossiers de troisième 
niveau car ils se trouvent dans un dossier “Projets collectifs, 
lui-même dans le dossier “Ada”).
************************************************************************/

function afficherDossierIteratif() {
  console.log("racine :" + dossierP.nom);

  for (j = 0; j < dossierP.contenu.length; j++) {
    console.log(dossierP.nom + "/" + dossierP.contenu[j].nom); // liste tout les sous fichiers/dossiers de Ada
  }
}

function afficherDossierRecursif(folder) {
  for (object of folder) {
    /// pour tout les objets de dossierP (le tableau qui était un JSON)

    if (object.contenu) {
      // -> si il y a un un dossier "contenu" alors
      console.log("folder : " + object.nom);
      afficherDossierRecursif(object.contenu); // on récursive dans le contenu du dossier et ainsi de suite
    } else {
      console.log("fichier " + object.nom); // -> affiche tout les noms qu'il voit
    }
  }
}
//afficherDossierIteratif();
afficherDossierRecursif(dossierP);
