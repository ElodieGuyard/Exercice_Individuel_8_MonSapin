function tryWord(word, base) {
      // TODO: fix jeu sensible à la casse.
      if (word === base) {
            return true
      } else {
            let wellPlaced = [];
            let notInWord = [];
            let missplaced = [];
            
            let arrayBase = base.split('');
            let arrayWord = word.split('');
            

            
            for (var char of arrayWord) {  
                  let i=arrayWord.indexOf(char);
                  char = char.toLowerCase();

                  if (arrayBase.includes(char) === false) { // Si char n'est pas inclus dans array base
                        notInWord.push(char);                //push dans notInWord le char
                  } else if (arrayBase[i] === char) {
                        wellPlaced.push(char); // Alors on push la lettre dans wellplaced
                  } else {
                        missplaced.push(char); // on push dans missplaced *************
                  }
            }
            return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
      
      }
}

function guess() {
      let base = 'dictionnaire'
      let word = document.getElementById("word").value
      let result = tryWord(word, base)
      document.getElementById("word").value = ''
      document.getElementById("try").innerText = word

      if (result==true) {
            document.getElementById("win").innerText = 'Vous avez gagné'
      } else {
            document.getElementById("well").innerText = 'Bien placé: '+ result.wellPlaced.join(', ') // Quand le mot est trouvé, result = true, donc result.wellPlaced n'existe pas
            document.getElementById("miss").innerText = 'Mal placé: '+ result.missplaced.join(', ')
            document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')

      }
}