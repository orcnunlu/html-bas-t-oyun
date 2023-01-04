let userScore = 0;
let cpuScore = 0;
let closeBtn;
const userScore_span = document.getElementById("kullanıcı-skor");
const cpuScore_span = document.getElementById("pc-skor");
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");
const taş_div = document.getElementById("taş");
const kağıt_div = document.getElementById("kağıt");
const makas_div = document.getElementById("makas");


function getCpuChoice() {
  const choices = ['taş', 'kağıt', 'makas'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">Kazandınız!</h1> <p>Rakibin seçimi <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'block';
}

function lose(userChoice, cpuChoice){
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-lose">Kaybettiniz :(</h1> <p>Rakibin seçimi <strong>${cpuChoice}</strong></p>`; 
  modal.style.display = 'block'
}

function draw(userChoice, cpuChoice){
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1>Berabere</h1> <p>İkinizin seçimide <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'block'
}


function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'taşmakas':
    case 'kağıttaş':
    case 'makaskağıt':
      win(userChoice, cpuChoice);
      break;
    case 'taşkağıt':
    case 'kağıtmakas':
    case 'makastaş':
      lose(userChoice, cpuChoice);
      break;
    case 'taştaş':
    case 'kağıtkağıt':
    case 'makasmakas':
      draw(userChoice, cpuChoice);
      break;
  }
}


function main() {
  taş_div.addEventListener('click', function() {
    play('taş');
  })
  
  kağıt_div.addEventListener('click', function() {
    play('kağıt');
  })
  
  makas_div.addEventListener('click', function() {
    play('makas');
  })
}


function clearModal(e){
  closeBtn = document.querySelector('.close');

  if(e.target == modal) {
    modal.style.display = "none"
  }
  else if(closeBtn){
    closeBtn.addEventListener('click', function(){
      modal.style.display = "none"
    });
  }
}


function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();