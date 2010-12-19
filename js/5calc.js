window.onload = function() {
    apply_settings(get_storage());
    document.onkeypress = key_press;
    document.onkeydown = key_down;
    document.onkeyup = key_up;
};

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
        data = ['divide', '÷'];
    else if (c == 42 || id == 'multiply')
        data = ['multiply', '×'];
    else if (c == 45 || id == 'subtract')
        data = ['subtract', '-'];
    else if (c == 46 || id == 'dot')
        data = ['dot', '.'];
    else if (c == 43 || id == 'add')
        data = ['add', '+'];
    else if (c == 94 || id == 'power')
        data = ['power', '^'];
    else if (c == 40 || id == 'lparen')
        data = ['lparen', '('];
    else if (c == 41 || id == 'rparen')
        data = ['rparen', ')'];
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
    else if (k == 8 || id == 'bksp') { // backspace
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
    else if (k == 8) // backspace
        button_click('bksp', 2);
    else if (k == 13) // enter
        button_click('equals', 2);
}

function calculate() {
    var disp = document.getElementById('display');
    var error = document.getElementById('error');
    var result = __parse(disp.innerHTML);

    if (result.err > 0)
        error.innerHTML = 'Malformed expression';
    else {
        error.innerHTML = '';
        disp.innerHTML = result.res;
    }
}

function reset() {
    document.getElementById('display').innerHTML = '0';
    document.getElementById('error').innerHTML = '';
}

function scroll_right() {
    var disp = document.getElementById('display');
    disp.scrollLeft = disp.scrollWidth;
}

function scroll_left() {
    document.getElementById('display').scrollLeft = 0;
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
    var colors = get_storage();

    switch (mode) {
        case 1: // button down
            btn.style.backgroundColor = '#' + colors.btnfont;
            btn.style.color = '#' + colors.btn;
            break;
        case 2: // button up
            btn.style.backgroundColor = '#' + colors.btn;
            btn.style.color = '#' + colors.btnfont;
            break;
        case 3: // button down, then up
            button_click(button_id, 1);
            setTimeout("button_click('" + button_id + "', 2)", 150);
            break;
    }
}

function cancel_settings() {
    document.getElementById('settings').style.display = 'none';
    apply_settings(get_storage());
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
    set_storage(colors);
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

function show_settings(colors) {
    if (!colors)
        colors = get_storage();

    var bg = document.getElementById('bgcolor');
    var shadow = document.getElementById('shadowcolor');
    var calc = document.getElementById('calccolor');
    var disp = document.getElementById('dispcolor');
    var dispfont = document.getElementById('dispfontcolor');
    var errorfont = document.getElementById('errorfontcolor');
    var btn = document.getElementById('btncolor');
    var btnfont = document.getElementById('btnfontcolor');
    var settings = document.getElementById('settings');

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

    settings.style.display = 'block';
    settings.style.top = Math.round(
            (window.innerHeight - settings.offsetHeight) / 2) + 'px';
    color_changed();
}

function inverse(c) {
    if (c.length != 6 || ! c.match(/^[0-9a-fA-F]{6}$/))
        return '';

    var r = 255 - parseInt(c.slice(0, 2), 16);
    var g = 255 - parseInt(c.slice(2, 4), 16);
    var b = 255 - parseInt(c.slice(4, 6), 16);

    return r.toString(16) + g.toString(16) + b.toString(16);
}

function set_storage(colors) {
    localStorage.bg = colors.bg;
    localStorage.shadow = colors.shadow;
    localStorage.calc = colors.calc;
    localStorage.disp = colors.disp;
    localStorage.dispfont = colors.dispfont;
    localStorage.errorfont = colors.errorfont;
    localStorage.btn = colors.btn;
    localStorage.btnfont = colors.btnfont;
}

function get_storage() {
    var def = get_defaults();
    return {
        bg: localStorage.bg ? localStorage.bg : def.bg,
        shadow: localStorage.shadow ? localStorage.shadow : def.shadow,
        calc: localStorage.calc ? localStorage.calc : def.calc,
        disp: localStorage.disp ? localStorage.disp : def.disp,
        dispfont: localStorage.dispfont ? localStorage.dispfont : def.dispfont,
        errorfont: localStorage.errorfont ? localStorage.errorfont : def.errorfont,
        btn: localStorage.btn ? localStorage.btn : def.btn,
        btnfont: localStorage.btnfont ? localStorage.btnfont : def.btnfont,
    };
}

function get_defaults() {
    return {
        bg: 'E0E0E0',
        shadow: '000000',
        calc: 'C0C0C0',
        disp: 'FFFFFF',
        dispfont: '000000',
        errorfont: 'FF0000',
        btn: '8C8C8C',
        btnfont: '000000',
    };
}

function highlight_button(btn) {
    var colors = get_storage();
    btn.style.backgroundColor = '#' + colors.bg;
}

function unhighlight_button(btn) {
    var colors = get_storage();
    btn.style.backgroundColor = '#' + colors.btn;
}

function color_changed() {
    var colors = {
        bg: document.getElementById('bgcolor').value,
        shadow: document.getElementById('shadowcolor').value,
        calc: document.getElementById('calccolor').value,
        disp: document.getElementById('dispcolor').value,
        dispfont: document.getElementById('dispfontcolor').value,
        errorfont: document.getElementById('errorfontcolor').value,
        btn: document.getElementById('btncolor').value,
        btnfont: document.getElementById('btnfontcolor').value,
    }
    apply_settings(colors);
}
