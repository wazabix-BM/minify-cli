const path = require ( 'path' ),
fs = require ( 'fs' ),
{ minify } = require ( 'html-minifier' );

module.exports = function ( arg ) {
    if ( path.extname ( arg.file ) !== '.html' )
        throw new Error ( 'Invalid format file : ' + arg.file );
    
    if ( arg.minFile == undefined ) {
        arg.minFile = `${ path.parse ( arg.file ).name }.min${ path.extname ( arg.file ) }`;

    } else if ( path.extname ( arg.minFile ) !== '.html' )
        throw new Error ( 'Invalid format file : ' + arg.minFile );

    fs.readFile ( path.join ( __dirname, arg.file ), { encoding: 'utf-8' }, ( err, data ) => {
        if ( err )
            throw err;

        data = minify ( data, {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            preventAttributesEscaping: true,
            processConditionalComments: true,
            removeAttributeQuotes: true,
            removeComments: true
        } );

        fs.writeFile ( path.join ( __dirname, arg.minFile ), data, ( error ) => {
            if ( error )
                throw error;
        } );
    } );
}