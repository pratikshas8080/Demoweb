var box = document.getElementById('display');
//clear button
function addtoscreen(x) {
    box.value += x;

    if (x == 'C') {
        box.value = "";
    }
}

//equals to button script
function answer() {
    x = box.value;
    x = eval(x);
    box.value = x;
}

//backspace Button
function backspace() {
    var number = box.value;
    var len = number.length - 1;
    var newnumber = number.substring(0, len);
    box.value = newnumber;
}
//power button
function power(y) {
    x = box.value;
    x = Math.pow(x, y);
    box.value = x;
}