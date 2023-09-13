const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const umnoBtn = document.querySelector('.umno')
const delBtn = document.querySelector('.del')
const resultBtn = document.querySelector('.resultBtn')
const resultElment = document.querySelector('.result')
const clearBtn = document.querySelector('.clearBtn')

function printResult(result){
    if (result < 0){
        resultElment.style.color = '#b81414'
    } else{
        resultElment.style.color = 'white'
    }
    
    resultElment.textContent = result
}

resultBtn.onclick = function () {
    if (action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    }
    if (action === '-'){
        const min = Number(inputOne.value) - Number(inputTwo.value)
        printResult(min)
    }
    if (action === '*'){
        const umno = Number(inputOne.value) * Number(inputTwo.value)
        printResult(umno)
    }
    if (action === '/'){
        const del = Number(inputOne.value) / Number(inputTwo.value)
        printResult(del)
    }
}
plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
delBtn.onclick = function () {
    action = '/'
}
umnoBtn.onclick = function () {
    action = '*'
}

clearBtn.onclick = function() {
    inputOne.value = ' '
    inputTwo.value = ' '
    printResult(' ')
}