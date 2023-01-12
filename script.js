const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');


let score = JSON.parse(localStorage.getItem('score')); //change type of score from str to number

if(!score){
    score = 0; // if there is no score set score to 0
}

scoreEl.innerText = `store: ${score}`; 

questionEl.innerText = `What is ${num1} multiply ${num2} ?`

const correctAnswer = num1 * num2;

formEl.addEventListener('submit', () => {   
    const userAnswer = +inputEl.value
    if(userAnswer === correctAnswer) {
        score++;
        updatelocalStorage()
    }else{
        score--
        updatelocalStorage()
    }
});

function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}