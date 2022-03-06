
//Criando variáveis
var caminho;
  var pessoa;
var dinheiro;
  var diamantes;
var joias;
  var espada;
var imgcaminho;
  var imgpessoa;
var imgdinheiro;
  var imgdiamante;
var imgjoias;
  var imgespada;
var tesouros = 0;
  var dinheiroG;
var diamanteG;
  var joiasG;
var espadaG;
  var imgfim;


//ESTADOS DE JOGO
var estado=1;

//Salvando imagens
function preload(){
  imgcaminho = loadImage("Road.png");
    imgpessoa = loadAnimation("Runner-1.png","Runner-2.png");
  imgdinheiro = loadImage("cash.png");
    imgdiamante = loadImage("diamonds.png");
  imgjoias = loadImage("jwell.png");
    imgespada = loadImage("sword.png");
  imgfim =loadAnimation("fimdeJogo.png");
}

function setup(){
  
  createCanvas(400,600);

// Movendo fundo
caminho=createSprite(200,200);
caminho.addImage(imgcaminho);
caminho.velocityY = 4;


//Menino
pessoa = createSprite(70,580,20,20);
pessoa.addAnimation("correndo",imgpessoa);
pessoa.addAnimation("perder",imgfim);
pessoa.changeAnimation("correndo");
pessoa.scale=0.08;
pessoa.visible=true;





dinheiroG=new Group();
diamanteG=new Group();
joiasG=new Group();
espadaG=new Group();

}

function draw() {

  if(estado==1){
  background(0);
  pessoa.x = World.mouseX;
  
  edges= createEdgeSprites();
  pessoa.collide(edges);
  
  //Reniaciando o fundo
  if(caminho.y > 400 ){
    caminho.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();

    if (dinheiroG.isTouching(pessoa)) {
      dinheiroG.destroyEach();
      tesouros=tesouros+50;
    }
    else if (diamanteG.isTouching(pessoa)) {
      diamanteG.destroyEach();
      tesouros=tesouros+100;
      
    }else if(joiasG.isTouching(pessoa)) {
      joiasG.destroyEach();

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
      tesouros= tesouros + 150;
      
    }else{
      if(espadaG.isTouching(pessoa)) {
        estado=2;
        
        // boy.addAnimation(end);
        pessoa.changeAnimation("perder");
        // boy.addAnimation("SahilRunning");
        // boy.addAnimation(SahilRunning,endImg);

        pessoa.x=200;
        pessoa.y=300;
        pessoa.scale=0.5

        // cashG.destroyEach;
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        
        dinheiroG.destroyEach();
        diamanteG.destroyEach();
        joiasG.destroyEach();
        espadaG.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        dinheiroG.setVelocityYEach(0);
        diamanteG.setVelocityYEach(0);
        joiasG.setVelocityYEach(0);
        espadaG.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ tesouros,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var dinheiro = createSprite(Math.round(random(50, 350),40, 10, 10));
  dinheiro.addImage(imgdinheiro);
  dinheiro.scale=0.12;
  dinheiro.velocityY = 3;
  dinheiro.lifetime = 150;
  dinheiroG.add(dinheiro);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamante = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamante.addImage(imgdiamante);
  diamante.scale=0.03;
  diamante.velocityY = 3;
  diamante.lifetime = 150;
  diamanteG.add(diamante);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var joias = createSprite(Math.round(random(50, 350),40, 10, 10));
  joias.addImage(imgjoias);
  joias.scale=0.13;
  joias.velocityY = 3;
  joias.lifetime = 150;
  joiasG.add(joias);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var espada = createSprite(Math.round(random(50, 350),40, 10, 10));
  espada.addImage(imgespada);
  espada.scale=0.1;
  espada.velocityY = 3;
  espada.lifetime = 150;
  espadaG.add(espada);
  }
}
