const inputName = document.getElementById('name')
const inputNumber = document.getElementById('questions-number')
const easyDifficulty = document.getElementById('easy')
const mediumDifficulty = document.getElementById('medium')
const hardDifficulty = document.getElementById('hard')
const form = document.getElementById('main-form')

let difficulty
let ptMultiplier

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const numberOfQuestions = inputNumber.value
    const userName = inputName.value

    if (easyDifficulty.checked) {
        difficulty = 1
        ptMultiplier = 10
    } else if (mediumDifficulty.checked) {
        difficulty = 2
        ptMultiplier = 15
    } else if (hardDifficulty.checked) {
        difficulty = 3
        ptMultiplier = 20
    }

    localStorage.setItem('difficulty', difficulty)
    localStorage.setItem('ptMultiplier', ptMultiplier)
    localStorage.setItem('numberOfQuestions', numberOfQuestions)
    localStorage.setItem('userName', userName)
    
    window.location.href = './quiz.html'
})