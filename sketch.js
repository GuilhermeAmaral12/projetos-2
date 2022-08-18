
//crie as variáveis
var rato,fundo, gato;
var rato1, rato2, gato1, gato2;


function preload() {
    //carregue as imagens aqui
    fundo = loadImage("jardim.png");
rato1=loadAnimation('rato4.png')
    //carregue as animações
    rato2=loadAnimation('rato2.png','rato3.png')
    //rato
  

    //animações do gato
gato1=loadAnimation('cat2.png','cat3.png')
gato2=loadAnimation('cat4.png')
}

function setup(){
    createCanvas(1000,800);
    //crie a sprite de gato
  gato=createSprite(800,700)
    //adicione as animações
    gato.addAnimation('andar',gato1)
    gato.addAnimation('provocar',gato2)
    //defina a escala
gato.scale=0.2
    //defina a velocidade
gato.velocityX=-3

    //crie a sprite do rato
rato=createSprite(200,700)
    //adicione as animações
rato.addAnimation('andar',rato1)
rato.addAnimation('provocar',rato2)
    //defina a escala
rato.scale=0.2
    //defina a velocidade
rato.velocityX=3

}

function draw() {

    background(fundo);

    //Programe para o computador verificar se o gato e o rato colidiram, se sim, instrua o pc para zerar a velocidade do gato e do rato e alterar suas animações.
if((gato.x-rato.x)<95){
    rato.velocityX=0
    gato.velocityX=0
    rato.changeAnimation('provocar')
    gato.changeAnimation('provocar')
}


    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

}
