const path = require ( 'path' ),
fs = require ( 'fs' ),
CSS = require ( 'clean-css' ),
cssOptions = { };

module.exports = function ( arg ) {
    if ( path.extname ( arg.file ) !== '.css' )
        throw new Error ( 'Invalid format file : ' + arg.file );
    
    if ( arg.minFile == undefined ) {
        arg.minFile = `${ path.parse ( arg.file ).name }.min${ path.extname ( arg.file ) }`;

    } else if ( path.extname ( arg.minFile ) !== '.css' )
        throw new Error ( 'Invalid format file : ' + arg.minFile );

    fs.readFile ( arg.file, { encoding: 'utf-8' }, ( err, data ) => {
        if ( err )
            throw err;

        data = new CSS ( cssOptions ).minify ( data );

        fs.writeFile ( arg.minFile, data.styles, ( error ) => {
            if ( error )
                throw error;
        } );
    } );
}