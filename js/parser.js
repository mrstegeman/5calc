/*
    Default template driver for JS/CC generated parsers running as
    browser-based JavaScript/ECMAScript applications.

    WARNING:    This parser template will not run as console and has lesser
                features for debugging than the console derivates for the
                various JavaScript platforms.

    Features:
    - Parser trace messages
    - Integrated panic-mode error recovery

    Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies

    This is in the public domain.
*/

var _dbg_withtrace = false;
var _dbg_string = new String();

function __dbg_print(text) {
    _dbg_string += text + "\n";
}

function __lex(info) {
    var state = 0;
    var match = -1;
    var match_pos = 0;
    var start = 0;
    var pos = info.offset + 1;

    do {
        pos--;
        state = 0;
        match = -2;
        start = pos;

        if (info.src.length <= start)
            return 26;

        do {
            switch (state) {
                case 0:
                    if (info.src.charCodeAt(pos) == 9 || info.src.charCodeAt(pos) == 32)
                        state = 1;
                    else if (info.src.charCodeAt(pos) == 33)
                        state = 2;
                    else if (info.src.charCodeAt(pos) == 37)
                        state = 3;
                    else if (info.src.charCodeAt(pos) == 40)
                        state = 4;
                    else if (info.src.charCodeAt(pos) == 41)
                        state = 5;
                    else if (info.src.charCodeAt(pos) == 42)
                        state = 6;
                    else if (info.src.charCodeAt(pos) == 43)
                        state = 7;
                    else if (info.src.charCodeAt(pos) == 45)
                        state = 8;
                    else if (info.src.charCodeAt(pos) == 47)
                        state = 9;
                    else if ((info.src.charCodeAt(pos) >= 48 && info.src.charCodeAt(pos) <= 57))
                        state = 10;
                    else if (info.src.charCodeAt(pos) == 94)
                        state = 11;
                    else if (info.src.charCodeAt(pos) == 101)
                        state = 12;
                    else if (info.src.charCodeAt(pos) == 124)
                        state = 13;
                    else if (info.src.charCodeAt(pos) == 46)
                        state = 24;
                    else if (info.src.charCodeAt(pos) == 97)
                        state = 25;
                    else if (info.src.charCodeAt(pos) == 99)
                        state = 26;
                    else if (info.src.charCodeAt(pos) == 108)
                        state = 27;
                    else if (info.src.charCodeAt(pos) == 112)
                        state = 28;
                    else if (info.src.charCodeAt(pos) == 115)
                        state = 29;
                    else if (info.src.charCodeAt(pos) == 116)
                        state = 30;
                    else
                        state = -1;

                    break;
                case 1:
                    state = -1;
                    match = 1;
                    match_pos = pos;
                    break;
                case 2:
                    state = -1;
                    match = 5;
                    match_pos = pos;
                    break;
                case 3:
                    state = -1;
                    match = 22;
                    match_pos = pos;
                    break;
                case 4:
                    state = -1;
                    match = 2;
                    match_pos = pos;
                    break;
                case 5:
                    state = -1;
                    match = 3;
                    match_pos = pos;
                    break;
                case 6:
                    state = -1;
                    match = 20;
                    match_pos = pos;
                    break;
                case 7:
                    state = -1;
                    match = 18;
                    match_pos = pos;
                    break;
                case 8:
                    state = -1;
                    match = 19;
                    match_pos = pos;
                    break;
                case 9:
                    state = -1;
                    match = 21;
                    match_pos = pos;
                    break;
                case 10:
                    if ((info.src.charCodeAt(pos) >= 48 && info.src.charCodeAt(pos) <= 57))
                        state = 10;
                    else if (info.src.charCodeAt(pos) == 46)
                        state = 24;
                    else
                        state = -1;

                    match = 16;
                    match_pos = pos;
                    break;
                case 11:
                    state = -1;
                    match = 23;
                    match_pos = pos;
                    break;
                case 12:
                    state = -1;
                    match = 14;
                    match_pos = pos;
                    break;
                case 13:
                    state = -1;
                    match = 4;
                    match_pos = pos;
                    break;
                case 14:
                    if ((info.src.charCodeAt(pos) >= 48 && info.src.charCodeAt(pos) <= 57))
                        state = 14;
                    else
                        state = -1;

                    match = 17;
                    match_pos = pos;
                    break;
                case 15:
                    state = -1;
                    match = 12;
                    match_pos = pos;
                    break;
                case 16:
                    state = -1;
                    match = 15;
                    match_pos = pos;
                    break;
                case 17:
                    state = -1;
                    match = 10;
                    match_pos = pos;
                    break;
                case 18:
                    state = -1;
                    match = 13;
                    match_pos = pos;
                    break;
                case 19:
                    state = -1;
                    match = 9;
                    match_pos = pos;
                    break;
                case 20:
                    state = -1;
                    match = 11;
                    match_pos = pos;
                    break;
                case 21:
                    state = -1;
                    match = 7;
                    match_pos = pos;
                    break;
                case 22:
                    state = -1;
                    match = 6;
                    match_pos = pos;
                    break;
                case 23:
                    state = -1;
                    match = 8;
                    match_pos = pos;
                    break;
                case 24:
                    if ((info.src.charCodeAt(pos) >= 48 && info.src.charCodeAt(pos) <= 57))
                        state = 14;
                    else
                        state = -1;

                    break;
                case 25:
                    if (info.src.charCodeAt(pos) == 99)
                        state = 38;
                    else if (info.src.charCodeAt(pos) == 115)
                        state = 39;
                    else if (info.src.charCodeAt(pos) == 116)
                        state = 40;
                    else
                        state = -1;

                    break;
                case 26:
                    if (info.src.charCodeAt(pos) == 111)
                        state = 31;
                    else
                        state = -1;

                    break;
                case 27:
                    if (info.src.charCodeAt(pos) == 110)
                        state = 15;
                    else if (info.src.charCodeAt(pos) == 111)
                        state = 32;
                    else
                        state = -1;

                    break;
                case 28:
                    if (info.src.charCodeAt(pos) == 105)
                        state = 16;
                    else
                        state = -1;

                    break;
                case 29:
                    if (info.src.charCodeAt(pos) == 105)
                        state = 33;
                    else
                        state = -1;

                    break;
                case 30:
                    if (info.src.charCodeAt(pos) == 97)
                        state = 34;
                    else
                        state = -1;

                    break;
                case 31:
                    if (info.src.charCodeAt(pos) == 115)
                        state = 17;
                    else
                        state = -1;

                    break;
                case 32:
                    if (info.src.charCodeAt(pos) == 103)
                        state = 18;
                    else
                        state = -1;

                    break;
                case 33:
                    if (info.src.charCodeAt(pos) == 110)
                        state = 19;
                    else
                        state = -1;

                    break;
                case 34:
                    if (info.src.charCodeAt(pos) == 110)
                        state = 20;
                    else
                        state = -1;

                    break;
                case 35:
                    if (info.src.charCodeAt(pos) == 115)
                        state = 21;
                    else
                        state = -1;

                    break;
                case 36:
                    if (info.src.charCodeAt(pos) == 110)
                        state = 22;
                    else
                        state = -1;

                    break;
                case 37:
                    if (info.src.charCodeAt(pos) == 110)
                        state = 23;
                    else
                        state = -1;

                    break;
                case 38:
                    if (info.src.charCodeAt(pos) == 111)
                        state = 35;
                    else
                        state = -1;

                    break;
                case 39:
                    if (info.src.charCodeAt(pos) == 105)
                        state = 36;
                    else
                        state = -1;

                    break;
                case 40:
                    if (info.src.charCodeAt(pos) == 97)
                        state = 37;
                    else
                        state = -1;

                    break;
            }

            pos++;
        } while (state > -1);
    } while (1 > -1 && match == 1);

    if (match > -1) {
        info.att = info.src.substr(start, match_pos - start);
        info.offset = match_pos;

        switch (match) {
            case 14:
                info.att = Math.E;
                break;
            case 15:
                info.att = Math.PI;
                break;
            case 16:
                info.att = parseInt(info.att);
                break;
            case 17:
                info.att = parseFloat(info.att);
                break;
        }

    }
    else {
        info.att = new String();
        match = -1;
    }

    return match;
}

