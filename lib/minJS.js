const { minify } = require ( 'terser' ),
path = require ( 'path' ),
fs = require ( 'fs' );

module.exports = function ( arg ) {
    if ( path.extname ( arg.file ) !== '.js' )
        throw new Error ( 'Invalid format file : ' + arg.file );
    
    if ( arg.minFile == undefined ) {
        arg.minFile = `${ path.parse ( arg.file ).name }.min${ path.extname ( arg.file ) }`;

    } else if ( path.extname ( arg.minFile ) !== '.js' )
        throw new Error ( 'Invalid format file : ' + arg.minFile );

    fs.readFile ( path.join ( arg.file ), { encoding: 'utf-8' }, ( error, data ) => {
        if ( error )
            throw error;
        
        minify ( data ).then ( promise => {
            data = promise.code;
            
            fs.writeFile ( path.join ( arg.minFile ), data, ( error ) => {
                if ( error )
                    throw error;
            } );
        } );
    } );
}