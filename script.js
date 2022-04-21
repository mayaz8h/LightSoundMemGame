// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
var lives = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var timeInt = 18000;

//var pattern = [3, 2, 4, 3, 5, 6, 1, 4];
//new random pattern
var pattern = [];

//var pattern = [3, 2, 2, 3, 4, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var id;



function show(a, b) {
  document.getElementById(a).classList.remove("hidden");
  document.getElementById(b).classList.add("hidden");

}

function stopShow(a, b) {
  document.getElementById(a).classList.add("hidden");
  document.getElementById(b).classList.remove("hidden");

}

function startGame(){
    //initialize game variables
    progress = 0;
    lives = 3;
    gamePlaying = true;
    turnover = false;
    for (var i = 0; i < 8; i++) {
      pattern[i] = Math.floor(Math.random() * 6) + 1;
    }
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}


function stopGame(){
    resetTime();
    gamePlaying = false;
    clueHoldTime = 1000;
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime = 1000 - progress * 90;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i])// set a timeout to play that clue    
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  turnover = false;
  resetTime();
  id = startTime();
}
const element = document.getElementById("time"); 
var turnover = false;

function startTime(){
  timeInt = 18000;
  id = setInterval(countdown, 1000);
  function countdown() {
    if (timeInt < 0) {
      resetTime();
      clearInterval(id);
      loseGame();
      
    } if (!gamePlaying) {
      resetTime();
    } else {
      element.innerHTML = "Time: <br/>"  + timeInt/1000;
      timeInt -= 1000;
    }
  }
  return id;
}



function resetTime() {
    clearInterval(id);
    element.innerHTML = "Time: <br/>"  + timeInt/1000;
  
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  resetTime();
} 

function winGame(){
  resetTime();
  stopGame();
  alert("Game Over. You Won!");
} 

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if (btn != pattern[guessCounter]) {
    lives -= 1;
    if (lives == 0) {
      loseGame();
    } else {
      turnover = true;
      clearInterval(id);
      playClueSequence();
    }
  } else {
    if (guessCounter != progress) {
      guessCounter += 1;
    } else if (progress != pattern.length - 1) {
      turnover = true;
      clearInterval(id);
      progress += 1;
      playClueSequence();
    } else {
      winGame();
    }
    
  }
}

// Sound Synthesis Functions
function playMyAudio(){
  var audio = new Audio("https://cdn.glitch.global/f09b674b-6854-4f96-bbfa-35b1d4059ff4/A_GentleDiminished_SP_28_01.wav?v=1650527130687");
  audio.currentTime=0;
	audio.play();
	console.log(audio.currentTime); // this is to check the currentTime in the console log
       
// the below setInterval is to check the currentTime is greater than 56 or not in every 1 second
	setInterval(function(){
		if(audio.currentTime>0.01){
			audio.pause();
				}
			},500);
		
  // if(audio.currentTime<0.1){
  //   audio.play();
  //   console.log(audio.currentTime);
  //   //g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  // } else {
  //   audio.stop();
  // }
}


var audioName = {
  1: "https://cdn.glitch.global/f09b674b-6854-4f96-bbfa-35b1d4059ff4/A_GentleDiminished_SP_28_01.wav?v=1650527130687",
  2: "https://cdn.glitch.global/f09b674b-6854-4f96-bbfa-35b1d4059ff4/150_F_WaterDropChords_01_667.wav?v=1650527128202",
  3: "https://cdn.glitch.global/f09b674b-6854-4f96-bbfa-35b1d4059ff4/100_Gm_SlowChords_02_SP_417.wav?v=1650532168313",
  4: "https://cdn.glitch.global/f09b674b-6854-4f96-bbfa-35b1d4059ff4/80_Dm_Chords_01_357.wav?v=1650532313370",
  5: "https://cdn.glitch.global/f09b674b-6854-4f96-bbfa-35b1d4059ff4/140_G%23m_StrawberryChord_01_561.wav?v=1650532401422",
  6: "https://cdn.glitch.global/f09b674b-6854-4f96-bbfa-35b1d4059ff4/F%23_Bbm7_LofiEP_02_823.wav?v=1650527155119"
}
function playTone(btn,len){ 
  var audio = new Audio(audioName[btn])
  audio.currentTime=0;
	audio.play();
	console.log(audio.currentTime); // this is to check the currentTime in the console log
       
// the below setInterval is to check the currentTime is greater than 56 or not in every 1 second
	setInterval(function(){
		if(audio.currentTime>0.01){
			audio.pause();
				}
			},len);
		
}
function startTone(btn){
  var audio = new Audio(audioName[btn])
  audio.currentTime=0;
	audio.play();
	console.log(audio.currentTime); // this is to check the currentTime in the console log

  setInterval(function(){
		if(audio.currentTime>0.01){
			audio.pause();
				}
			},420);
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

const freqMap1 = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 247
}
function playTone1(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone1(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone1(){
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