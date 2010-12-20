window.onload = function() {
    apply_settings(get_storage());
    document.onkeypress = key_press;
    document.onkeydown = key_down;
    document.onkeyup = key_up;
};

function calculate() {
    var disp = document.getElementById('display');
    var error = document.getElementById('error');
    var colors = get_storage();
    var degrees = colors.mode == 'deg' ? true : false;
    var result = __parse(disp.innerHTML, degrees);

    if (result.err > 0)
        error.innerHTML = 'Malformed expression';
    else {
        error.innerHTML = '';
        disp.innerHTML = result.res;
    }
}

function factorial(n) {
    if ((n == 0) || (n == 1))
        return 1;
    else
        return (n * factorial(n - 1));
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
        mode: document.getElementById('mode').value,
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
    var links = document.getElementsByTagName('a');
    for (var x = 0; x < links.length; x++) {
        links[x].style.color = '#' + colors.btnfont;
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
    var mode = document.getElementById('mode');

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

    mode.value = colors.mode;

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
    localStorage.mode = colors.mode;
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
        mode: localStorage.mode ? localStorage.mode : def.mode,
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
        mode: 'rad',
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
