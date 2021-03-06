function key_press(evt, div_id) {
    var id = div_id ? div_id : '';
    var c = evt ? evt.charCode : -1;
    var data;

    if (c == 61 || id == 'equals') {
        button_click('equals', 3);
        calculate();
        scroll_left();
        return true;
    }
    else if (c == 48 || id == 'zero')
        data = ['zero', '0'];
    else if (c == 49 || id == 'one')
        data = ['one', '1'];
    else if (c == 50 || id == 'two')
        data = ['two', '2'];
    else if (c == 51 || id == 'three')
        data = ['three', '3'];
    else if (c == 52 || id == 'four')
        data = ['four', '4'];
    else if (c == 53 || id == 'five')
        data = ['five', '5'];
    else if (c == 54 || id == 'six')
        data = ['six', '6'];
    else if (c == 55 || id == 'seven')
        data = ['seven', '7'];
    else if (c == 56 || id == 'eight')
        data = ['eight', '8'];
    else if (c == 57 || id == 'nine')
        data = ['nine', '9'];
    else if (c == 47 || id == 'divide')
        data = ['divide', ' / '];
    else if (c == 42 || c == 120 || id == 'multiply')
        data = ['multiply', ' * '];
    else if (c == 45 || id == 'subtract')
        data = ['subtract', ' - '];
    else if (c == 46 || id == 'dot')
        data = ['dot', '.'];
    else if (c == 43 || id == 'add')
        data = ['add', ' + '];
    else if (c == 40 || id == 'lparen')
        data = ['lparen', '('];
    else if (c == 41 || id == 'rparen')
        data = ['rparen', ')'];
    else if (c == 94 || id == 'pow')
        data = ['pow', '^'];
    else if (c == 33 || id == 'fact')
        data = ['fact', '!'];
    else if (c == 115 || id == 'sin')
        data = ['sin', 'sin('];
    else if (c == 99 || id == 'cos')
        data = ['cos', 'cos('];
    else if (c == 116 || id == 'tan')
        data = ['tan', 'tan('];
    else if (c == 83 || id == 'asin')
        data = ['asin', 'asin('];
    else if (c == 67 || id == 'acos')
        data = ['acos', 'acos('];
    else if (c == 84 || id == 'atan')
        data = ['atan', 'atan('];
    else if (c == 101 || id == 'e')
        data = ['e', 'e'];
    else if (c == 112 || id == 'pi')
        data = ['pi', 'pi'];
    else if (c == 114 || id == 'sqrt')
        data = ['sqrt', '^(1/2)'];
    else if (c == 37 || id == 'mod')
        data = ['mod', ' % '];
    else if (c == 124 || id == 'abs')
        data = ['abs', '|'];
    else if (c == 108 || id == 'log')
        data = ['log', 'log('];
    else if (c == 110 || id == 'ln')
        data = ['ln', 'ln('];
    else
        return true;

    button_click(data[0], 3);
    append_data(data[1]);
    scroll_right();
    return false;
}

function key_down(evt, div_id) {
    var id = div_id ? div_id : '';
    var k = evt ? evt.keyCode : -1;

    if (k == 27 || id == 'clr') { // escape
        button_click('clr', 1);
        if (id)
            setTimeout("button_click('clr', 2)", 150);
        reset();
    }
    else if (k == 8 || k == 46 || id == 'bksp') { // backspace/delete
        button_click('bksp', 1);
        if (id)
            setTimeout("button_click('bksp', 2)", 150);
        cut_data();
    }
    else if (k == 13) { // enter
        button_click('equals', 1);
        calculate();
        scroll_left();
    }
}

function key_up(evt) {
    var k = evt.keyCode;

    if (k == 27) // escape
        button_click('clr', 2);
    else if (k == 8 || k == 46) // backspace/delete
        button_click('bksp', 2);
    else if (k == 13) // enter
        button_click('equals', 2);
}
