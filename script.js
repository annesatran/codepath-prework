// global constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

// global variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakeCounter = 0;

function startGame(){
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  mistakeCounter = 0;
  generatePattern();
  // show Stop button and hide Start button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime -= 90;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game over. You won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter==progress){
      if(progress==7){
        winGame();
      }else {
        progress += 1;
        playClueSequence();
      }
    }else {
      guessCounter += 1
    }
  }else if(mistakeCounter < 2){
    mistakeCounter += 1;
    alert("Strike "+mistakeCounter+"! Try the sequence again from the beginning.");
    guessCounter = 0;
  }else{
    loseGame();
  }
}

function generatePattern(){
  pattern = []
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random()*5) + 1)
  };
  console.log(pattern);
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 349.2,
  5: 392
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)