
function load(){

  setHeight();  
   
  var inputWidth = document.body.querySelectorAll("input[id='width']")[0];
  var inputHeight = document.body.querySelectorAll("input[id='height']")[0];
  var showHeight = document.body.querySelectorAll("[id='showHeightProduct']")[0].children[2];
  var showWidth = document.body.querySelectorAll("[id='showWidthProduct']")[0].children[2];
  
  toogleDisabled(inputWidth,inputHeight,null,true);
  toogleDisabled(showHeight,showWidth,null,true);

  changeProduct();  

}

var side=1;
var orientation="paisaje";
var options = document.getElementById('options');
var product = document.getElementById('product');
var i=0;

//setOrientation (portrait or paisaje)
function setOrientation(newOrientation){
    orientation=newOrientation;
}


for (i = 0; i < 4 ; i++){
  var selected = options[i].selected;
  var option;
      
      if(selected){
          option = options[i].value;
      }
}

//set height
function setHeight(){
    var size = document.getElementsByTagName('section');
    size[0].style.height = (screen.height-200)+"px"
}

//Change product
function changeKindOfProduct(newProduct){
    var product = document.getElementById('product');
    var oldClass = document.getElementById('product');

    //setOrientation(newOrientation);

    if(orientation=='paisaje'){
        switch(newProduct){
            case 'cartao-de-visitas':
            sizeDefault(550,300,20);
            //changeClass(product,oldClass,'defaultBusinessCard_paisaje');
                break;

            case 'panfleto':
            sizeDefault(500,350,20);
            //changeClass(product,oldClass,'defaultPamphlet_paisaje');
                break;

            case 'banner':
            sizeDefault(800,350,-8);
            // changeClass(product,oldClass,'defaultBanner_paisaje');
                break;

            case 'caneca':
            sizeDefault(350,350,30);
            //changeClass(product,oldClass,'mug');
                break;
        }
    }
    else if(orientation=='portrait'){
        switch(newProduct){
            case 'cartao-de-visitas':
            sizeDefault(300,550,36);
            //changeClass(product,oldClass,'defaultBusinessCard_portrait');
                break;

            case 'panfleto':
            sizeDefault(350,500,30);
            //changeClass(product,oldClass,'defaultPamphlet_portrait');
                break;

            case 'banner':
            sizeDefault(350,800,30);
            // changeClass(product,oldClass,'defaultBanner_portrait');
                break;

            case 'caneca':
            sizeDefault(350,350,30);
            //changeClass(product,oldClass,'mug');
                break;
        }
    }
    else{
        console.log("Erro orientação não reconhecida valor:"+ orientation);
    }
}

function sizeDefault(width,height,marginLeft){
    document.getElementsByClassName('cardFront')[0].style.width = width+"px"
    document.getElementsByClassName('cardFront')[0].style.height = height+"px"
    document.getElementsByClassName('cardFront')[0].style.marginLeft= marginLeft+"%"

    document.getElementsByClassName('cardBack')[0].style.width = width+"px"
    document.getElementsByClassName('cardBack')[0].style.height = height+"px"
    document.getElementsByClassName('cardBack')[0].style.marginLeft= marginLeft+"%"
}



//Change Text

function changeTitleFront(value){
    document.getElementsByClassName('product_titleFront')[0].innerHTML = value;
}
function changeTitleBack(value){
    document.getElementsByClassName('product_titleBack')[0].innerHTML = value;
}

function changeTextFront(value){
    document.getElementsByClassName('product_textFront')[0].innerHTML = value;
}
function changeTextBack(value){
    document.getElementsByClassName('product_textBack')[0].innerHTML = value;
}

function changeProduct(){    
    orientation = document.body.querySelectorAll("input[name='orientation']:checked")[0].value; 
    var productChosen = document.body.querySelectorAll("option:checked")[0].value;

    setOrientation(orientation);
    changeKindOfProduct(productChosen);
}

function changeClass(element,oldClass,newClass){
    oldClass.classList.value="";
    element.classList.add(newClass);
}

