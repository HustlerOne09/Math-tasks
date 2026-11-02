const numbersElement = document.getElementById('nums_pow');
const answerInput = document.getElementById('answer_pow');
const resultElement = document.getElementById('result_pow');
const checkButton = document.getElementById('check_pow');
const againButton = document.getElementById('again');

let firstNumber;
let secondNumber;

function createNewTask() {
    firstNumber = Math.floor(Math.random() * 10) + 1;
    secondNumber = Math.floor(Math.random() * 5) + 1;

    numbersElement.textContent = `${firstNumber} ** ${secondNumber} =`;
    answerInput.value = '';
}

function checkAnswer() {
    const userAnswer = Number(answerInput.value);
    const correctAnswer = Math.pow(firstNumber, secondNumber);
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
        resultElement.textContent = 'Ответ верный';
    } else {
        resultElement.textContent = 'Ответ неверный';
    }
}

checkButton.addEventListener('click', checkAnswer);
againButton.addEventListener('click', createNewTask);

answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

createNewTask();