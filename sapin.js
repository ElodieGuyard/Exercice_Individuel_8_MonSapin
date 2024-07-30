/*********************************************
*  Etape 1: Un triangle d’étoiles

- Nous allons commencer par la pointe du sapin.
- Ecrire une fonction afficherPointeSapin()
qui prendra en paramètre la hauteur de ce
triangle
********************************************/


/*********************************************
1.1 Une ligne d’étoiles
Commençons par écrire une fonction
afficherEtoiles(n) qui affiche une ligne de
* en fonction du paramètre n
********************************************/

function afficherEtoiles(n) {
    var etoile = "*";
    var ligneEtoile;
    ligneEtoile = etoile.repeat(n);
    console.log(`${ligneEtoile}`)
    return ligneEtoile;
    //console.log("".concat(ligneEtoile));
    // à faire pour chaque n étoile !
}
//afficherEtoiles(2);
//afficherEtoiles(5);
/*EXPECTED OUTPUT
**
*****
*/

/*********************************************
1.2 Carré d’étoiles
Nous allons maintenant définir une nouvelle 
fonction afficherRectangle(hauteur, largeur)
********************************************/

function afficherRectangle(hauteur, largeur) {
    var makeLine;
    makeLine = afficherEtoiles(largeur); //affiche sur une ligne la largeur en étoiles
    var retourChariot = `\n`;
    var makeLineRC;
    makeLineRC = makeLine + retourChariot;
    var makeSquare;  
    makeSquare = makeLineRC.repeat(hauteur-1);
    console.log(`${makeSquare}`)
}

//afficherRectangle(5, 5)
/*EXPECTED OUTPUT
*****
*****
*****
*****
*****
*/
/*********************************************
1.3 Triangle d’étoiles
Il semblerait donc que nous pouvons nous 
inspirer du comportement de notre précédente 
fonction pour en définir une nouvelle 
afficherTriangleDroite(n)
ℹ️ ’Droite’ parce que ce triangle servira 
à la partie droite du sapin
********************************************/

function afficherTriangleDroite(n) {
    // En s'inspirant de la fonction afficherRectangle(),
    // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
    var etoile = "*";
    var nbEtoile=1;
    var strEtoile;
    var retourChariot = `\n`;
    var makeTriangle;
    var backSlash =`\\`
    
    makeTriangle = `\\`;
    
    for (var i=n-1; i>0;i--){
        strEtoile=etoile.repeat(nbEtoile);
        makeTriangle += retourChariot + strEtoile + backSlash;       
        nbEtoile += 1;
    }
    console.log(makeTriangle);
    
}

//afficherTriangleDroite(5)
/*EXPECTED OUTPUT
\
*\
**\
***\
****\
*/
/*********************************************
1.4 Seconde moitié et espaces
Nous pouvons maintenant faire la seconde moitié 
de la pointe du sapin en faisant le symétrique !
********************************************/

function afficherTriangleGauche(n) {
    
    //je copie/colle les anciennes ddéclarations parce-que : flem
    var etoile = "*";
    var nbEtoile=1;
    var strEtoile;
    var retourChariot = `\n`;
    var makeTriangle;
    var slash =`/`;
    var space=` `;
    var strSpaces;
    
    strSpaces = space.repeat(n);
    makeTriangle = strSpaces + slash + retourChariot;
    
    for (var i=n-1; i>0;i--){
        
        strSpaces = space.repeat(i);
        strEtoile=etoile.repeat(nbEtoile);
        makeTriangle += strSpaces + slash + strEtoile + retourChariot;       
        nbEtoile += 1;
    }
    console.log(makeTriangle);
}

//afficherTriangleGauche(5)
/*EXPECTED OUTPUT
/
/*
/**
/***
/****
*/
/*********************************************
1.5 Assemblage et décorations
Nous allons combiner le travail effectué sur 
afficherTriangleGauche() & afficherTriangleDroite() 
pour réaliser une nouvelle fonction afficherPointeSapin(), 
en ajoutant le tronc | et l’étoile + au milieu ! 
(cf l’affichage plus haut, en début d’exercice)
********************************************/

function afficherPointeSapin(hauteur) {
    // afficherTriangleDroite(hauteur);
    // afficherTriangleGauche(hauteur);
    /****************** SAPIN DROITE************ */
    var etoile = "*";
    var nbEtoile=1;
    var strEtoile;
    var retourChariot = `\n`;
    var backSlash =`\\`;
    var slash =`/`;
    var space=` `;
    var strSpaces;
    var nbSpacesEtoile;
    var strSpacesEtoile;
    var makeSapin;
    var makeTriangleG;
    var makeTriangleD;
    var tron = `|`;
    
    
    //INIT du haut du sapin en fonction de la hauteur choisie
    nbSpacesEtoile = hauteur + 1; // Determine le nombre d'espaces nécessaire pour bien positonner l'étoile '+'
    strSpacesEtoile = space.repeat(nbSpacesEtoile); //Creer une chaine de caractère avec une concaténation du nb d'espaces vu au dessus
    makeSapin = strSpacesEtoile + `+` + retourChariot; // Creer la premiere ligne de sapin avec une concaténation des espaces et de l'étoile et un RC
    strSpaces = space.repeat(hauteur); // Creer une chaine de caractère avec une concaténation pour positionner la deuxieme ligne du sapin
    makeSapin += strSpaces + slash + tron + backSlash; // Creer la deuxieme ligne du sapin
    //FIN INIT du haut du sapin
    
    for (var i=hauteur-1; i>0;i--){
        strSpaces = space.repeat(i);
        strEtoile=etoile.repeat(nbEtoile);
        makeTriangleG = strSpaces + slash + strEtoile;
        makeTriangleD = strEtoile + backSlash;
        makeSapin += retourChariot + makeTriangleG + tron +  makeTriangleD;       
        nbEtoile += 1;
    }
    console.log(makeSapin);
} 

