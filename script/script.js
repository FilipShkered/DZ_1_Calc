var op;

function calculete() {
    var result;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2) {
                result = num1 / num2;
            } else {
                result = 'безкінечність';
            }
            break;
        default:
            result = 'виберіть операцію';
    }
    document.getElementById("result").innerHTML = result;


}

function root(num1) {
    var rootResult;
    var num1 = Number(document.getElementById("num1").value);
    var answer = Math.sqrt(num1);
    rootResult = answer;
    document.getElementById("rootResult").innerHTML ='root: ' +  rootResult;
}

function power(num1) {
    var powerResult;
    var num1 = Number(document.getElementById("num1").value);
    var answer = eval(num1 * num1);
    powerResult = answer;
    document.getElementById("powerResult").innerHTML = 'power: ' + powerResult;
}