//setCorner
function setCornerTopLeft(newCorner){
    var product = document.getElementById('product');
    product.children[0].style.borderTopLeftRadius = newCorner+"px"
    product.children[1].style.borderTopRightRadius = newCorner+"px"
}
function setCornerTopRight(newCorner){
    var product = document.getElementById('product');
    product.children[0].style.borderTopRightRadius = newCorner+"px"
    product.children[1].style.borderTopLeftRadius = newCorner+"px"
}
function setCornerBottomLeft(newCorner){
    var product = document.getElementById('product');
    product.children[0].style.borderBottomLeftRadius = newCorner+"px"
    product.children[1].style.borderBottomRightRadius = newCorner+"px"
}
function setCornerBottomRight(newCorner){
    var product = document.getElementById('product');
    product.children[0].style.borderBottomRightRadius = newCorner+"px"
    product.children[1].style.borderBottomLeftRadius = newCorner+"px"
}


//to incline

function incline(id,value){
    var product = document.getElementById('product');

    switch (id){
        case 'rightTopToInclineRight':
          product.style.transform= "skewX(-"+value+"deg)";
            break;
        case 'rightBottomToInclineRight':
          product.style.transform= "skewX("+value+"deg)";
            break;
        case 'rightTopToInclineUp':
          product.style.transform= "skewY(-"+value+"deg)";
            break;        
        case 'leftTopToInclineUp':
          product.style.transform= "skewY("+value+"deg)";
            break;
    }  
}

// resizeAngle 
function resizeAngle(newSize){
  var angle = newSize;
  toRotate(angle);
}

//optimazeSize

function optimazeSize(){
   var choice = document.body.querySelectorAll("input[id='checkbox']")[0].checked;

   var inputWidth = document.body.querySelectorAll("input[id='width']")[0];
   var inputHeight = document.body.querySelectorAll("input[id='height']")[0];
   var showHeight = document.body.querySelectorAll("[id='showHeightProduct']")[0].children[2];
   var showWidth = document.body.querySelectorAll("[id='showWidthProduct']")[0].children[2];
    
    if(choice){
        toogleDisabled(inputWidth,inputHeight,null,false);
        toogleDisabled(showHeight,showWidth,null,false);
    }else{
        toogleDisabled(inputWidth,inputHeight,null,true);
        toogleDisabled(showHeight,showWidth,null,true);
    }
}

function toogleDisabled(element1,element2,element3,boleanValue){
    
    element1.disabled= boleanValue;   
    element2.disabled= boleanValue;  
    element3.disabled= boleanValue;  

    if (boleanValue) {
        element1.style.opacity = "0.4";
        element2.style.opacity = "0.4"; 
        element3.style.opacity = "0.4";  
    } else {
        element1.style.opacity = "1";
        element2.style.opacity = "1"; 
        element3.style.opacity = "1";  
    }
}

/*
      removeAttribute(element,valueId,toggleAttribute);  
      addAttribute(element,valueId,toggleAttribute,toggleValueAttribute);
*/


//importDataFromJson

//save in localstorage after in firebase

//cuts corner

//rules for length

//converterUnits (
    //milimeters to pixels,
    //centimeter to pixels,
    //meter to pixels)

//Front and back 

//Radial

/*filtros na imagem de fundo: negativo,blur,sepia,inverter,
grayscale, brilho, contraste, opacity, saturate,
 e etc
*/

/*fonte: tipo, tamanho, cor, alinhamento,cor de fundo,marcador
coluna,
*/

/*Borda */

//negrito,italico, sublinhado

//Unidades (quantidade)

//exibir duas faces simultãneamente
    //se estiver como paisagem exibir lado a lado
    //se não exibir em cima da outra

//Exibir um pado por vez

//Modo de exibição 3d (com modal)

//colocar margem

//colocar borda

//colocar espaçamento



function changeAmountSides(id){
    var titleBack = document.body.querySelectorAll('[id=titleBack]')[0];
    var textBack = document.body.querySelectorAll('[id=textBack]')[0];
    var colorBack = document.body.querySelectorAll('[id=colorBack]')[0];
    var product = document.getElementById('product');
 
    if (id == "oneSide") {        
        toogleDisabled(titleBack,textBack,colorBack,true);
        product.children[0].style.display = "none";
    } else {        
        toogleDisabled(titleBack,textBack,colorBack,false);
        product.children[0].style.display = "block";
    }
}


