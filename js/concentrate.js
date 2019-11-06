window.onload = init;
var array_card_numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var array_cartas = [];
var cards_reference = {};
var cardStack = [];
var array_sections = [];
var count_to_win;
function init(){
        
    var song = document.getElementById("soundTrack");
    song.volume = 0.05;
    
    count_to_win = 0;
    for (let i = 0; i <=2; i++) {
        array_sections[i] = document.getElementById(i)
        
    }
    for (let i = 0; i <= 13; i++) {
        array_cartas[i] = document.getElementById('carta_'+i+''); 
    }
    shuffle(array_card_numbers);
    console.log(array_card_numbers);
    addCardClass();

}




function addCardClass(){
    // console.log(array_cartas);
         
    for (let i = 0; i < array_cartas.length; i++) {
        let number_card = array_card_numbers[i]
        let card = array_cartas[i];
        let nameCardClass = "";
        switch (number_card) {
            case 1:
                nameCardClass = 'cruz'; 
                card.classList.add("1");
                break;
            case 2:
                nameCardClass = 'iglesia';
                card.classList.add("2");
                break;
            case 3:
                nameCardClass = 'jesus';
                card.classList.add("3");
                break;
            case 4:
                nameCardClass = 'metrocable';
                card.classList.add("4");
                break;
            case 5:
                nameCardClass = 'puente';
                card.classList.add("5");
                break;
            case 6:
                nameCardClass = 'silla';
                card.classList.add("6");
                break;
            case 7:
                nameCardClass = 'virgen';
                card.classList.add("7");
                break;
        
            default:
                break;
        }
        cards_reference[`${i}`] = [nameCardClass, false]; //[0] -> classname, [1] -> if checked
        
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    
}

function flip(element){
   
   if(cardStack.length <= 1){
       console.log(element);
       
    changeClassFlip(element);
    element.classList.add('flipInY');
    cardStack.push(element);
    reveal(element)
   }else{
    //    do nothing, cards remain 
   }
    
}
// function unFlip(){

// }

function check(){
    if(cardStack.length === 2){
         setTimeout(function(){
            let card1 = cardStack[0];
            let card2 = cardStack[1];
            let id1 =cards_reference[card1.id.substring(6)][0];
            let id2 =cards_reference[card2.id.substring(6)][0];
            if(id1 === id2){
                

                // card1.onclick = null;
                // card2.onclick = null;
                cards_reference[card1.id.substring(6)][1] = true;
                cards_reference[card2.id.substring(6)][1] = true;
                count_to_win = count_to_win + 2;
                cardStack.pop();
                cardStack.pop();
                win();
            }
            else{

                card1.classList.remove(id1);
                card2.classList.remove(id2);
                card1.classList.remove('flipInY');
                card2.classList.remove('flipInY');
                cardStack.pop();
                cardStack.pop();
                
                
            }
          }, 1000);
       console.log(cardStack);
       
        
        
    }else{

    }
    
}

function reveal(card){
    let id = card.id.substring(6);
    card.classList.add(cards_reference[id][0])
    check()
    // win();// Check if win
    
}
function win(){
    if(count_to_win === 14){
        console.log("WIN!!!!!!!!");
        showSection(1);
        reset();
    }else{

    }
}

function changeClassFlip(element){
    if(element.classList.contains('flipInY')){
        element.classList.remove('flypInY')
    }
}


function showSection(id){
    hideSections();
    array_sections[id].classList.remove("ocultar")
}

function hideSections(){
array_sections.forEach(section => {
    section.classList.add("ocultar")
    
});
}


function StartOrStop(estado) {

    var audio = document.getElementById("soundTrack")
    let btnSound1 = document.getElementById("btnSonidoOnMainHang");
    let btnSound2 = document.getElementById("btnSonidoOnGameHangMan");
    let btnSound3 = document.getElementById("soundBtnHangmanGameOver");
    let btnSound4 = document.getElementById("soundBtnHangmanGameWon")
    let btnSound5 = document.getElementById("btnSonidoConcentrate")
    let btnSound6 = document.getElementById("sonido_intro0")
    let btnSound7 = document.getElementById("soundBtnIntro2")
    

 
    if (estado.value === "Off") {
        btnSound1.src = "img/btnSoundOnHangman.png";
        btnSound1.value = "On"
        btnSound2.src = "img/btnSoundOnHangman.png";
        btnSound2.value = "On"
        btnSound3.src = "img/btnSoundOnHangman.png";
        btnSound3.value = "On"
        btnSound4.src = "img/btnSoundOnHangman.png";
        btnSound4.value = "On"
        btnSound5.src = "img/btnSoundOnHangman.png";
        btnSound5.value = "On"
        btnSound6.src = "img/btnSoundOnHangman.png";
        btnSound6.value = "On"
        btnSound7.src = "img/btnSoundOnHangman.png";
        btnSound7.value = "On"
       
        
        audio.play();
    } else {
        btnSound1.src = "img/btnSoundOffHangman.png";
        btnSound1.value = "Off"
        btnSound2.src = "img/btnSoundOffHangman.png";
        btnSound2.value = "Off"
        btnSound3.src = "img/btnSoundOffHangman.png";
        btnSound3.value = "Off"
        btnSound4.src = "img/btnSoundOffHangman.png";
        btnSound4.value = "Off"
        btnSound5.src = "img/btnSoundOffHangman.png";
        btnSound5.value = "Off"
        btnSound6.src = "img/btnSoundOffHangman.png";
        btnSound6.value = "Off"
        btnSound7.src = "img/btnSoundOffHangman.png";
        btnSound7.value = "Off"
        
        audio.pause();
    }



}


function reset(){
   
array_card_numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
array_cartas = [];
cards_reference = {};
cardStack = [];
array_sections = [];
count_to_win = 0;

for (let i = 0; i <=2; i++) {
    array_sections[i] = document.getElementById(i)
    
}
for (let i = 0; i <= 13; i++) {
    array_cartas[i] = document.getElementById('carta_'+i+''); 
}

shuffle(array_card_numbers);
addCardClass();
array_cartas.forEach(element => {
    if(element.classList.contains('cruz'))
        element.classList.remove('cruz');
        // element.onclick = flip(this)
    if(element.classList.contains('iglesia'))
        element.classList.remove('iglesia');
    if(element.classList.contains('jesus'))
        element.classList.remove('jesus');
    if(element.classList.contains('metrocable'))
        element.classList.remove('metrocable');
    if(element.classList.contains('puente'))
        element.classList.remove('puente');
    if(element.classList.contains('silla'))
        element.classList.remove('silla');
    else(element.classList.contains('virgen'))
        element.classList.remove('virgen');
    // element.onclick = flip(this)
});


}