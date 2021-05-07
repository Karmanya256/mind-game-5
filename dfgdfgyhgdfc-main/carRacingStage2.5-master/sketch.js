var canvas, backgroundImage;
var smiley,smileyImg,desk,deskImg;
var gameState = 0;
var playerCount;
var allPlayers;


function preload(){
smileyImg = loadImage("images/smiley.png");
deskImg = loadImage("images/desk.png");

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  smiley = createSprite(20,50,100,100);
  desk = createSprite(700,700,100,100);
  smiley.addImage("smiley",smileyImg);
  desk.addImage("desk",deskImg);
}



}
function quiz(questions,container,results,submit)
{
  function showQ(questions,container){

  }
  function showR(questions,container,results){

  }
  showQ(questions,container);
  submit.onclick=function(){
    showR(questions,container,results);
  }
}
var  Questions=[
  {
    question:"1.What happened in 1066?",
    answers:{
      a:"WW2",
      b:"The discovery of America",
      c:"The Battle of Hastings",
      d:"Absolutely nothing"
    },
    correctOption:'c'

  },
  {
    question:"2.Which of these was NOT a Roman leader?",
    answers:{
      a:"Julius Caesar",
      b:"Caesar Salad",
      c:"Augustus",
      d:"Nero"
    },
    correctOption:'b'
  },
  {
    question:"3.Where was the Titanic headed to before it sank?",
    answers:{
      a:"The USA",
      b:"Japan",
      c:"Round in a big circle for no reason",
      d:"Nobody knows!"
    },
    correctOption:'a'
  },
  {
    question:"4.Which Roman emperor built a gigantic wall across the North East of England in 122 AD?
    ",
    answers:{
      a:"Augustus",
      b:"Hadrian",
      c:"Nero",
      d:"Caesar"
    },
    correctOption:'b'
  },
  {
    question:"5.Who was the THIRD man to walk on the moon?",
    answers:{
      a:"Neil Armstrong",
      b:"Mark Hamill",
      c:"Charles 'Pete' Conrad",
      d:"Astronaut Audrey"
    },
    correctOption:'c'
  },
  {
    question:"6.Where was the explorer Captain James Cook from?",
    answers:{
      a:"England",
      b:"Australia",
      c:"Germany",
      d:"Poland"
    },
    correctOption:'a'
  },
  {
    question:"7.What colour was the Statue of Liberty originally",
    answers:{
      a:"White",
      b:"Green",
      c:"Copper",
      d:"Yellow"
    },
    correctOption:'b'
  },
  {
    question:"8.Which war started in 1939 and ended in 1945?",
    answers:{
      a:"World War I",
      b:"The Vietnam War",
      c:"World War II",
      d:"The Falklands War"
    },
    correctOption:'c'
  },
  {
    question:"9.Who was the first President of the United States of America?",
    answers:{
      a:"George Bush",
      b:"George W. Bush",
      c:"George Washington",
      d:"Ronald Reagan"
    },
    correctOption:'c'
  },
  {
    question:"10.What is the biggest ocean in the world?",
    answers:{
      a:"Atlantic Ocean",
      b:"Indian Ocean",
      c:"Arctic Ocean",
      d:"Pacific Ocean"
    },
    correctOption:'d'
  },
]
