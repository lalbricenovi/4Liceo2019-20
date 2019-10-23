// let t = 0;//time of the 

// const crearAnimal= function(posX, posY, velX, velY){
//     return {
//         posX,
//         posY,
//         velX,
//         velY,
//         move:function(){

//         }
//         moveTo: function(x, y){
//             this.posX = x;
//             this.posT = y;
//         }
//     }
// }

// Los archivos de sonido se consiguieron en la página https://freesound.org/

var vaca = new Audio('cow.wav');
var perro = new Audio('dog.wav');
var gato = new Audio('meow.wav')

function sonidoVaca(){
    vaca.play();
}
function sonidoPerro(){
    perro.play();
}
function sonidoGato(){
    gato.play();
}
