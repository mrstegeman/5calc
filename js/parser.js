/*
    Default template driver for JS/CC generated parsers running as
    browser-based JavaScript/ECMAScript applications.
    
    WARNING:     This parser template will not run as console and has lesser
                features for debugging than the console derivates for the
                various JavaScript platforms.
    
    Features:
    - Parser trace messages
    - Integrated panic-mode error recovery
    
    Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
    
    This is in the public domain.
*/

var _dbg_withtrace        = false;
var _dbg_string            = new String();

function __dbg_print( text )
{
    _dbg_string += text + "\n";
}

function __lex( info )
{
    var state        = 0;
    var match        = -1;
    var match_pos    = 0;
    var start        = 0;
    var pos            = info.offset + 1;

    do
    {
        pos--;
        state = 0;
        match = -2;
        start = pos;

        if( info.src.length <= start )
            return 13;

        do
        {

switch( state )
{
    case 0:
        if( info.src.charCodeAt( pos ) == 9 || info.src.charCodeAt( pos ) == 32 ) state = 1;
        else if( info.src.charCodeAt( pos ) == 40 ) state = 2;
        else if( info.src.charCodeAt( pos ) == 41 ) state = 3;
        else if( info.src.charCodeAt( pos ) == 43 ) state = 4;
        else if( info.src.charCodeAt( pos ) == 45 ) state = 5;
        else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 6;
        else if( info.src.charCodeAt( pos ) == 94 ) state = 7;
        else if( info.src.charCodeAt( pos ) == 215 ) state = 8;
        else if( info.src.charCodeAt( pos ) == 247 ) state = 9;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 11;
        else state = -1;
        break;

    case 1:
        state = -1;
        match = 1;
        match_pos = pos;
        break;

    case 2:
        state = -1;
        match = 2;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 3;
        match_pos = pos;
        break;

    case 4:
        state = -1;
        match = 6;
        match_pos = pos;
        break;

    case 5:
        state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 6:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 6;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 11;
        else state = -1;
        match = 4;
        match_pos = pos;
        break;

    case 7:
        state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 8:
        state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 9:
        state = -1;
        match = 9;
        match_pos = pos;
        break;

    case 10:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 10;
        else state = -1;
        match = 5;
        match_pos = pos;
        break;

    case 11:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 10;
        else state = -1;
        break;

}


            pos++;

        }
        while( state > -1 );

    }
    while( 1 > -1 && match == 1 );

    if( match > -1 )
    {
        info.att = info.src.substr( start, match_pos - start );
        info.offset = match_pos;
        
switch( match )
{
    case 4:
        {
         info.att = parseInt(info.att);
        }
        break;

    case 5:
        {
         info.att = parseFloat(info.att);
        }
        break;

}


    }
    else
    {
        info.att = new String();
        match = -1;
    }

    return match;
}


