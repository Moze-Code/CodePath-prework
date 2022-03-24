//Game logic code


// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 2, 4, 5, 3, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime2= 1000; //used to speed the game on each turn


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    randomPattern();
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 280.6,
  2: 339.6,
  3: 392,
  4: 466.2,
  5: 480.1
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

//function for lighting or clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//function for playing a single cue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime2);
    setTimeout(clearButton,clueHoldTime2,btn);
  }
}

function randomPattern(a,b){
 //sort the array pattern to mimic randomness
  return pattern.sort((a,b) => 0.5 - Math.random());
  
  }



//function that controls cue playing sequence
function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay -= clueHoldTime2 * 0.2; 
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!!.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{  
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
  }
}
  
//My Incorrect logic attempt
/*if(pattern[guessCounter] != btn) {
    loseGame();
  }else if((guessCounter == progress) && (progress == pattern.length -1)) {
    winGame;
  
  }else if(guessCounter == progress) {

	  if(progress != pattern.length-1){
    		progress++;
    		playClueSequence();
    }
  guessCounter++;
  }
}*/

      
  