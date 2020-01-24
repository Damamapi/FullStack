// Buffering items
let buttons = document.querySelectorAll('.calc-btn')
let resultText = document.getElementById('result')

buttons.forEach(element => {
    element.addEventListener('click', function(event) {
        console.log(retInput(event.target))
        parseInput(retInput(event.target))
    })
});

let lastPressed;
let op = '!!'
let num1 = 0, num2 = 0
function parseInput(inp) {
    let text = resultText.innerHTML
    switch(inp) {
        case '0':
            if(text != '0') text += '0';
            break
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(text === '0' || lastPressed === '=') text = inp;
            else text += inp
            break;
        case '*':
        case '/':
        case '+':
        case '-':
            num1 = parseInt(text)
            text = '0'
            op = inp
            console.log(op)
            break
        case '=':
            console.log(op != '!!')
            if(op != '!!') {
                num2 = parseInt(text)
                text = calculate(num1, num2, op)
                console.log(text)
            }
            op = '!!'
            break
        case 'C':
            text = '0'
            num1 = 0
            num2 = 0
            op = '!!'
            break
        default:
            console.log('unexpected')
    }
    resultText.innerHTML = text;
    lastPressed = inp
}

function calculate(num1, num2, op) {
    let r = 0
    switch(op) {
        case '+':
            r = num1 + num2;
            break   
        case '-':
            r = num1 - num2;
            break   
        case '/':
            r = num1 / num2;
            break   
        case '*':
            r = num1 * num2;
            break   
    }
    return r
}

function retInput(item) {
    return item.innerHTML
}