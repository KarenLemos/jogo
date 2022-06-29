var personagem1, personagem1Imagem, personagem1AndandoLadoEsquerdo, personagem1AndandoLadoDireito;
var personagem2, personagem2Imagem, personagem2AndandoLadoEsquerdo, personagem2AndandoLadoDireito;
var backgroundImage;
var armaImage, arma;
var plataforma;
var soloInvisivel;

function preload(){
  personagem1Imagem = loadImage("imagens/personagem1.png");
  personagem1AndandoLadoEsquerdo = loadAnimation("imagens/personagem1_andando.png", "imagens/personagem1_lado.png");
  personagem1AndandoLadoDireito = loadAnimation("imagens/personagem1_andando_lado_direito.png", "imagens/personagem1_lado_direito.png");

  personagem2Imagem = loadImage("imagens/personagem2.png");
  personagem2AndandoLadoEsquerdo = loadAnimation("imagens/personagem2_lado_esquerdo.png", "imagens/personagem2_andando_lado_esquerdo.png");
  personagem2AndandoLadoDireito = loadAnimation("imagens/personagem2.png", "imagens/personagem2_andando.png");

  backgroundImage = loadImage("imagens/bg1.png");

  armaImage = loadImage("imagens/arma.png");
}

function setup() {
  createCanvas(600,400);

  personagem1 = createSprite(200,313,20,20);
  personagem1.addAnimation("personagem1_parado",personagem1Imagem);  
  personagem1.addAnimation("personagem1_andando_esquerdo", personagem1AndandoLadoEsquerdo);
  personagem1.addAnimation("personagem1_andando_direito", personagem1AndandoLadoDireito);
  personagem1.scale = 0.05;  

  personagem2 = createSprite(50,320,20,20);
  personagem2.addAnimation("personagem2_parado",personagem2Imagem);
  personagem2.addAnimation("personagem2_andando_esquerdo", personagem2AndandoLadoEsquerdo);
  personagem2.addAnimation("personagem2_andando_direito", personagem2AndandoLadoDireito);
  personagem2.scale = 0.04; 
  
  arma = createSprite(500,0,20,20);
  arma.addImage(armaImage);
  arma.scale = 0.08;
  arma.velocityY += 2;
  arma.debug = false;
  arma.setCollider("circle",0,0,200);

  plataforma = createSprite(400,270,200,20);
  plataforma.shapeColor = "black";

  soloInvisivel = createSprite(300,375,600,10);
  soloInvisivel.visible = false;
}

function draw() {
  background(backgroundImage);

  personagem1.changeAnimation("personagem1_parado",personagem1Imagem);
  personagem2.changeAnimation("personagem2_parado",personagem2Imagem);

  if(keyDown("left")){
    personagem1.x -= 2;
    personagem1.changeAnimation("personagem1_andando_esquerdo", personagem1AndandoLadoEsquerdo);
  }

  if(keyDown("right")){
    personagem1.x += 2;
    personagem1.changeAnimation("personagem1_andando_direito", personagem1AndandoLadoDireito);
  }

  if(keyDown("up")){
    personagem1.y -= 10;
  }

  personagem1.y += 2;

  if(keyDown("a")){
    personagem2.x -= 2;
    personagem2.changeAnimation("personagem2_andando_esquerdo", personagem2AndandoLadoEsquerdo);
  }

  if(keyDown("d")){
    personagem2.x += 2;
    personagem2.changeAnimation("personagem2_andando_direito", personagem2AndandoLadoDireito);
  }

  personagem1.collide(soloInvisivel);
  personagem2.collide(soloInvisivel);
  arma.collide(soloInvisivel);
  
  drawSprites();
}
