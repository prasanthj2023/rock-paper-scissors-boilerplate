var paper_btn = document.getElementById('paper');
var rock_btn = document.getElementById('rock');
var scissor_btn = document.getElementById('scissors');
var play_btn = document.getElementById('play-btn');

var insert_img = document.getElementById('image-area');
var insert_img_one = document.getElementById('image-area-one');

var updatePlayer = document.getElementById('player');
var updateComputer = document.getElementById('computer');

var input_computer;
var input_player;
var player_score = 0;
var computer_score = 0;

paper_btn.addEventListener('click', function(){
    insert_img.innerHTML = `<img class="insert-img" src="./assets/paper-hand.png">`;
    input_player = 'paper';
    random_img();
    score();
    updateComputer.textContent = computer_score;
    updatePlayer.textContent = player_score;
    renderScore();
});

rock_btn.addEventListener('click', function(){
    insert_img.innerHTML = `<img class="insert-img" src="./assets/rock-hand.png">`;
    input_player = 'rock';
    random_img();
    score();
    updateComputer.textContent = computer_score;
    updatePlayer.textContent = player_score;
    renderScore();
});

scissor_btn.addEventListener('click', function(){
    insert_img.innerHTML = `<img class="insert-img" src="./assets/scissors-hand.png">`;
    input_player = 'scissors';
    random_img();
    score();
    updateComputer.textContent = computer_score;
    updatePlayer.textContent = player_score;
    renderScore();
});

function random_img(){
    var list_img = ['./assets/paper-hand.png', './assets/rock-hand.png', './assets/scissors-hand.png'];
    var list_item = ['paper', 'rock', 'scissors'];
    var ran_num = Math.floor(Math.random()*3);
    insert_img_one.innerHTML = `<img class="insert-img" src="${list_img[ran_num]}">`;
    input_computer = list_item[ran_num];
};

function score(){
    if (input_player == 'paper'){
        if(input_computer == 'scissors'){
            computer_score++
        }else if(input_computer == 'rock'){
            player_score++;
        }
    }else if(input_player == 'rock'){
        if(input_computer == 'scissors'){
            player_score++;
        }else if(input_computer == 'paper'){
            computer_score++;
        }
    }else if(input_player == 'scissors'){
        if(input_computer == 'paper'){
            player_score++;
        }else if(input_computer == 'rock'){
            computer_score++;
        }
    }
};

function renderScore(){
    if(player_score>=5 || computer_score>=5){
        paper_btn.style.display = 'none';
        rock_btn.style.display = 'none';
        scissor_btn.style.display = 'none';
        play_btn.style.display = 'inherit';
        if(player_score > computer_score){
            document.getElementById('won').textContent = `Player(you) Won!!!`
        }else{
            document.getElementById('won').textContent = `Computer won!!!`
        }
    };
}

play_btn.addEventListener('click', function(){
    location.reload();
})