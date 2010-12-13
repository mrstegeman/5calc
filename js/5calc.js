window.onload = function() {
    document.onkeypress = key_press;
    document.onkeydown = key_down;
    document.onkeyup = key_up;
    apply_settings(get_cookie());
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

function show_settings() {
    document.getElementById('settings').style.display = 'block';
    apply_settings_in_window(get_cookie());
}

function cancel_settings() {
    document.getElementById('settings').style.display = 'none';
}

function save_settings() {
    document.getElementById('settings').style.display = 'none';
    var colors = {
        bg: document.getElementById('bgcolor').value,
        shadow: document.getElementById('shadowcolor').value,
        calc: document.getElementById('calccolor').value,
        disp: document.getElementById('dispcolor').value,
        dispfont: document.getElementById('dispfontcolor').value,
        errorfont: document.getElementById('errorfontcolor').value,
        btn: document.getElementById('btncolor').value,
        btnfont: document.getElementById('btnfontcolor').value,
    };
    set_cookie(colors);
    apply_settings(colors);
}

function apply_settings(colors) {
    document.body.style.backgroundColor = '#' + colors.bg;

    if (document.body.style.MozBoxShadow == '') {
        document.getElementById('navbar').style.MozBoxShadow = '0px 0px 10px #' + colors.shadow;
        document.getElementById('inner').style.MozBoxShadow = '0px 0px 10px #' + colors.shadow;
        document.getElementById('settings').style.MozBoxShadow = '0px 0px 10px #' + colors.shadow;
    }
    else if (document.body.style.WebkitBoxShadow == '') {
        document.getElementById('navbar').style.WebkitBoxShadow = '0px 0px 10px #' + colors.shadow;
        document.getElementById('inner').style.WebkitBoxShadow = '0px 0px 10px #' + colors.shadow;
        document.getElementById('settings').style.WebkitBoxShadow = '0px 0px 10px #' + colors.shadow;
    }
    else if (document.body.style.boxShadow == '') {
        document.getElementById('navbar').style.boxShadow = '0px 0px 10px #' + colors.shadow;
        document.getElementById('inner').style.boxShadow = '0px 0px 10px #' + colors.shadow;
        document.getElementById('settings').style.boxShadow = '0px 0px 10px #' + colors.shadow;
    }

    document.getElementById('inner').style.backgroundColor = '#' + colors.calc;
    document.getElementById('display').style.backgroundColor = '#' + colors.disp;
    document.getElementById('display').style.color = '#' + colors.dispfont;
    document.getElementById('error').style.color = '#' + colors.errorfont;

    document.getElementById('navbar').style.backgroundColor = '#' + colors.btn;
    document.getElementById('navbar').style.color = '#' + colors.btnfont;
    document.getElementById('settings').style.backgroundColor = '#' + colors.btn;
    document.getElementById('settings').style.color = '#' + colors.btnfont;
    var btns = document.getElementsByClassName('button');
    for (var x = 0; x < btns.length; x++) {
        btns[x].style.backgroundColor = '#' + colors.btn;
        btns[x].style.color = '#' + colors.btnfont;
    }
}

function apply_settings_in_window(colors) {
    var defaults = {
        bg: 'E0E0E0',
        shadow: '000000',
        calc: 'C0C0C0',
        disp: 'FFFFFF',
        dispfont: '000000',
        errorfont: 'FF0000',
        btn: '8C8C8C',
        btnfont: '000000',
    };

    if (!colors)
        colors = defaults;

    var bg = document.getElementById('bgcolor');
    var shadow = document.getElementById('shadowcolor');
    var calc = document.getElementById('calccolor');
    var disp = document.getElementById('dispcolor');
    var dispfont = document.getElementById('dispfontcolor');
    var errorfont = document.getElementById('errorfontcolor');
    var btn = document.getElementById('btncolor');
    var btnfont = document.getElementById('btnfontcolor');

    bg.value = colors.bg;
    bg.style.backgroundColor = '#' + colors.bg;
    bg.style.color = '#' + inverse(colors.bg);

    shadow.value = colors.shadow;
    shadow.style.backgroundColor = '#' + colors.shadow;
    shadow.style.color = '#' + inverse(colors.shadow);

    calc.value = colors.calc;
    calc.style.backgroundColor = '#' + colors.calc;
    calc.style.color = '#' + inverse(colors.calc);

    disp.value = colors.disp;
    disp.style.backgroundColor = '#' + colors.disp;
    disp.style.color = '#' + inverse(colors.disp);

    dispfont.value = colors.dispfont;
    dispfont.style.backgroundColor = '#' + colors.dispfont;
    dispfont.style.color = '#' + inverse(colors.dispfont);

    errorfont.value = colors.errorfont;
    errorfont.style.backgroundColor = '#' + colors.errorfont;
    errorfont.style.color = '#' + inverse(colors.errorfont);

    btn.value = colors.btn;
    btn.style.backgroundColor = '#' + colors.btn;
    btn.style.color = '#' + inverse(colors.btn);

    btnfont.value = colors.btnfont;
    btnfont.style.backgroundColor = '#' + colors.btnfont;
    btnfont.style.color = '#' + inverse(colors.btnfont);
}

function inverse(c) {
    if (c.length != 6 || ! c.match(/^[0-9a-fA-F]{6}$/))
        return '';

    var r = 255 - parseInt(c.slice(0, 2), 16);
    var g = 255 - parseInt(c.slice(2, 4), 16);
    var b = 255 - parseInt(c.slice(4, 6), 16);
    return r.toString(16) + g.toString(16) + b.toString(16);
}

function set_cookie(colors) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 3650);
    document.cookie =
        "colors=bg:" + colors.bg +
        "-shadow:" + colors.shadow +
        "-calc:" + colors.calc +
        "-disp:" + colors.disp +
        "-dispfont:" + colors.dispfont +
        "-errorfont:" + colors.errorfont +
        "-btn:" + colors.btn +
        "-btnfont:" + colors.btnfont +
        "; expires=" + exdate.toUTCString();
}

function get_cookie() {
    var ret = {
        bg: 'E0E0E0',
        shadow: '000000',
        calc: 'C0C0C0',
        disp: 'FFFFFF',
        dispfont: '000000',
        errorfont: 'FF0000',
        btn: '8C8C8C',
        btnfont: '000000',
    };

    if (document.cookie.length > 0) {
        var cookies = document.cookie.split(';');
        var this_cookie;

        for (var i = 0; i < cookies.length; i++) {
            this_cookie = cookies[i].split('=');
            if (this_cookie.length == 2 && this_cookie[0] == 'colors') {
                var colors = this_cookie[1].split('-');

                var this_color;
                for (var j = 0; j < colors.length; j++) {
                    this_color = colors[j].split(':');
                    if (this_color.length == 2 &&
                            this_color[1].length == 6 &&
                            this_color[1].match(/^[0-9a-fA-F]{6}$/)) {

                        switch (this_color[0]) {
                            case 'bg':
                                ret.bg = this_color[1];
                                break;
                            case 'shadow':
                                ret.shadow = this_color[1];
                                break;
                            case 'calc':
                                ret.calc = this_color[1];
                                break;
                            case 'disp':
                                ret.disp = this_color[1];
                                break;
                            case 'dispfont':
                                ret.dispfont = this_color[1];
                                break;
                            case 'errorfont':
                                ret.errorfont = this_color[1];
                                break;
                            case 'btn':
                                ret.btn = this_color[1];
                                break;
                            case 'btnfont':
                                ret.btnfont = this_color[1];
                                break;
                        }
                    }
                }
            }
        }
    }
    return ret;
}