function __parse(src, degrees, err_off, err_la) {
    var result;
    var sstack = new Array();
    var vstack = new Array();
    var err_cnt = 0;
    var act;
    var go;
    var la;
    var rval;
    var parseinfo = new Function("", "var offset; var src; var att;");
    var info = new parseinfo();

    /* Pop-Table */
    var pop_tab = new Array(
        new Array(0/* p' */, 1),
        new Array(25/* p */, 1),
        new Array(24/* e */, 3),
        new Array(24/* e */, 3),
        new Array(24/* e */, 3),
        new Array(24/* e */, 3),
        new Array(24/* e */, 3),
        new Array(24/* e */, 3),
        new Array(24/* e */, 2),
        new Array(24/* e */, 3),
        new Array(24/* e */, 3),
        new Array(24/* e */, 4),
        new Array(24/* e */, 4),
        new Array(24/* e */, 4),
        new Array(24/* e */, 4),
        new Array(24/* e */, 4),
        new Array(24/* e */, 4),
        new Array(24/* e */, 4),
        new Array(24/* e */, 4),
        new Array(24/* e */, 2),
        new Array(24/* e */, 1),
        new Array(24/* e */, 1),
        new Array(24/* e */, 1),
        new Array(24/* e */, 1)
    );

    /* Action-Table */
    var act_tab = new Array(
        /* State 0 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 1 */ new Array(26/* "$" */, 0),
        /* State 2 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 26/* "$" */, -1),
        /* State 3 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 4 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 5 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 6 */ new Array(2/* "LPAREN" */, 28),
        /* State 7 */ new Array(2/* "LPAREN" */, 29),
        /* State 8 */ new Array(2/* "LPAREN" */, 30),
        /* State 9 */ new Array(2/* "LPAREN" */, 31),
        /* State 10 */ new Array(2/* "LPAREN" */, 32),
        /* State 11 */ new Array(2/* "LPAREN" */, 33),
        /* State 12 */ new Array(2/* "LPAREN" */, 34),
        /* State 13 */ new Array(2/* "LPAREN" */, 35),
        /* State 14 */ new Array(26/* "$" */, -20, 18/* "ADD" */, -20, 19/* "SUB" */, -20, 20/* "MULT" */, -20, 21/* "DIV" */, -20, 22/* "MOD" */, -20, 23/* "POW" */, -20, 5/* "FACT" */, -20, 3/* "RPAREN" */, -20, 4/* "PIPE" */, -20),
        /* State 15 */ new Array(26/* "$" */, -21, 18/* "ADD" */, -21, 19/* "SUB" */, -21, 20/* "MULT" */, -21, 21/* "DIV" */, -21, 22/* "MOD" */, -21, 23/* "POW" */, -21, 5/* "FACT" */, -21, 3/* "RPAREN" */, -21, 4/* "PIPE" */, -21),
        /* State 16 */ new Array(26/* "$" */, -22, 18/* "ADD" */, -22, 19/* "SUB" */, -22, 20/* "MULT" */, -22, 21/* "DIV" */, -22, 22/* "MOD" */, -22, 23/* "POW" */, -22, 5/* "FACT" */, -22, 3/* "RPAREN" */, -22, 4/* "PIPE" */, -22),
        /* State 17 */ new Array(26/* "$" */, -23, 18/* "ADD" */, -23, 19/* "SUB" */, -23, 20/* "MULT" */, -23, 21/* "DIV" */, -23, 22/* "MOD" */, -23, 23/* "POW" */, -23, 5/* "FACT" */, -23, 3/* "RPAREN" */, -23, 4/* "PIPE" */, -23),
        /* State 18 */ new Array(26/* "$" */, -19, 18/* "ADD" */, -19, 19/* "SUB" */, -19, 20/* "MULT" */, -19, 21/* "DIV" */, -19, 22/* "MOD" */, -19, 23/* "POW" */, -19, 5/* "FACT" */, -19, 3/* "RPAREN" */, -19, 4/* "PIPE" */, -19),
        /* State 19 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 20 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 21 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 22 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 23 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 24 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 25 */ new Array(5/* "FACT" */, -8, 23/* "POW" */, 19, 22/* "MOD" */, -8, 21/* "DIV" */, -8, 20/* "MULT" */, -8, 19/* "SUB" */, -8, 18/* "ADD" */, -8, 26/* "$" */, -8, 3/* "RPAREN" */, -8, 4/* "PIPE" */, -8),
        /* State 26 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 42),
        /* State 27 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 4/* "PIPE" */, 43),
        /* State 28 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 29 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 30 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 31 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 32 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 33 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 34 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 35 */ new Array(19/* "SUB" */, 3, 2/* "LPAREN" */, 4, 4/* "PIPE" */, 5, 6/* "ASIN" */, 6, 7/* "ACOS" */, 7, 8/* "ATAN" */, 8, 9/* "SIN" */, 9, 10/* "COS" */, 10, 11/* "TAN" */, 11, 12/* "LN" */, 12, 13/* "LOG" */, 13, 16/* "INT" */, 14, 17/* "FLOAT" */, 15, 14/* "E" */, 16, 15/* "PI" */, 17),
        /* State 36 */ new Array(5/* "FACT" */, -7, 23/* "POW" */, -7, 22/* "MOD" */, -7, 21/* "DIV" */, -7, 20/* "MULT" */, -7, 19/* "SUB" */, -7, 18/* "ADD" */, -7, 26/* "$" */, -7, 3/* "RPAREN" */, -7, 4/* "PIPE" */, -7),
        /* State 37 */ new Array(5/* "FACT" */, -6, 23/* "POW" */, 19, 22/* "MOD" */, -6, 21/* "DIV" */, -6, 20/* "MULT" */, -6, 19/* "SUB" */, -6, 18/* "ADD" */, -6, 26/* "$" */, -6, 3/* "RPAREN" */, -6, 4/* "PIPE" */, -6),
        /* State 38 */ new Array(5/* "FACT" */, -5, 23/* "POW" */, 19, 22/* "MOD" */, -5, 21/* "DIV" */, -5, 20/* "MULT" */, -5, 19/* "SUB" */, -5, 18/* "ADD" */, -5, 26/* "$" */, -5, 3/* "RPAREN" */, -5, 4/* "PIPE" */, -5),
        /* State 39 */ new Array(5/* "FACT" */, -4, 23/* "POW" */, 19, 22/* "MOD" */, -4, 21/* "DIV" */, -4, 20/* "MULT" */, -4, 19/* "SUB" */, -4, 18/* "ADD" */, -4, 26/* "$" */, -4, 3/* "RPAREN" */, -4, 4/* "PIPE" */, -4),
        /* State 40 */ new Array(5/* "FACT" */, -3, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, -3, 18/* "ADD" */, -3, 26/* "$" */, -3, 3/* "RPAREN" */, -3, 4/* "PIPE" */, -3),
        /* State 41 */ new Array(5/* "FACT" */, -2, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, -2, 18/* "ADD" */, -2, 26/* "$" */, -2, 3/* "RPAREN" */, -2, 4/* "PIPE" */, -2),
        /* State 42 */ new Array(26/* "$" */, -9, 18/* "ADD" */, -9, 19/* "SUB" */, -9, 20/* "MULT" */, -9, 21/* "DIV" */, -9, 22/* "MOD" */, -9, 23/* "POW" */, -9, 5/* "FACT" */, -9, 3/* "RPAREN" */, -9, 4/* "PIPE" */, -9),
        /* State 43 */ new Array(26/* "$" */, -10, 18/* "ADD" */, -10, 19/* "SUB" */, -10, 20/* "MULT" */, -10, 21/* "DIV" */, -10, 22/* "MOD" */, -10, 23/* "POW" */, -10, 5/* "FACT" */, -10, 3/* "RPAREN" */, -10, 4/* "PIPE" */, -10),
        /* State 44 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 52),
        /* State 45 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 53),
        /* State 46 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 54),
        /* State 47 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 55),
        /* State 48 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 56),
        /* State 49 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 57),
        /* State 50 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 58),
        /* State 51 */ new Array(5/* "FACT" */, 18, 23/* "POW" */, 19, 22/* "MOD" */, 20, 21/* "DIV" */, 21, 20/* "MULT" */, 22, 19/* "SUB" */, 23, 18/* "ADD" */, 24, 3/* "RPAREN" */, 59),
        /* State 52 */ new Array(26/* "$" */, -11, 18/* "ADD" */, -11, 19/* "SUB" */, -11, 20/* "MULT" */, -11, 21/* "DIV" */, -11, 22/* "MOD" */, -11, 23/* "POW" */, -11, 5/* "FACT" */, -11, 3/* "RPAREN" */, -11, 4/* "PIPE" */, -11),
        /* State 53 */ new Array(26/* "$" */, -12, 18/* "ADD" */, -12, 19/* "SUB" */, -12, 20/* "MULT" */, -12, 21/* "DIV" */, -12, 22/* "MOD" */, -12, 23/* "POW" */, -12, 5/* "FACT" */, -12, 3/* "RPAREN" */, -12, 4/* "PIPE" */, -12),
        /* State 54 */ new Array(26/* "$" */, -13, 18/* "ADD" */, -13, 19/* "SUB" */, -13, 20/* "MULT" */, -13, 21/* "DIV" */, -13, 22/* "MOD" */, -13, 23/* "POW" */, -13, 5/* "FACT" */, -13, 3/* "RPAREN" */, -13, 4/* "PIPE" */, -13),
        /* State 55 */ new Array(26/* "$" */, -14, 18/* "ADD" */, -14, 19/* "SUB" */, -14, 20/* "MULT" */, -14, 21/* "DIV" */, -14, 22/* "MOD" */, -14, 23/* "POW" */, -14, 5/* "FACT" */, -14, 3/* "RPAREN" */, -14, 4/* "PIPE" */, -14),
        /* State 56 */ new Array(26/* "$" */, -15, 18/* "ADD" */, -15, 19/* "SUB" */, -15, 20/* "MULT" */, -15, 21/* "DIV" */, -15, 22/* "MOD" */, -15, 23/* "POW" */, -15, 5/* "FACT" */, -15, 3/* "RPAREN" */, -15, 4/* "PIPE" */, -15),
        /* State 57 */ new Array(26/* "$" */, -16, 18/* "ADD" */, -16, 19/* "SUB" */, -16, 20/* "MULT" */, -16, 21/* "DIV" */, -16, 22/* "MOD" */, -16, 23/* "POW" */, -16, 5/* "FACT" */, -16, 3/* "RPAREN" */, -16, 4/* "PIPE" */, -16),
        /* State 58 */ new Array(26/* "$" */, -17, 18/* "ADD" */, -17, 19/* "SUB" */, -17, 20/* "MULT" */, -17, 21/* "DIV" */, -17, 22/* "MOD" */, -17, 23/* "POW" */, -17, 5/* "FACT" */, -17, 3/* "RPAREN" */, -17, 4/* "PIPE" */, -17),
        /* State 59 */ new Array(26/* "$" */, -18, 18/* "ADD" */, -18, 19/* "SUB" */, -18, 20/* "MULT" */, -18, 21/* "DIV" */, -18, 22/* "MOD" */, -18, 23/* "POW" */, -18, 5/* "FACT" */, -18, 3/* "RPAREN" */, -18, 4/* "PIPE" */, -18)
    );

    /* Goto-Table */
    var goto_tab = new Array(
        /* State 0 */ new Array(25/* p */, 1, 24/* e */, 2),
        /* State 1 */ new Array(),
        /* State 2 */ new Array(),
        /* State 3 */ new Array(24/* e */, 25),
        /* State 4 */ new Array(24/* e */, 26),
        /* State 5 */ new Array(24/* e */, 27),
        /* State 6 */ new Array(),
        /* State 7 */ new Array(),
        /* State 8 */ new Array(),
        /* State 9 */ new Array(),
        /* State 10 */ new Array(),
        /* State 11 */ new Array(),
        /* State 12 */ new Array(),
        /* State 13 */ new Array(),
        /* State 14 */ new Array(),
        /* State 15 */ new Array(),
        /* State 16 */ new Array(),
        /* State 17 */ new Array(),
        /* State 18 */ new Array(),
        /* State 19 */ new Array(24/* e */, 36),
        /* State 20 */ new Array(24/* e */, 37),
        /* State 21 */ new Array(24/* e */, 38),
        /* State 22 */ new Array(24/* e */, 39),
        /* State 23 */ new Array(24/* e */, 40),
        /* State 24 */ new Array(24/* e */, 41),
        /* State 25 */ new Array(),
        /* State 26 */ new Array(),
        /* State 27 */ new Array(),
        /* State 28 */ new Array(24/* e */, 44),
        /* State 29 */ new Array(24/* e */, 45),
        /* State 30 */ new Array(24/* e */, 46),
        /* State 31 */ new Array(24/* e */, 47),
        /* State 32 */ new Array(24/* e */, 48),
        /* State 33 */ new Array(24/* e */, 49),
        /* State 34 */ new Array(24/* e */, 50),
        /* State 35 */ new Array(24/* e */, 51),
        /* State 36 */ new Array(),
        /* State 37 */ new Array(),
        /* State 38 */ new Array(),
        /* State 39 */ new Array(),
        /* State 40 */ new Array(),
        /* State 41 */ new Array(),
        /* State 42 */ new Array(),
        /* State 43 */ new Array(),
        /* State 44 */ new Array(),
        /* State 45 */ new Array(),
        /* State 46 */ new Array(),
        /* State 47 */ new Array(),
        /* State 48 */ new Array(),
        /* State 49 */ new Array(),
        /* State 50 */ new Array(),
        /* State 51 */ new Array(),
        /* State 52 */ new Array(),
        /* State 53 */ new Array(),
        /* State 54 */ new Array(),
        /* State 55 */ new Array(),
        /* State 56 */ new Array(),
        /* State 57 */ new Array(),
        /* State 58 */ new Array(),
        /* State 59 */ new Array()
    );

    /* Symbol labels */
    var labels = new Array(
        "p'" /* Non-terminal symbol */,
        "WHITESPACE" /* Terminal symbol */,
        "LPAREN" /* Terminal symbol */,
        "RPAREN" /* Terminal symbol */,
        "PIPE" /* Terminal symbol */,
        "FACT" /* Terminal symbol */,
        "ASIN" /* Terminal symbol */,
        "ACOS" /* Terminal symbol */,
        "ATAN" /* Terminal symbol */,
        "SIN" /* Terminal symbol */,
        "COS" /* Terminal symbol */,
        "TAN" /* Terminal symbol */,
        "LN" /* Terminal symbol */,
        "LOG" /* Terminal symbol */,
        "E" /* Terminal symbol */,
        "PI" /* Terminal symbol */,
        "INT" /* Terminal symbol */,
        "FLOAT" /* Terminal symbol */,
        "ADD" /* Terminal symbol */,
        "SUB" /* Terminal symbol */,
        "MULT" /* Terminal symbol */,
        "DIV" /* Terminal symbol */,
        "MOD" /* Terminal symbol */,
        "POW" /* Terminal symbol */,
        "e" /* Non-terminal symbol */,
        "p" /* Non-terminal symbol */,
        "$" /* Terminal symbol */
    );

    info.offset = 0;
    info.src = src;
    info.att = new String();

    if (!err_off)
        err_off = new Array();
    if (!err_la)
        err_la = new Array();

    sstack.push(0);
    vstack.push(0);

    la = __lex(info);

    while (true) {
        act = 61;
        for (var i = 0; i < act_tab[sstack[sstack.length - 1]].length; i += 2) {
            if (act_tab[sstack[sstack.length - 1]][i] == la) {
                act = act_tab[sstack[sstack.length - 1]][i + 1];
                break;
            }
        }

        if (_dbg_withtrace && sstack.length > 0) {
            __dbg_print("\nState " + sstack[sstack.length - 1] + "\n" +
                            "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
                            "\tAction: " + act + "\n" +
                            "\tSource: \"" + info.src.substr(info.offset, 30) + ((info.offset + 30 < info.src.length) ?
                                "..." : "") + "\"\n" +
                            "\tStack: " + sstack.join() + "\n" +
                            "\tValue stack: " + vstack.join() + "\n");
        }

        //Panic-mode: Try recovery when parse-error occurs!
        if (act == 61) {
            if (_dbg_withtrace)
                __dbg_print("Error detected: There is no reduce or shift on the symbol " + labels[la]);

            err_cnt++;
            err_off.push(info.offset - info.att.length);
            err_la.push(new Array());
            for (var i = 0; i < act_tab[sstack[sstack.length - 1]].length; i += 2)
                err_la[err_la.length - 1].push(labels[act_tab[sstack[sstack.length - 1]][i]]);

            //Remember the original stack!
            var rsstack = new Array();
            var rvstack = new Array();
            for (var i = 0; i < sstack.length; i++) {
                rsstack[i] = sstack[i];
                rvstack[i] = vstack[i];
            }

            while (act == 61 && la != 26) {
                if (_dbg_withtrace)
                    __dbg_print("\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n");
                if (la == -1)
                    info.offset++;

                while (act == 61 && sstack.length > 0) {
                    sstack.pop();
                    vstack.pop();

                    if (sstack.length == 0)
                        break;

                    act = 61;
                    for (var i = 0; i < act_tab[sstack[sstack.length - 1]].length; i += 2) {
                        if (act_tab[sstack[sstack.length - 1]][i] == la) {
                            act = act_tab[sstack[sstack.length - 1]][i + 1];
                            break;
                        }
                    }
                }

                if (act != 61)
                    break;

                for (var i = 0; i < rsstack.length; i++) {
                    sstack.push(rsstack[i]);
                    vstack.push(rvstack[i]);
                }

                la = __lex(info);
            }

            if (act == 61) {
                if (_dbg_withtrace)
                    __dbg_print("\tError recovery failed, terminating parse process...");
                break;
            }

            if (_dbg_withtrace)
                __dbg_print("\tError recovery succeeded, continuing");
        }

        /*
        if (act == 61)
            break;
        */

        //Shift
        if (act > 0) {
            if (_dbg_withtrace)
                __dbg_print("Shifting symbol: " + labels[la] + " (" + info.att + ")");

            sstack.push(act);
            vstack.push(info.att);

            la = __lex(info);

            if (_dbg_withtrace)
                __dbg_print("\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")");
        }
        //Reduce
        else {
            act *= -1;

            if (_dbg_withtrace)
                __dbg_print("Reducing by producution: " + act);

            rval = void(0);

            if (_dbg_withtrace)
                __dbg_print("\tPerforming semantic action...");

            switch (act) {
                case 0:
                    rval = vstack[vstack.length - 1];
                    break;
                case 1:
                    result = vstack[vstack.length - 1];
                    break;
                case 2:
                    rval = vstack[vstack.length - 3] + vstack[vstack.length - 1];
                    break;
                case 3:
                    rval = vstack[vstack.length - 3] - vstack[vstack.length - 1];
                    break;
                case 4:
                    rval = vstack[vstack.length - 3] * vstack[vstack.length - 1];
                    break;
                case 5:
                    rval = vstack[vstack.length - 3] / vstack[vstack.length - 1];
                    break;
                case 6:
                    rval = vstack[vstack.length - 3] % vstack[vstack.length - 1];
                    break;
                case 7:
                    rval = Math.pow(vstack[vstack.length - 3], vstack[vstack.length - 1]);
                    break;
                case 8:
                    rval = vstack[vstack.length - 1] * -1;
                    break;
                case 9:
                    rval = vstack[vstack.length - 2];
                    break;
                case 10:
                    rval = Math.abs(vstack[vstack.length - 2]);
                    break;
                case 11:
                    if (degrees)
                        rval = (180 / Math.PI) * Math.asin(vstack[vstack.length - 2]);
                    else
                        rval = Math.asin(vstack[vstack.length - 2]);
                    break;
                case 12:
                    if (degrees)
                        rval = (180 / Math.PI) * Math.acos(vstack[vstack.length - 2]);
                    else
                        rval = Math.acos(vstack[vstack.length - 2]);
                    break;
                case 13:
                    if (degrees)
                        rval = (180 / Math.PI) * Math.atan(vstack[vstack.length - 2]);
                    else
                        rval = Math.atan(vstack[vstack.length - 2]);
                    break;
                case 14:
                    if (degrees)
                        rval = Math.sin(vstack[vstack.length - 2] * Math.PI / 180);
                    else
                        rval = Math.sin(vstack[vstack.length - 2]);
                    break;
                case 15:
                    if (degrees)
                        rval = Math.cos(vstack[vstack.length - 2] * Math.PI / 180);
                    else
                        rval = Math.cos(vstack[vstack.length - 2]);
                    break;
                case 16:
                    if (degrees)
                        rval = Math.tan(vstack[vstack.length - 2] * Math.PI / 180);
                    else
                        rval = Math.tan(vstack[vstack.length - 2]);
                    break;
                case 17:
                    rval = Math.log(vstack[vstack.length - 2]);
                    break;
                case 18:
                    rval = Math.log(vstack[vstack.length - 2]) / Math.log(10);
                    break;
                case 19:
                    rval = factorial(vstack[vstack.length - 2]);
                    break;
                case 20:
                    rval = vstack[vstack.length - 1];
                    break;
                case 21:
                    rval = vstack[vstack.length - 1];
                    break;
                case 22:
                    rval = vstack[vstack.length - 1];
                    break;
                case 23:
                    rval = vstack[vstack.length - 1];
                    break;
            }

            if (_dbg_withtrace)
                __dbg_print("\tPopping " + pop_tab[act][1] + " off the stack...");

            for (var i = 0; i < pop_tab[act][1]; i++) {
                sstack.pop();
                vstack.pop();
            }

            go = -1;
            for (var i = 0; i < goto_tab[sstack[sstack.length - 1]].length; i += 2) {
                if (goto_tab[sstack[sstack.length - 1]][i] == pop_tab[act][0]) {
                    go = goto_tab[sstack[sstack.length - 1]][i + 1];
                    break;
                }
            }

            if (act == 0)
                break;

            if (_dbg_withtrace)
                __dbg_print("\tPushing non-terminal " + labels[pop_tab[act][0]]);

            sstack.push(go);
            vstack.push(rval);
        }

        if (_dbg_withtrace) {
            alert(_dbg_string);
            _dbg_string = new String();
        }
    }

    if (_dbg_withtrace) {
        __dbg_print("\nParse complete.");
        alert(_dbg_string);
    }

    return {
        res: result,
        err: err_cnt,
    };
}
