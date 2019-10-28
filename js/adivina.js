let words = [];
let guessedLetters = [];
let wrongLetters = [];
let sections = [];
let wordsSpace = [];
let wordsNotPlayed = [];
let currentLevel = 1;



words[0] = "aburraes";
words[1] = "altura";
words[2] = "ceremoniales";
words[3] = "cerro";
words[4] = "indi";
words[5] = "kila";
words[6] = "medellin";
words[7] = "primavera";
words[8] = "valledeaburra";
words[9] = "tradicional";
wordsNotPlayed = words;



sections[0] = document.getElementById("gameScreen_hangMan");
sections[1] = document.getElementById("mainScreen_hangMan");
sections[2] = document.getElementById("gameOverScreen_hangMan");
sections[3] = document.getElementById("gameWonScreen_hangMan");
let level = document.getElementById("level");

let wrongLettersSpace = document.getElementById("container2");



var currentWord = firstRandomWord();
var lengthWord = currentWord.length;


function firstRandomWord() {

    let position = Math.floor(Math.random() * (words.length));
    let word = words[position];
    console.log(word);
    document.getElementById("imgWord" + word).classList.remove("ocultarLetter");
    wordsNotPlayed.splice(position, 1);

    return word;
}

function randomWord() {
    let currentLength = wordsNotPlayed.length;
    let position = Math.floor(Math.random() * (currentLength));
    let word = wordsNotPlayed[position];
    console.log(word);
    document.getElementById("imgWord" + word).classList.remove("ocultarLetter");
    wordsNotPlayed.splice(position, 1);

    return word;
}




