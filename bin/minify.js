#!/usr/bin/env node

const { Command } = require ( 'commander' ),
program = new Command (),
version = require ( '../package.json' ).version,
minJS = require ( '../lib/minJS.js' ),
minHTML = require ( '../lib/minHTML.js' ),
minCSS = require('../lib/minCSS');

program.version ( version, '-v, --version', version );

program
.option ( '-js, --javascript', 'JS file' )
.option ( '-html, --HypertextMarkupLanguage', 'HTML file' )
.option ( '-css, --CascadingStyleSheets', 'CSS file' )
.action (cmd => {
    if ( !cmd.HypertextMarkupLanguage & !cmd.CascadingStyleSheets & !cmd.javascript )
        throw new Error ( 'Missed option after command' );

    else {
        if ( cmd.javascript ) {

            if ( cmd.args.length == 0 )
                throw new Error ( 'You must give a file to minimize' );
            
            return minJS ( { file: cmd.args [0], minFile: cmd.args [1] } );
        }

        if ( cmd.HypertextMarkupLanguage ) {

            if ( cmd.args.length == 0 )
                throw new Error ( 'You must give a file to minimize' );

            return minHTML ( { file: cmd.args [0], minFile: cmd.args [1] } );
        }

        if ( cmd.CascadingStyleSheets ) {
            
            if ( cmd.args.length == 0 )
                throw new Error  ( 'You must give a file to minimize' );

            return minCSS ( { file: cmd.args [0], minFile: cmd.args [1] } );
        }
    }
} );

program.parse ();