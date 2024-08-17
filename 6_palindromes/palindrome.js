/* **************************** GLOBAL DECLARATIONS ***********************************/

const integerDate = [];
var ma_date;
ma_date = new Date();

/*********************************** ETAPE 1 ******************************************
 * Créer une fonction isValidDate qui prend en paramètre une date en string et
 * determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe
 * et qu'elle soit au format dd/mm/aaaa. Tout au long de l’exercice, on supposera des
 * années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera
 * systématiquement représentée sur 4 caractères.
 *************************************************************************************/

/* Note : SPLIT();
The split() method of String values takes a pattern and divides this string into an 
ordered list of substrings by searching for the pattern, puts these substrings into 
an array, and returns the array.  */

function isValidDate(strDate) {
  const splitDate = strDate.split("/"); //enlève les slashs de l'input
  for (i = 0; i < splitDate.length; i++) {
    //met les données en integer au lieu de str
    integerDate.push(parseInt(splitDate[i])); //ça supprime par la même tout les espaces
  }
  return integerDate;
}

/************************************************************************************
Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous 
assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, 
le mois de novembre ne contient que 30 jours)
*************************************************************************************/

function maxDaysInMonth(uneIntDate) {
  uneIntDate[1] -= 1; // On rectifie le mois !!! car en js le mois commence à 0 !!!
  ma_date.setFullYear(uneIntDate[2]);
  ma_date.setMonth(uneIntDate[1]);
  ma_date.setDate(uneIntDate[0]);
  //EXPECTED OUTPUT ma_date : 2002-02-20T11:09:08.373Z avec isValidDate("20 / 02 / 2002"); et maxDaysInMonth(integerDate);
  if (
    ma_date.getFullYear() == uneIntDate[2] &&
    ma_date.getMonth() == uneIntDate[1] &&
    ma_date.getDate() == uneIntDate[0]
  ) {
    console.log("Date valable !");
    return true;
  } else {
    console.log("Erreur dans la saisie de la date!");
    return false;
  }
}

/************************************ ETAPE 2 ****************************************
 * Créer une fonction `isPalindrome` qui prend une date en string en paramètre et 
 * retourne un booléen qui indique si la date est un palindrome. Si la date est 
 * invalide, retourner false.
Exemple de date palindrome: `11/02/2011`. Les caractères `/` ne sont pas pris en compte.
**************************************************************************************/

function isPalindrome(dateEnStr) {
  let palindrome;
  let jour;
  let mois;
  let dateReversed;

  jour = dateEnStr.getDate();
  if (jour < 10) {
    // réajustement du mois car le mois commence à 0 en js
    jour = "0" + jour;
  }
  mois = dateEnStr.getMonth() + 1;
  if (mois < 10) {
    // réajustement du mois car le mois commence à 0 en js
    mois = "0" + mois;
  }

  let dateInit =
    jour.toString() + mois.toString() + dateEnStr.getFullYear().toString();
  dateReversed = dateInit; // EXPECTED OUTPUT = DDMMAAAA
  dateReversed = dateReversed.split(""); // EXPECTED OUTPUT ['D','D','M','M','A','A','A','A']
  dateReversed = dateReversed.reverse(); // EXPECTED OUTPUT ['A','A','A','A','M','M','D','D']
  // ATTENTION : la méthode reverse fonctionne pour un tableau
  // Careful: reverse is destructive -- it changes the original array.
  dateReversed = dateReversed.join(""); //EXPECTED OUTPUT AAAAMMDD
  console.log(dateInit);
  console.log(dateReversed);
  if (dateReversed == dateInit) {
    //Si les dates de départ et reversed sont égales
    palindrome = true;
  } else {
    palindrome = false;
  }
  return palindrome; //indique si la date est un palindrome (true) ou pas (false)
}

/********************************** ETAPE 3 **************************************
 * Créer une fonction `getNextPalindromes` qui donne les `x` prochaines dates
 * palindromes à compter d’aujourd’hui. La fonction prendra le `x` en paramètre
 *********************************************************************************/

function getNextPalindromes(x) {
  //a compté d'aujourd'hui
  let today = new Date();
  let nbPalindrome = 0;
  var todayTime = today.getTime(); // EXEPCTED OUTPUT (11juillet2024 14h12) 1720699924999
  var endTime = today.getTime();
  var lendemain;
  let datesPalindromes = [];

  for (nbPalindrome = 0; nbPalindrome < x; ) {
    // 60 secondes * 60 minutes * 24 heures
    // On multiplie par 1000 car le time est exprimé en millisecondes
    endTime = endTime + 60 * 60 * 24 * 1000; //EXPECTED OUTPUT (12juillet2024 14h12) 1720786324999
    lendemain = new Date(endTime); //EXPECTED OUTPUT : 2024-07-12T12:12:04.999Z
    console.clear;
    console.log(lendemain);
    console.log(isPalindrome(lendemain));
    if (isPalindrome(lendemain) !== false) {
      datesPalindromes.push(lendemain);
      nbPalindrome = nbPalindrome + 1;
      console.log(datesPalindromes);
    }
  }

  //return x nombres prochaines dates palindromes
}
/* getNextPalindromes(8)
22/02/2022
03/02/2030
13/02/2031
23/02/2032
04/02/2040
14/02/2041
24/02/2042
05/02/2050 */
/* *********************** MAIN ***************************/

//isValidDate("03/02/2030"); //la date ici deviendra integerDate puis ma_date
//maxDaysInMonth(integerDate);
//console.log(integerDate);
//console.log(ma_date);
//console.log(isPalindrome(ma_date));
getNextPalindromes(8);