function selectLetter(letter) {

    if (currentWord.indexOf(letter) > -1) {
        console.log(letter)
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

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");
                    aburraes_a1.classList.add("ocultarLetter");
                    aburraes_a2.classList.add("ocultarLetter");
                    aburraes_r1.classList.add("ocultarLetter");
                    aburraes_r2.classList.add("ocultarLetter");
                    aburraes_u.classList.add("ocultarLetter");
                    aburraes_b.classList.add("ocultarLetter");
                    aburraes_e.classList.add("ocultarLetter");
                    aburraes_s.classList.add("ocultarLetter");
                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "altura") {

                if (letter === "a") {
                    altura_a1.classList.remove("ocultarLetter");
                    altura_a2.classList.remove("ocultarLetter");
                    lengthWord--;

                } else if (letter === "l") {
                    altura_l.classList.remove("ocultarLetter");
                } else if (letter === "u") {
                    altura_u.classList.remove("ocultarLetter");
                } else if (letter === "r") {
                    altura_r.classList.remove("ocultarLetter");
                } else if (letter === "t") {
                    altura_t.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");
                    altura_a1.classList.add("ocultarLetter");
                    altura_a2.classList.add("ocultarLetter");
                    altura_l.classList.add("ocultarLetter");
                    altura_t.classList.add("ocultarLetter");
                    altura_u.classList.add("ocultarLetter");
                    altura_r.classList.add("ocultarLetter");
                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "ceremoniales") {
                console.log("hola");
                if (letter === "c") {
                    ceremoniales_c.classList.remove("ocultarLetter");
                } else if (letter === "e") {
                    ceremoniales_e1.classList.remove("ocultarLetter");
                    ceremoniales_e2.classList.remove("ocultarLetter");
                    ceremoniales_e3.classList.remove("ocultarLetter");
                    lengthWord--;
                    lengthWord--;
                } else if (letter === "r") {
                    ceremoniales_r.classList.remove("ocultarLetter");
                } else if (letter === "m") {
                    ceremoniales_m.classList.remove("ocultarLetter");
                } else if (letter === "o") {
                    ceremoniales_o.classList.remove("ocultarLetter");
                } else if (letter === "n") {
                    ceremoniales_n.classList.remove("ocultarLetter");
                } else if (letter === "i") {
                    ceremoniales_i.classList.remove("ocultarLetter");
                } else if (letter === "a") {
                    ceremoniales_a.classList.remove("ocultarLetter");
                } else if (letter === "l") {
                    ceremoniales_l.classList.remove("ocultarLetter");
                } else if (letter === "s") {
                    ceremoniales_s.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    ceremoniales_c.classList.add("ocultarLetter");
                    ceremoniales_e1.classList.add("ocultarLetter");
                    ceremoniales_r.classList.add("ocultarLetter");
                    ceremoniales_e2.classList.add("ocultarLetter");
                    ceremoniales_m.classList.add("ocultarLetter");
                    ceremoniales_o.classList.add("ocultarLetter");
                    ceremoniales_n.classList.add("ocultarLetter");
                    ceremoniales_i.classList.add("ocultarLetter");
                    ceremoniales_a.classList.add("ocultarLetter");
                    ceremoniales_l.classList.add("ocultarLetter");
                    ceremoniales_e3.classList.add("ocultarLetter");
                    ceremoniales_s.classList.add("ocultarLetter");
                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "cerro") {

                if (letter === "c") {
                    cerro_c.classList.remove("ocultarLetter");
                } else if (letter === "e") {
                    cerro_e.classList.remove("ocultarLetter");
                } else if (letter === "r") {
                    cerro_r1.classList.remove("ocultarLetter");
                    cerro_r2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "o") {
                    cerro_o.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    cerro_c.classList.add("ocultarLetter");
                    cerro_e.classList.add("ocultarLetter");
                    cerro_r1.classList.add("ocultarLetter");
                    cerro_r2.classList.add("ocultarLetter");
                    cerro_o.classList.add("ocultarLetter");
                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "indi") {

                if (letter === "i") {
                    indi_i1.classList.remove("ocultarLetter");
                    indi_i2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "n") {
                    indi_n.classList.remove("ocultarLetter");
                } else if (letter === "d") {
                    indi_d.classList.remove("ocultarLetter");

                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    indi_i1.classList.add("ocultarLetter");
                    indi_i2.classList.add("ocultarLetter");
                    indi_n.classList.add("ocultarLetter");
                    indi_d.classList.add("ocultarLetter");

                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "kila") {

                if (letter === "k") {
                    kila_k.classList.remove("ocultarLetter");
                } else if (letter === "i") {
                    kila_i.classList.remove("ocultarLetter");
                } else if (letter === "l") {
                    kila_l.classList.remove("ocultarLetter");
                } else if (letter === "a") {
                    kila_a.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    kila_k.classList.add("ocultarLetter");
                    kila_i.classList.add("ocultarLetter");
                    kila_l.classList.add("ocultarLetter");
                    kila_a.classList.add("ocultarLetter");

                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "medellin") {

                if (letter === "m") {
                    medellin_m.classList.remove("ocultarLetter");
                } else if (letter === "e") {
                    medellin_e1.classList.remove("ocultarLetter");
                    medellin_e2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "d") {
                    medellin_d.classList.remove("ocultarLetter");
                } else if (letter === "l") {
                    medellin_l1.classList.remove("ocultarLetter");
                    medellin_l2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "i") {
                    medellin_i.classList.remove("ocultarLetter");
                } else if (letter === "n") {
                    medellin_n.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    medellin_m.classList.add("ocultarLetter");
                    medellin_e1.classList.add("ocultarLetter");
                    medellin_d.classList.add("ocultarLetter");
                    medellin_e2.classList.add("ocultarLetter");
                    medellin_l1.classList.add("ocultarLetter");
                    medellin_l2.classList.add("ocultarLetter");
                    medellin_i.classList.add("ocultarLetter");
                    medellin_n.classList.add("ocultarLetter");


                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "primavera") {

                if (letter === "p") {
                    primavera_p.classList.remove("ocultarLetter");
                } else if (letter === "r") {
                    primavera_r1.classList.remove("ocultarLetter");
                    primavera_r2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "i") {
                    primavera_i.classList.remove("ocultarLetter");
                } else if (letter === "m") {
                    primavera_m.classList.remove("ocultarLetter");
                } else if (letter === "a") {
                    primavera_a1.classList.remove("ocultarLetter");
                    primavera_a2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "v") {
                    primavera_v.classList.remove("ocultarLetter");
                } else if (letter === "e") {
                    primavera_e.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    primavera_p.classList.add("ocultarLetter");
                    primavera_r1.classList.add("ocultarLetter");
                    primavera_i.classList.add("ocultarLetter");
                    primavera_m.classList.add("ocultarLetter");
                    primavera_a1.classList.add("ocultarLetter");
                    primavera_v.classList.add("ocultarLetter");
                    primavera_e.classList.add("ocultarLetter");
                    primavera_r2.classList.add("ocultarLetter");
                    primavera_a2.classList.add("ocultarLetter");




                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "valledeaburra") {

                if (letter === "v") {
                    valledeaburra_v.classList.remove("ocultarLetter");
                } else if (letter === "a") {
                    valledeaburra_a1.classList.remove("ocultarLetter");
                    valledeaburra_a2.classList.remove("ocultarLetter");
                    valledeaburra_a3.classList.remove("ocultarLetter");
                    lengthWord--;
                    lengthWord--;
                } else if (letter === "l") {
                    valledeaburra_l1.classList.remove("ocultarLetter");
                    valledeaburra_l2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "e") {
                    valledeaburra_e1.classList.remove("ocultarLetter");
                    valledeaburra_e2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "b") {
                    valledeaburra_b.classList.remove("ocultarLetter");
                } else if (letter === "u") {
                    valledeaburra_u.classList.remove("ocultarLetter");
                } else if (letter === "r") {
                    valledeaburra_r1.classList.remove("ocultarLetter");
                    valledeaburra_r2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "d") {
                    valledeaburra_d.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    valledeaburra_v.classList.add("ocultarLetter");
                    valledeaburra_a1.classList.add("ocultarLetter");
                    valledeaburra_l1.classList.add("ocultarLetter");
                    valledeaburra_l2.classList.add("ocultarLetter");
                    valledeaburra_e1.classList.add("ocultarLetter");
                    valledeaburra_d.classList.add("ocultarLetter");
                    valledeaburra_e2.classList.add("ocultarLetter");
                    valledeaburra_a2.classList.add("ocultarLetter");
                    valledeaburra_b.classList.add("ocultarLetter");
                    valledeaburra_u.classList.add("ocultarLetter");
                    valledeaburra_r1.classList.add("ocultarLetter");
                    valledeaburra_r2.classList.add("ocultarLetter");
                    valledeaburra_a3.classList.add("ocultarLetter");




                    changeWord();
                }
                console.log(lengthWord);

            } else if (currentWord === "tradicional") {

                if (letter === "t") {
                    tradicional_t.classList.remove("ocultarLetter");
                } else if (letter === "r") {
                    tradicional_r.classList.remove("ocultarLetter");
                } else if (letter === "i") {
                    tradicional_i1.classList.remove("ocultarLetter");
                    tradicional_i2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "a") {
                    tradicional_a1.classList.remove("ocultarLetter");
                    tradicional_a2.classList.remove("ocultarLetter");
                    lengthWord--;
                } else if (letter === "d") {
                    tradicional_d.classList.remove("ocultarLetter");
                } else if (letter === "c") {
                    tradicional_c.classList.remove("ocultarLetter");
                } else if (letter === "o") {
                    tradicional_o.classList.remove("ocultarLetter");
                } else if (letter === "n") {
                    tradicional_n.classList.remove("ocultarLetter");
                } else if (letter === "l") {
                    tradicional_l.classList.remove("ocultarLetter");
                }
                guessedLetters.push(letter);
                lengthWord--;

                if (lengthWord === 0) {
                    console.log("You win this round")
                    document.getElementById("imgWord" + currentWord).classList.add("ocultarLetter");

                    tradicional_t.classList.add("ocultarLetter");
                    tradicional_r.classList.add("ocultarLetter");
                    tradicional_a1.classList.add("ocultarLetter");
                    tradicional_d.classList.add("ocultarLetter");
                    tradicional_i1.classList.add("ocultarLetter");
                    tradicional_c.classList.add("ocultarLetter");
                    tradicional_i2.classList.add("ocultarLetter");
                    tradicional_o.classList.add("ocultarLetter");
                    tradicional_n.classList.add("ocultarLetter");
                    tradicional_a2.classList.add("ocultarLetter");
                    tradicional_l.classList.add("ocultarLetter");
                    changeWord();
                }
                console.log(lengthWord);

            }




        } else {
            console.log("Letra ya seleccionada")
        }

    } else {

        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            addWrongLetter(letter);
            if (wrongLetters.length === 5) {
                sections[0].classList.add("ocultar");
                sections[2].classList.remove("ocultar");
                guessedLetters = [];
                wrongLetters = [];


            }


        } else {

            console.log("Letra ya seleccionada")
        }
        console.log("Letra Incorrecta")
    }

}

function addWrongLetter(letter) {

    let ruta = "img/letter" + letter.toUpperCase() + ".png";
    console.log(ruta);
    wrongLettersSpace.innerHTML = wrongLettersSpace.innerHTML + "<img src='" + ruta + "' class='wrongLetters' alt='' />"


}



function changeWord() {
    if (wordsNotPlayed.length === 0) {
        sections[0].classList.add("ocultar");
        sections[3].classList.remove("ocultar");


    } else {
        currentWord = randomWord();
        lengthWord = currentWord.length;
        wrongLettersSpace.innerHTML = "";
        guessedLetters = [];
        wrongLetters = [];
        currentLevel++;
        level.src = "img/level" + currentLevel + ".png";

    }


}



function playAgain(section) {

    currentLevel = 1;
    level.src = "img/level" + currentLevel + ".png";

    document.getElementById("imgWord" + "aburraes").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "altura").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "ceremoniales").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "cerro").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "indi").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "kila").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "medellin").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "primavera").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "valledeaburra").classList.add("ocultarLetter");
    document.getElementById("imgWord" + "tradicional").classList.add("ocultarLetter");

    aburraes_a1.classList.add("ocultarLetter");
    aburraes_a2.classList.add("ocultarLetter");
    aburraes_r1.classList.add("ocultarLetter");
    aburraes_r2.classList.add("ocultarLetter");
    aburraes_u.classList.add("ocultarLetter");
    aburraes_b.classList.add("ocultarLetter");
    aburraes_e.classList.add("ocultarLetter");
    aburraes_s.classList.add("ocultarLetter");


    altura_a1.classList.add("ocultarLetter");
    altura_a2.classList.add("ocultarLetter");
    altura_l.classList.add("ocultarLetter");
    altura_t.classList.add("ocultarLetter");
    altura_u.classList.add("ocultarLetter");
    altura_r.classList.add("ocultarLetter");


    ceremoniales_c.classList.add("ocultarLetter");
    ceremoniales_e1.classList.add("ocultarLetter");
    ceremoniales_r.classList.add("ocultarLetter");
    ceremoniales_e2.classList.add("ocultarLetter");
    ceremoniales_m.classList.add("ocultarLetter");
    ceremoniales_o.classList.add("ocultarLetter");
    ceremoniales_n.classList.add("ocultarLetter");
    ceremoniales_i.classList.add("ocultarLetter");
    ceremoniales_a.classList.add("ocultarLetter");
    ceremoniales_l.classList.add("ocultarLetter");
    ceremoniales_e3.classList.add("ocultarLetter");
    ceremoniales_s.classList.add("ocultarLetter");


    cerro_c.classList.add("ocultarLetter");
    cerro_e.classList.add("ocultarLetter");
    cerro_r1.classList.add("ocultarLetter");
    cerro_r2.classList.add("ocultarLetter");
    cerro_o.classList.add("ocultarLetter");


    indi_i1.classList.add("ocultarLetter");
    indi_i2.classList.add("ocultarLetter");
    indi_n.classList.add("ocultarLetter");
    indi_d.classList.add("ocultarLetter");

    kila_k.classList.add("ocultarLetter");
    kila_i.classList.add("ocultarLetter");
    kila_l.classList.add("ocultarLetter");
    kila_a.classList.add("ocultarLetter");

    medellin_m.classList.add("ocultarLetter");
    medellin_e1.classList.add("ocultarLetter");
    medellin_d.classList.add("ocultarLetter");
    medellin_e2.classList.add("ocultarLetter");
    medellin_l1.classList.add("ocultarLetter");
    medellin_l2.classList.add("ocultarLetter");
    medellin_i.classList.add("ocultarLetter");
    medellin_n.classList.add("ocultarLetter");

    primavera_p.classList.add("ocultarLetter");
    primavera_r1.classList.add("ocultarLetter");
    primavera_i.classList.add("ocultarLetter");
    primavera_m.classList.add("ocultarLetter");
    primavera_a1.classList.add("ocultarLetter");
    primavera_v.classList.add("ocultarLetter");
    primavera_e.classList.add("ocultarLetter");
    primavera_r2.classList.add("ocultarLetter");
    primavera_a2.classList.add("ocultarLetter");

    valledeaburra_v.classList.add("ocultarLetter");
    valledeaburra_a1.classList.add("ocultarLetter");
    valledeaburra_l1.classList.add("ocultarLetter");
    valledeaburra_l2.classList.add("ocultarLetter");
    valledeaburra_e1.classList.add("ocultarLetter");
    valledeaburra_d.classList.add("ocultarLetter");
    valledeaburra_e2.classList.add("ocultarLetter");
    valledeaburra_a2.classList.add("ocultarLetter");
    valledeaburra_b.classList.add("ocultarLetter");
    valledeaburra_u.classList.add("ocultarLetter");
    valledeaburra_r1.classList.add("ocultarLetter");
    valledeaburra_r2.classList.add("ocultarLetter");
    valledeaburra_a3.classList.add("ocultarLetter");

    tradicional_t.classList.add("ocultarLetter");
    tradicional_r.classList.add("ocultarLetter");
    tradicional_a1.classList.add("ocultarLetter");
    tradicional_d.classList.add("ocultarLetter");
    tradicional_i1.classList.add("ocultarLetter");
    tradicional_c.classList.add("ocultarLetter");
    tradicional_i2.classList.add("ocultarLetter");
    tradicional_o.classList.add("ocultarLetter");
    tradicional_n.classList.add("ocultarLetter");
    tradicional_a2.classList.add("ocultarLetter");
    tradicional_l.classList.add("ocultarLetter");
    wrongLettersSpace.innerHTML = "";
    words[0] = "aburraes";
    words[1] = "altura";
    words[2] = "ceremoniales";
    words[3] = "cerro";
    words[4] = "indi";
    words[5] = "kila";
    words[6] = "medellin";
    words[7] = "primavera";
    words[8] = "valledeaburra";
    words[9] = "tradicional";
    wordsNotPlayed = words;
    guessedLetters = [];
    wrongLetters = [];

    let position = Math.floor(Math.random() * (words.length));
    let word = words[position];
    console.log(words);
    console.log(word);
    document.getElementById("imgWord" + word).classList.remove("ocultarLetter");
    wordsNotPlayed.splice(position, 1);
    currentWord = word;
    lengthWord = currentWord.length;
    sections[section].classList.add("ocultar");
    sections[0].classList.remove("ocultar");


}


function backToMenuEndGame(section){
    playAgain(section);
    sections[0].classList.add("ocultar");
    //sections[section].classList.add("ocultar");
    sections[1].classList.remove("ocultar");
}