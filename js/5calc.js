window.onload = function() {
    document.onkeypress = key_press;
    document.onkeydown = key_down;
    document.onkeyup = key_up;
};

function key_press(evt, div_id) {
    var id = div_id ? div_id : '';
    var c = evt ? evt.charCode : -1;
    var k = evt ? evt.keyCode : -1;
    var handled = true;

    if (c == 48 || id == 'zero') { // 0
        button_click('zero', 3);
        append_data('0');
    }
    else if (c == 49 || id == 'one') { // 1
        button_click('one', 3);
        append_data('1');
    }
    else if (c == 50 || id == 'two') { // 2
        button_click('two', 3);
        append_data('2');
    }
    else if (c == 51 || id == 'three') { // 3
        button_click('three', 3);
        append_data('3');
    }
    else if (c == 52 || id == 'four') { // 4
        button_click('four', 3);
        append_data('4');
    }
    else if (c == 53 || id == 'five') { // 5
        button_click('five', 3);
        append_data('5');
    }
    else if (c == 54 || id == 'six') { // 6
        button_click('six', 3);
        append_data('6');
    }
    else if (c == 55 || id == 'seven') { // 7
        button_click('seven', 3);
        append_data('7');
    }
    else if (c == 56 || id == 'eight') { // 8
        button_click('eight', 3);
        append_data('8');
    }
    else if (c == 57 || id == 'nine') { // 9
        button_click('nine', 3);
        append_data('9');
    }
    else if (c == 47 || id == 'divide') { // /
        button_click('divide', 3);
        append_data('÷');
    }
    else if (c == 42 || id == 'multiply') { // *
        button_click('multiply', 3);
        append_data('×');
    }
    else if (c == 45 || id == 'subtract') { // -
        button_click('subtract', 3);
        append_data('-');
    }
    else if (c == 46 || id == 'dot') { // .
        button_click('dot', 3);
        append_data('.');
    }
    else if (c == 43 || id == 'add') { // +
        button_click('add', 3);
        append_data('+');
    }
    else if (c == 94 || id == 'power') { // ^
        button_click('power', 3);
        append_data('^');
    }
    else if (c == 40 || id == 'lparen') { // (
        button_click('lparen', 3);
        append_data('(');
    }
    else if (c == 41 || id == 'rparen') { // ()
        button_click('rparen', 3);
        append_data(')');
    }
    else if (c == 61 || id == 'equals') { // equals
        button_click('equals', 3);
        calculate();
    }
    else {
        handled = false;
    }

    if (handled) {
        fix_scroll();
        return false;
    }
}

function key_down(evt, div_id) {
    var id = div_id ? div_id : '';
    var k = evt ? evt.keyCode : -1;
    var handled = true;

    if (k == 27 || id == 'clr') { // escape
        button_click('clr', 1);
    }
    else if (k == 8 || id == 'bksp') { // backspace
        button_click('bksp', 1);
        cut_data();
    }
    else if (k == 13) { // enter
        button_click('equals', 1);
    }
    else {
        handled = false;
    }

    if (handled) {
        fix_scroll();
        return false;
    }
}

function key_up(evt, div_id) {
    var id = div_id ? div_id : '';
    var k = evt ? evt.keyCode : -1;
    var handled = true;

    if (k == 27 || id == 'clr') { // escape
        button_click('clr', 2);
        reset();
    }
    else if (k == 8 || id == 'bksp') { // backspace
        button_click('bksp', 2);
    }
    else if (k == 13) { // enter
        button_click('equals', 2);
        calculate();
    }
    else {
        handled = false;
    }

    if (handled) {
        fix_scroll();
        return false;
    }
}

function sleep(millis) {
    var date = new Date();
    var curDate = date;
    while ((curDate - date) < millis) {
        curDate = new Date();
    }
}

function calculate() {
    var disp = document.getElementById('display');
    var error = document.getElementById('error');
    var result = __parse(disp.innerHTML);
    if (result.err > 0) {
        error.innerHTML = 'Malformed expression';
    }
    else {
        error.innerHTML = '';
        disp.innerHTML = result.res;
    }
}

function reset() {
    document.getElementById('display').innerHTML = '0';
    document.getElementById('error').innerHTML = '';
}

function fix_scroll() {
    var disp = document.getElementById('display');
    disp.scrollLeft = disp.scrollWidth;
}

function append_data(str) {
    var disp = document.getElementById('display');
    if (disp.innerHTML == '0')
        disp.innerHTML = str;
    else
        disp.innerHTML += str;
}

function cut_data() {
    var disp = document.getElementById('display');
    disp.innerHTML = disp.innerHTML.substring(0, disp.innerHTML.length - 1);
    if (disp.innerHTML == '')
        disp.innerHTML = '0';
}

function button_click(button_id, mode) {
    var btn = document.getElementById(button_id);

    switch (mode) {
        case 1: // button down
            btn.style.backgroundColor = '#000000';
            btn.style.color = '#ffffff';
            break;
        case 2: // button up
            btn.style.backgroundColor = '#8c8c8c';
            btn.style.color = '#000000';
            break;
        case 3: // button down, then up
            button_click(button_id, 1);
            setTimeout("button_click('" + button_id + "', 2)", 150);
            break;
    }
}
