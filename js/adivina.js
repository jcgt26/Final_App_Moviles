let words = [];
let guessedLetters = [];
let wrongLetters = [];
let wrongLettersSpace = document.getElementById("container2");

words[0] = "aburraes";
words[1] = "altura";
words[2] = "ceremoniales";
words[3] = "cerro";
words[4] = "indi";
words[5] = "kila";
words[6] = "medellin";
words[7] = "primavera";
words[8] = "ceremoniales";
words[8] = "valle de aburra";
words[8] = "tradicional";
let currentWord = words[0];
let lengthWord = currentWord.length;









function selectLetter(letter) {

    if (currentWord.indexOf(letter) > -1) {

        if (!guessedLetters.includes(letter)) {

            if (currentWord === "aburraes") {

                if (letter === "a") {
                    aburraes_a1.classList.remove("ocultarLetter");
                    aburraes_a2.classList.remove("ocultarLetter");
                    lengthWord--;

                } else if (letter === "b") {
                    aburraes_b.classList.remove("ocultarLetter");
                } else if (letter === "u") {
                    aburraes_u.classList.remove("ocultarLetter");
                } else if (letter === "r") {
                    aburraes_r1.classList.remove("ocultarLetter");
                    aburraes_r2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "e") {
                    aburraes_e.classList.remove("ocultarLetter");
                } else if (letter === "s") {
                    aburraes_s.classList.remove("ocultarLetter");
                } 
                guessedLetters.push(letter);
                lengthWord--;

                if(lengthWord === 0){
                    console.log("You win this round")
                }
                console.log(lengthWord);
            }



        }else{
            console.log("Letra ya seleccionada")
        }

    }else{

        if(!guessedLetters.includes(letter)){
            wrongLetters.push(letter);
            addWrongLetter(letter);


        }else{

            console.log("Letra ya seleccionada")
        }
        console.log("Letra Incorrecta")
    }

}

function addWrongLetter(letter){

    let ruta = "img/letter" + letter.toUpperCase() + ".png";
    console.log(ruta);
    wrongLettersSpace.innerHTML = wrongLettersSpace.innerHTML +  "<img src='"+ruta+"' class='wrongLetters' alt='' />"
   

}