function resizeWidthProduct(newWidth){
  var product = document.getElementById('product');
    product.children[0].style.width = newWidth+"px";
    product.children[1].style.width = newWidth+"px";

    showSizeWidth(newWidth);
}
         
function resizeHeightProduct(newHeight){
  var product = document.getElementById('product');
    product.children[0].style.height = newHeight+"px";
    product.children[1].style.height = newHeight+"px";

    showSizeHeight(newHeight);
}


//showSizeWidth
function showSizeWidth(size){
    var width = document.body.querySelectorAll("[id='showWidthProduct']");

    if(size < 144){
        alert("Atenção: Tamanho mínimo excedido!");
        width[0].children[2].placeholder= 144;   
    }
    else if (size >= 144 && size <= 970) {        
         width[0].children[2].placeholder= size;
    } else {
         alert("Atenção: Tamanho máximo excedido!");
         width[0].children[2].placeholder= 970;    
    }
   
}

//showSizeHeight
function showSizeHeight(size){
    var height = document.body.querySelectorAll("[id='showHeightProduct']"); 
    
    if(size < 80){
        alert("Atenção: Tamanho mínimo excedido!");
        height[0].children[2].placeholder= 80;   
    }
    else if (size >= 80 && size <= 590) {        
         height[0].children[2].placeholder= size;   
    } else {
         alert("Atenção: Tamanho máximo excedido!");
         height[0].children[2].placeholder= 590;    
    }
}




function enterModal(){
    document.getElementsByClassName('images')[0].style.display = "block";
}

function returnPage(){
    document.getElementsByClassName('images')[0].style.display = "none";
}

//zoomImage
function zoomImage(newSize){
  var product = document.getElementById('product');
  //product.style.transform= "scale(1."+newSize+",1."+newSize+")"

  product.children[0].style.transform= "scale(1."+newSize+",1."+newSize+")"
  //document.getElementById('product').children[0].style.transform= "scale(1.5,1.5)"

  product.children[1].style.transform= "scale(1."+newSize+",1."+newSize+")"
  //document.getElementById('product').children[0].style.transform= "scale(1.5,1.5)"
}

//toRotate
function toRotate(position){
    var product = document.getElementById('product')
    //back numero x 
    //front -180 x
    product.children[0].style.transform = "perspective(600px) rotateY("+ position +"deg)";
    product.children[1].style.transform = "perspective(600px) rotateY("+ position-180 +"deg)";      
}

// .display_paisaje:hover > .cardFront{
// 	transform: perspective( 600px ) rotateY( -180deg );
// }
// .display_paisaje:hover > .cardBack{
// 	transform: perspective( 600px ) rotateY( 0deg );
// }

var input = document.getElementById("inputFile");
var fReader = new FileReader();
fReader.readAsDataURL(input.files[0]);
fReader.onloadend = function(event){
    var img = document.getElementById("product");
    img.src = event.target.result;
}

//setBackColor
function setBackColorFront(id,newColor){
    var product = document.getElementById('product');

    if (id == "colorFront") {
        product.children[1].style.backgroundColor = newColor;
    } else {
        product.children[0].style.backgroundColor = newColor;
    }    
}
function selectBankImages(src){
    var newChosen = document.body.querySelectorAll('[name="chosen"]:checked')[0].value;

    if (newChosen == "Frente") {
        document.getElementById('product').children[1].style.backgroundImage = "url('"+src+"')"
    }
    else if (newChosen == "Verso") {
        document.getElementById('product').children[0].style.backgroundImage = "url('"+src+"')";
    }
    else{
        console.log("Erro sem tratamento");
    }
    
}

//API FileReader
function selectPhoto(){
    var photo = document.getElementById('openFile').files[0];

     var imageType = /image.*/;

     if(!photo.type.match(imageType))
         alert('Please select a Photo');
     else{
        var s = 'Name: ' + photo.name;
        s += '<br>Type: ' + photo.type;
        s += '<br>Size: ' + photo.size;
        document.getElementById('product').innerHTML = s;
        // Display image
        var img = document.createElement("img");
        img.file = photo;
        document.getElementById('product').appendChild(img);

        var reader = new FileReader();
        reader.onload = (function(aImg) {
          return function(e) { 
             aImg.src = e.target.result; 
          };
        })(img);

         reader.readAsDataURL(photo);
      }
               
}