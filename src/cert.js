const fs      = require( 'fs' )
const splitCa = require( 'split-ca' )

var clientCertificate;
var caCertificate;

try {

    clientCertificate = fs.readFileSync( process.env.CLIENT_CERT, 'utf-8' )
    caCertificate     = splitCa( process.env.CA_CERT )

} catch ( err ) {

    console.log( err )

}

module.exports = {
    ca: caCertificate,
    cert: clientCertificate,
    key: clientCertificate
}
