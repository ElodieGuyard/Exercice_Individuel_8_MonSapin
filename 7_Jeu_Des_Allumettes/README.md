# Mes Découvertes :

### On peut executer une seule fois un listenner
```
document.getElementById("validInputNbJoueurs").addEventListener("click", 
      function(){
            //initialisation du nombre de joueurs
            let nbJ = NbJoueurs();
            gestionPartieNbJ(nbJ);
            deleteSelectNbJ();
      },{ once: true });
```

### On peut remove un element html
```
const boutonEnleverDesAllumettes = document.getElementById("ButtonAllumettesToDelete");
boutonEnleverDesAllumettes.remove(); // supprime le bouton avec l'identifiant ButtonAllumettesToDelete
```
### On peut hidden false/true un élément HTML
```
document.getElementById("nbJoueurs").hidden = false;
<p id="nbJoueurs" hidden></p>
```
