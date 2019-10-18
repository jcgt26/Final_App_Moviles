function changePage(idIn, idOut) {
    document.getElementById(idOut).classList.add("ocultar");
    document.getElementById(idIn).classList.remove("ocultar");
}
var piezas=document.getElementsByClassName('movil');
var tamWidth=[134,134,134,134,134,134,134,134,134,134,134,134,134,134,134,134];
var tamHeight=[135,135,135,135,135,135,135,135,135,135,135,135,135,135,135,135];
for(var i=0;i<piezas.length;i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height",tamHeight[i]);
        if(i==0){
            piezas[i].setAttribute("x",590);
            piezas[i].setAttribute("y", 35);
        }else if(i==1){
            piezas[i].setAttribute("x",735);
            piezas[i].setAttribute("y", 35);
        }else if(i==2){
            piezas[i].setAttribute("x", 880);
            piezas[i].setAttribute("y", 35);
        }else if(i==3){
            piezas[i].setAttribute("x",590);
            piezas[i].setAttribute("y", 180);
        }else if(i==4){
            piezas[i].setAttribute("x",735);
            piezas[i].setAttribute("y", 180); 
        }else if(i==5){
            piezas[i].setAttribute("x",880);
            piezas[i].setAttribute("y", 180);
        }else if(i==6){
            piezas[i].setAttribute("x",590);
            piezas[i].setAttribute("y", 325);
        }else if(i==7){
            piezas[i].setAttribute("x",735);
            piezas[i].setAttribute("y", 325);
        }else if(i==8){
            piezas[i].setAttribute("x",880);
            piezas[i].setAttribute("y", 325);
        }else if(i==9){
            piezas[i].setAttribute("x",590);
            piezas[i].setAttribute("y", 470);
        }else if(i==10){
            piezas[i].setAttribute("x",735);
            piezas[i].setAttribute("y", 470);
        }else if(i==11){
            piezas[i].setAttribute("x",880);
            piezas[i].setAttribute("y", 470);
        }          
    piezas[i].addEventListener("touchstart",seleccionarElemento,false);
}
var elementSelect=0;
var currentX=0;
var currentY=0;
var currentPosX=0;
var currentPosY=0;
var clientX=0, clientY=0;

function seleccionarElemento(evt){ 
    elementSelect=reordenar(evt); 
    currentX = evt.touches[0].clientX;
    currentY = evt.touches[0].clientY;
    currentPosx=parseFloat(elementSelect.getAttribute("x"));
    currentPosy=parseFloat(elementSelect.getAttribute("y"));
    elementSelect.addEventListener("touchmove",moverElemento,false);
}

function moverElemento(evt){
    var dx=evt.changedTouches[0].clientX - currentX;
    var dy=evt.changedTouches[0].clientY - currentY;
    currentPosx=currentPosx+dx;
    currentPosy=currentPosy+dy;
    elementSelect.setAttribute("x",currentPosx);
    elementSelect.setAttribute("y",currentPosy);
    currentX = evt.touches[0].clientX;
    currentY = evt.touches[0].clientY;
    elementSelect.addEventListener("touchend",deseleccionarElemento,false);
    iman();
}
function deseleccionarElemento(evt){
    testing();
    if(elementSelect!=0){
        elementSelect.removeEventListener("touchmove",null);
        elementSelect.removeEventListener("touchcancel",null);
        elementSelect.removeEventListener("touchend",null);
        elementSelect=0;
    }
}
var entorno=document.getElementById('entrono');

function reordenar(evt){
    var padre= evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    entrono.removeChild(document.getElementById(id));
    entrono.appendChild(clone);
    return entrono.lastChild.firstChild;

}
var origX=[40,175,308,442,40,175,308,442,40,175,308,442,40,175,308,442,];
var origY=[35,35,35,35,170,170,170,170,305,305,305,305,440,440,440,440];
function iman(){
    for(var i=0;i<piezas.length;i++){
        if(Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15){
            elementSelect.setAttribute("x",origX[i]);
            elementSelect.setAttribute("y",origY[i]);
        }        
    }
}
var win = document.getElementById('win');
function testing(){
    var bien_ubicada=0;
    var padres=document.getElementsByClassName('padre');
    for(var i=0; i<piezas.length;i++){
        var posx=parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy=parseFloat(padres[i].firstChild.getAttribute("y"));
        ide=padres[i].getAttribute("id");
        if(origX[ide]==posx && origY[ide] ==posy){
            bien_ubicada++;
        }

    }
}