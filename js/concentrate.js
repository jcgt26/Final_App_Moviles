window.onload = init;
var array_card_numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var array_cartas = [];
var cards_reference = {};
var cardStack = [];
var array_sections = [];
var count_to_win;
function init(){
    count_to_win = 0;
    for (let i = 0; i <=2; i++) {
        array_sections[i] = document.getElementById(i)
        
    }
    for (let i = 0; i <= 13; i++) {
        array_cartas[i] = document.getElementById('carta_'+i+''); 
    }
    shuffle(array_card_numbers);
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
                

                card1.onclick = null;
                card2.onclick = null;
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





