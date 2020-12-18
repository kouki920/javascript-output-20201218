'use strict'

const startButton = document.getElementById('start_button');
const stopButton = document.getElementById('stop_button');
const resetButton = document.getElementById('reset_button');
const submitButton = document.getElementById('submit_button');
const addArrayArea = document.getElementById('add_array');
const textArea = document.getElementById('text_area');

let prefectures = [
  'ハンバーグ',
  '親子丼',
  'カレー',
  'うどん',
  '麻婆豆腐',
  'シチュー',
  'パスタ',
  '餃子',
  'お鍋',
  '純豆腐',
  'オムライス',
  '青椒肉絲',
  '刺身',
  '焼肉',
  '春巻き'
];
let prefectureIndex = 0;
let timeoutId = 0;

function randomText(){
  let prefecture = Math.floor(Math.random()* prefectures.length);
  textArea.textContent = prefectures[prefecture];
}

function roulette(){
  // randomText();
   /*let間違い*/ timeoutId = setInterval(()=>{
    randomText();
  },50);
}

function deleteArray(){
  prefectures.length = 0;
}

function addArray(){
  let addArrayText = addArrayArea.value;
  prefectures.push(addArrayText);
}

function clr(){
  addArrayArea.value = '';
}

function clrArray(){
  textArea.textContent = '';
  // textArea.classList.add("clrarray");
}
// function resetArray(){
//   textArea.classList.remove("clrarray");
// }

startButton.addEventListener('click',()=>{
  // console.log(randomText()) ;
  startButton.disabled = true;
  roulette();
})

stopButton.addEventListener('click',() => {
  clearInterval(timeoutId);
  startButton.disabled = false;
})

resetButton.addEventListener('click',()=>{
  deleteArray();
  clrArray();
})

submitButton.addEventListener('click',()=>{
  addArray();
  clr();
  // resetArray()
})