function __parse( src, err_off, err_la )
{
    var result = null;
    var        sstack            = new Array();
    var        vstack            = new Array();
    var     err_cnt            = 0;
    var        act;
    var        go;
    var        la;
    var        rval;
    var     parseinfo        = new Function( "", "var offset; var src; var att;" );
    var        info            = new parseinfo();
    
/* Pop-Table */
var pop_tab = new Array(
    new Array( 0/* p' */, 1 ),
    new Array( 12/* p */, 1 ),
    new Array( 11/* e */, 3 ),
    new Array( 11/* e */, 3 ),
    new Array( 11/* e */, 3 ),
    new Array( 11/* e */, 3 ),
    new Array( 11/* e */, 3 ),
    new Array( 11/* e */, 2 ),
    new Array( 11/* e */, 3 ),
    new Array( 11/* e */, 1 ),
    new Array( 11/* e */, 1 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 1 */ new Array( 13/* "$" */,0 ),
    /* State 2 */ new Array( 10/* "POW" */,7 , 9/* "DIV" */,8 , 8/* "MULT" */,9 , 7/* "SUB" */,10 , 6/* "ADD" */,11 , 13/* "$" */,-1 ),
    /* State 3 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 4 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 5 */ new Array( 13/* "$" */,-9 , 6/* "ADD" */,-9 , 7/* "SUB" */,-9 , 8/* "MULT" */,-9 , 9/* "DIV" */,-9 , 10/* "POW" */,-9 , 3/* "RPAREN" */,-9 ),
    /* State 6 */ new Array( 13/* "$" */,-10 , 6/* "ADD" */,-10 , 7/* "SUB" */,-10 , 8/* "MULT" */,-10 , 9/* "DIV" */,-10 , 10/* "POW" */,-10 , 3/* "RPAREN" */,-10 ),
    /* State 7 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 8 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 9 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 10 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 11 */ new Array( 7/* "SUB" */,3 , 2/* "LPAREN" */,4 , 4/* "INT" */,5 , 5/* "FLOAT" */,6 ),
    /* State 12 */ new Array( 10/* "POW" */,7 , 9/* "DIV" */,-7 , 8/* "MULT" */,-7 , 7/* "SUB" */,-7 , 6/* "ADD" */,-7 , 13/* "$" */,-7 , 3/* "RPAREN" */,-7 ),
    /* State 13 */ new Array( 10/* "POW" */,7 , 9/* "DIV" */,8 , 8/* "MULT" */,9 , 7/* "SUB" */,10 , 6/* "ADD" */,11 , 3/* "RPAREN" */,19 ),
    /* State 14 */ new Array( 10/* "POW" */,-6 , 9/* "DIV" */,-6 , 8/* "MULT" */,-6 , 7/* "SUB" */,-6 , 6/* "ADD" */,-6 , 13/* "$" */,-6 , 3/* "RPAREN" */,-6 ),
    /* State 15 */ new Array( 10/* "POW" */,7 , 9/* "DIV" */,-5 , 8/* "MULT" */,-5 , 7/* "SUB" */,-5 , 6/* "ADD" */,-5 , 13/* "$" */,-5 , 3/* "RPAREN" */,-5 ),
    /* State 16 */ new Array( 10/* "POW" */,7 , 9/* "DIV" */,-4 , 8/* "MULT" */,-4 , 7/* "SUB" */,-4 , 6/* "ADD" */,-4 , 13/* "$" */,-4 , 3/* "RPAREN" */,-4 ),
    /* State 17 */ new Array( 10/* "POW" */,7 , 9/* "DIV" */,8 , 8/* "MULT" */,9 , 7/* "SUB" */,-3 , 6/* "ADD" */,-3 , 13/* "$" */,-3 , 3/* "RPAREN" */,-3 ),
    /* State 18 */ new Array( 10/* "POW" */,7 , 9/* "DIV" */,8 , 8/* "MULT" */,9 , 7/* "SUB" */,-2 , 6/* "ADD" */,-2 , 13/* "$" */,-2 , 3/* "RPAREN" */,-2 ),
    /* State 19 */ new Array( 13/* "$" */,-8 , 6/* "ADD" */,-8 , 7/* "SUB" */,-8 , 8/* "MULT" */,-8 , 9/* "DIV" */,-8 , 10/* "POW" */,-8 , 3/* "RPAREN" */,-8 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 12/* p */,1 , 11/* e */,2 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( ),
    /* State 3 */ new Array( 11/* e */,12 ),
    /* State 4 */ new Array( 11/* e */,13 ),
    /* State 5 */ new Array( ),
    /* State 6 */ new Array( ),
    /* State 7 */ new Array( 11/* e */,14 ),
    /* State 8 */ new Array( 11/* e */,15 ),
    /* State 9 */ new Array( 11/* e */,16 ),
    /* State 10 */ new Array( 11/* e */,17 ),
    /* State 11 */ new Array( 11/* e */,18 ),
    /* State 12 */ new Array( ),
    /* State 13 */ new Array( ),
    /* State 14 */ new Array( ),
    /* State 15 */ new Array( ),
    /* State 16 */ new Array( ),
    /* State 17 */ new Array( ),
    /* State 18 */ new Array( ),
    /* State 19 */ new Array( )
);



/* Symbol labels */
var labels = new Array(
    "p'" /* Non-terminal symbol */,
    "WHITESPACE" /* Terminal symbol */,
    "LPAREN" /* Terminal symbol */,
    "RPAREN" /* Terminal symbol */,
    "INT" /* Terminal symbol */,
    "FLOAT" /* Terminal symbol */,
    "ADD" /* Terminal symbol */,
    "SUB" /* Terminal symbol */,
    "MULT" /* Terminal symbol */,
    "DIV" /* Terminal symbol */,
    "POW" /* Terminal symbol */,
    "e" /* Non-terminal symbol */,
    "p" /* Non-terminal symbol */,
    "$" /* Terminal symbol */
);


    
    info.offset = 0;
    info.src = src;
    info.att = new String();
    
    if( !err_off )
        err_off    = new Array();
    if( !err_la )
    err_la = new Array();
    
    sstack.push( 0 );
    vstack.push( 0 );
    
    la = __lex( info );

    while( true )
    {
        act = 21;
        for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
        {
            if( act_tab[sstack[sstack.length-1]][i] == la )
            {
                act = act_tab[sstack[sstack.length-1]][i+1];
                break;
            }
        }

        if( _dbg_withtrace && sstack.length > 0 )
        {
            __dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
                            "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
                            "\tAction: " + act + "\n" +
                            "\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
                                    "..." : "" ) + "\"\n" +
                            "\tStack: " + sstack.join() + "\n" +
                            "\tValue stack: " + vstack.join() + "\n" );
        }
        
            
        //Panic-mode: Try recovery when parse-error occurs!
        if( act == 21 )
        {
            if( _dbg_withtrace )
                __dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
            
            err_cnt++;
            err_off.push( info.offset - info.att.length );            
            err_la.push( new Array() );
            for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
            
            //Remember the original stack!
            var rsstack = new Array();
            var rvstack = new Array();
            for( var i = 0; i < sstack.length; i++ )
            {
                rsstack[i] = sstack[i];
                rvstack[i] = vstack[i];
            }
            
            while( act == 21 && la != 13 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n" );
                if( la == -1 )
                    info.offset++;
                    
                while( act == 21 && sstack.length > 0 )
                {
                    sstack.pop();
                    vstack.pop();
                    
                    if( sstack.length == 0 )
                        break;
                        
                    act = 21;
                    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                    {
                        if( act_tab[sstack[sstack.length-1]][i] == la )
                        {
                            act = act_tab[sstack[sstack.length-1]][i+1];
                            break;
                        }
                    }
                }
                
                if( act != 21 )
                    break;
                
                for( var i = 0; i < rsstack.length; i++ )
                {
                    sstack.push( rsstack[i] );
                    vstack.push( rvstack[i] );
                }
                
                la = __lex( info );
            }
            
            if( act == 21 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery failed, terminating parse process..." );
                break;
            }


            if( _dbg_withtrace )
                __dbg_print( "\tError recovery succeeded, continuing" );
        }
        
        /*
        if( act == 21 )
            break;
        */
        
        
        //Shift
        if( act > 0 )
        {            
            if( _dbg_withtrace )
                __dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
        
            sstack.push( act );
            vstack.push( info.att );
            
            la = __lex( info );
            
            if( _dbg_withtrace )
                __dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
        }
        //Reduce
        else
        {        
            act *= -1;
            
            if( _dbg_withtrace )
                __dbg_print( "Reducing by producution: " + act );
            
            rval = void(0);
            
            if( _dbg_withtrace )
                __dbg_print( "\tPerforming semantic action..." );
            
switch( act )
{
    case 0:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 1:
    {
         result = vstack[ vstack.length - 1 ];
    }
    break;
    case 2:
    {
         rval = vstack[ vstack.length - 3 ] + vstack[ vstack.length - 1 ];
    }
    break;
    case 3:
    {
         rval = vstack[ vstack.length - 3 ] - vstack[ vstack.length - 1 ];
    }
    break;
    case 4:
    {
         rval = vstack[ vstack.length - 3 ] * vstack[ vstack.length - 1 ];
    }
    break;
    case 5:
    {
         rval = vstack[ vstack.length - 3 ] / vstack[ vstack.length - 1 ];
    }
    break;
    case 6:
    {
         rval = Math.pow(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]);
    }
    break;
    case 7:
    {
         rval = vstack[ vstack.length - 1 ] * -1;
    }
    break;
    case 8:
    {
         rval = vstack[ vstack.length - 2 ];
    }
    break;
    case 9:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 10:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
}



            if( _dbg_withtrace )
                __dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
                
            for( var i = 0; i < pop_tab[act][1]; i++ )
            {
                sstack.pop();
                vstack.pop();
            }
                                    
            go = -1;
            for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
            {
                if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
                {
                    go = goto_tab[sstack[sstack.length-1]][i+1];
                    break;
                }
            }
            
            if( act == 0 )
                break;
                
            if( _dbg_withtrace )
                __dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
                
            sstack.push( go );
            vstack.push( rval );            
        }
        
        if( _dbg_withtrace )
        {        
            alert( _dbg_string );
            _dbg_string = new String();
        }
    }

    if( _dbg_withtrace )
    {
        __dbg_print( "\nParse complete." );
        alert( _dbg_string );
    }
    
    return {res: result, err: err_cnt};
}