//afficherPointeSapin(4);

/*EXPECTED OUTPUT
+
/|\
/*|*\
/**|**\
/***|***\
* 
*/

/*********************************************
Etape 2: Sapin à étages
Écrivons maintenant une fonction afficherSapin 
qui affichera les différents étages de sapin.
********************************************/

//afficherPointeSapin(1)
//afficherPointeSapin(2)
//afficherPointeSapin(3)

/*EXPECTED OUTPUT 
+
/|\
+
/|\
/*|*\
+
/|\
/*|*\
/**|**\
*/

/*********************************************
2.1 Afficher un étage
Changeons maintenant notre function afficherPointeSapin() 
pour afficher n’importe quel étage du sapin ! 
Elle se nommera afficherEtage et prendra les paramètres suivant:
afficherEtage(hauteur, pointe_offset)
********************************************/

//C'EST DE LA TORTURE DE BRAINCELLS

function afficherEtage(hauteur, pointe_offset) {
    // comment sauter les premières lignes d'étoiles pour ne commencer qu'à la ligne numero 'pointe_offset' ?
    var etoile = "*";
    var nbEtoile=1;
    var strEtoile;
    var retourChariot = `\n`;
    var backSlash =`\\`;
    var slash =`/`;
    var space=` `;
    var strSpaces;
    var nbSpacesEtoile;
    var strSpacesEtoile;
    var makeSapin=``;
    var makeTriangleG;
    var makeTriangleD;
    var tron = `|`;
    
    if (pointe_offset == 0){
        //INIT du haut du sapin en fonction de la hauteur choisie
        nbSpacesEtoile = hauteur + 1; // Determine le nombre d'espaces nécessaire pour bien positonner l'étoile '+'
        strSpacesEtoile = space.repeat(nbSpacesEtoile); //Creer une chaine de caractère avec une concaténation du nb d'espaces vu au dessus
        makeSapin = strSpacesEtoile + `+` + retourChariot; // Creer la premiere ligne de sapin avec une concaténation des espaces et de l'étoile et un RC
        strSpaces = space.repeat(hauteur); // Creer une chaine de caractère avec une concaténation pour positionner la deuxieme ligne du sapin
        makeSapin += strSpaces + slash + tron + backSlash + retourChariot; // Creer la deuxieme ligne du sapin
        //FIN INIT du haut du sapin
    } else if (pointe_offset == 1){
        strSpaces = space.repeat(hauteur); // Creer une chaine de caractère avec une concaténation pour positionner la deuxieme ligne du sapin
        makeSapin = strSpaces + slash + tron + backSlash + retourChariot; // Creer la deuxieme ligne du sapin
    }
    //Ligne une et deux conditionnées car l'affichage de ces deux lignes n'est pas dans la boule for et doivent être initialisées
    for (var i=hauteur-1; i>1;i--){
        
        strSpaces = space.repeat(i);
        strEtoile=etoile.repeat(nbEtoile);
        makeTriangleG = strSpaces + slash + strEtoile;
        makeTriangleD = strEtoile + backSlash;
        makeSapin += makeTriangleG + tron +  makeTriangleD + retourChariot;      
        nbEtoile += 1;
    }
    if (i = 1){
        strSpaces = space.repeat(i);
        strEtoile=etoile.repeat(nbEtoile);
        makeTriangleG = strSpaces + slash + strEtoile;
        makeTriangleD = strEtoile + backSlash;
        makeSapin += makeTriangleG + tron +  makeTriangleD; // On enlève le dernier RC
    }
    console.log(makeSapin);
} 

//afficherEtage(3, 0) // les 3 premières lignes
//afficherEtage(3, 1) // affiche à partir de la deuxième ligne, et continue sur 3 lignes
//afficherEtage(3, 2) // affiche à partie de la troisième lige, et continue sur 3 lignes

/*EXPECTED OUTPUT
  /|\
 /*|*\
/**|**\
  /*|*\
 /**|**\
/***|***\
  /**|**\
 /***|***\
/****|****\
*/

/*MY OUTPUT
Ma fonction gère déjà les espacements dsl étape 2.2 */

/*********************************************
2.3 Factorisation
Il ne nous reste plus qu'à placer ces différents 
étages au sein d’une même fonction afficherSapin. 
Comme cette fonction prend le paramètre etages, 
nous devrions pouvoir rendre le nombre d'étage 
dynamique à l’aide de notre fonction afficherEtage 
et d’une boucle.
********************************************/


function afficherSapin(etages, hauteur_etage) {
    // pour chaque étage, appeler printEtage pour hauteur_etage

    /* etages multiplié par afficherEtage(hauteur_etage, pointe_offset???);

    1er appel afficherEtage(hauteur_etage, 0);
    2eme appel afficherEtage(hauteur_etage, 1);
    on ajoute 1 à offset à chaque appel */
    var offset = 0;

    for (var i=etages; i>0; i--){
        afficherEtage(hauteur_etage, offset);
        offset+=1;
    }
    /*PS : mon sapin n'a pas de pied mais on ne discrimine pas ici !! Il est super bien comme il est mon sapin !!
    */
  }
  
  afficherSapin(3, 3);